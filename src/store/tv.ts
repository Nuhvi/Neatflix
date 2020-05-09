import MDB from "@/api/MDB";
import { mapIdToSelf, createTVItem } from "./helpers";

interface TV {
  id: number;
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
    UPDATE(state: any, payload: any) {
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
    }
  },
  actions: {
    update(context: any, payload: [{ id: number }]) {
      const standardized = payload.map((item: any) => {
        const movie = context.state.byId[item.id];
        return movie ? movie : createTVItem(item, context);
      });
      const map = mapIdToSelf(standardized);

      context.commit("UPDATE", map);
    },
    async fetchPopular(context: any) {
      context.commit("START_LOADING_POPULAR");
      const resPopular = await MDB.getPopularTV();

      context.commit(
        "SET_POPULAR_LIST",
        resPopular.data.results.map((item: TV) => item.id)
      );

      context.dispatch("tv/update", resPopular.data.results, { root: true });

      context.commit("END_LOADING_POPULAR");
    },
    async fetchAiringTonight(context: any) {
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
