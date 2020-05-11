import MDB from "@/api/MDB";
import _ from "lodash";

interface State {
  listMovies: [number];
  listTV: [number];
  isLoading: boolean;
}

export default {
  namespaced: true,
  state: {
    isLoading: false,
    listTV: [],
    listMovies: []
  },
  mutations: {
    SET_LIST_MOVIES(state: State, payload: [number]) {
      state.listMovies = payload;
    },
    SET_LIST_TV(state: State, payload: [number]) {
      state.listTV = payload;
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
      const resTrendingMovies = await MDB.getTrendingMovies();
      const resTrendingTV = await MDB.getTrendingTV();

      const resultsTrendingMovies = resTrendingMovies.data.results;
      const resultsresTrendingTV = resTrendingTV.data.results;

      context.commit(
        "SET_LIST_MOVIES",
        resultsTrendingMovies.map((item: any) => item.id)
      );
      context.commit(
        "SET_LIST_TV",
        resultsresTrendingTV.map((item: any) => item.id)
      );

      context.dispatch("movies/update", resultsTrendingMovies, { root: true });
      context.dispatch("tv/update", resultsresTrendingTV, { root: true });

      context.commit("END_LOADING");
    }
  },
  getters: {
    listMovies(state: State, getters: any, rootState: any) {
      return state.listMovies.map((id: number) => rootState.movies.byId[id]);
    },
    listTV(state: State, getters: any, rootState: any) {
      return state.listTV.map((id: number) => rootState.tv.byId[id]);
    },

    list(state: State, getters: any) {
      return _.sampleSize([...getters.listMovies, ...getters.listTV], 8);
    }
  }
};
