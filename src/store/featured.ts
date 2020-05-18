import MDB from "@/api/MDB";
import _ from "lodash";
import { updateCachedData } from "@/utils";
import { FeaturedState } from "./types";

export default {
  namespaced: true,
  state: {
    isLoading: false,
    listTV: [],
    listMovies: []
  },
  mutations: {
    SET_LIST_MOVIES(state: FeaturedState, payload: [number]) {
      state.listMovies = payload;
    },
    SET_LIST_TV(state: FeaturedState, payload: [number]) {
      state.listTV = payload;
    },
    START_LOADING(state: FeaturedState) {
      state.isLoading = true;
    },
    END_LOADING(state: FeaturedState) {
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
      updateCachedData(context.state, "featured");
    }
  },
  getters: {
    listMovies(state: FeaturedState, getters: any, rootState: any) {
      return state.listMovies.map((id: number) => rootState.movies.byId[id]);
    },
    listTV(state: FeaturedState, getters: any, rootState: any) {
      return state.listTV.map((id: number) => rootState.tv.byId[id]);
    },

    list(state: FeaturedState, getters: any) {
      return _.sampleSize([...getters.listMovies, ...getters.listTV], 8);
    }
  }
};
