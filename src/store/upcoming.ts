import MDB from "@/api/MDB";
import { createMovieItem } from "./helpers";

interface State {
  idList: [number];
  isLoading: boolean;
}

export default {
  namespaced: true,
  state: {
    idList: [],
    isLoading: false
  },
  mutations: {
    SET_ID_LIST(state: State, payload: [number]) {
      state.idList = payload;
    },
    START_LOADING(state: State) {
      state.isLoading = true;
    },
    END_LOADING(state: State) {
      state.isLoading = false;
    }
  },
  actions: {
    async fetch(context: any) {
      context.commit("START_LOADING");

      const resUpcoming = await MDB.getUpcoming();

      const results = resUpcoming.data.results;

      context.dispatch("movies/update", results, { root: true });

      const UpcomingIds = results.map((item: { id: number }) => item.id);

      context.commit("SET_ID_LIST", UpcomingIds);
      context.commit("END_LOADING");
    }
  },
  getters: {
    list(state: State, getters: any, rootState: any, rootGetters: any) {
      return state.idList.map((id: number) => {
        return rootState.movies.byId[id];
      });
    }
  }
};
