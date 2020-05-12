import MDB from "@/api/MDB";
import { mapIdToSelf, createTVItem } from "./helpers";
import { GenericItem } from "./types";

interface TV {
  id: number;
  trailerPath: string;
}
interface State {
  byId: [TV];
  popular: {
    isLoading: boolean;
    list: [number];
  };
  airingTonight: {
    isLoading: boolean;
    list: [number];
  };
}

interface Context {
  commit: Function;
  dispatch: Function;
  getters: {};
  rootGetters: {};
  rootState: {};
  state: State;
}

export default {
  namespaced: true,
  state: {
    byId: {},
    popular: {
      isLoading: false,
      list: []
    },
    airingTonight: {
      isLoading: false,
      list: []
    }
  },
  mutations: {
    UPDATE(state: State, payload: [TV]) {
      state.byId = { ...state.byId, ...payload };
    },
    START_LOADING_POPULAR(state: State) {
      state.popular.isLoading = true;
    },
    SET_POPULAR_LIST(state: State, payload: [number]) {
      state.popular.list = payload;
    },
    END_LOADING_POPULAR(state: State) {
      state.popular.isLoading = false;
    },
    START_LOADING_AIRING_TONIGHT(state: State) {
      state.airingTonight.isLoading = true;
    },
    SET_AIRING_TONIGHT_LIST(state: State, payload: [number]) {
      state.airingTonight.list = payload;
    },
    END_LOADING_AIRING_TONIGHT(state: State) {
      state.airingTonight.isLoading = false;
    },
    ADD_TRAILER(state: State, payload: { id: number; trailerPath: string }) {
      state.byId[payload.id]["trailerPath"] = payload.trailerPath;
    },
    UPDATE_ONE(state: State, payload: GenericItem) {
      state.byId[payload.id] = { ...state.byId[payload.id], ...payload };
    }
  },
  actions: {
    update(context: Context, payload: [{ id: number }]) {
      const standardized = payload.map((item: { id: number }) => {
        const tv = context.state.byId[item.id];
        return tv ? tv : createTVItem(item, context);
      });

      context.commit("UPDATE", mapIdToSelf(standardized));
    },
    async fetchPopular(context: Context) {
      context.commit("START_LOADING_POPULAR");
      const resPopular = await MDB.getPopularTV();

      context.commit(
        "SET_POPULAR_LIST",
        resPopular.data.results.map((item: TV) => item.id)
      );

      context.dispatch("tv/update", resPopular.data.results, { root: true });

      context.commit("END_LOADING_POPULAR");
    },
    async fetchAiringTonight(context: Context) {
      context.commit("START_LOADING_AIRING_TONIGHT");
      const resPopular = await MDB.getAiringTonight();

      context.commit(
        "SET_AIRING_TONIGHT_LIST",
        resPopular.data.results.map((item: TV) => item.id)
      );

      context.dispatch("tv/update", resPopular.data.results, { root: true });

      context.commit("END_LOADING_AIRING_TONIGHT");
    }
  },
  getters: {
    popular(state: State) {
      return state.popular.list.map((id: number) => state.byId[id]);
    },
    airingTonight(state: State) {
      return state.airingTonight.list.map((id: number) => state.byId[id]);
    }
  }
};
