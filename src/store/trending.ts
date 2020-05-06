import MDB from "@/api/MDB";
import { standrdize } from "./helpers";

export default {
  namespaced: true,
  state: {
    isFetching: false,
    idList: []
  },
  mutations: {
    SET_ID_LIST(state: any, payload: [number]) {
      state.idList = payload;
    },
    START_LOADING(state: any) {
      state.loading = true;
    },
    END_LOADING(state: any) {
      state.loading = false;
    }
  },
  actions: {
    async fetch(state: any) {
      state.commit("START_LOADING");
      const resTrending = await MDB.getTrending();
      state.commit("END_LOADING");

      let results = resTrending.data.results;
      const trendingIds = results.map((item: { id: number }) => item.id);

      results = results.map((item: any) => standrdize(item, state));

      state.commit(
        "movies/UPDATE",
        results.filter((item: any) => item.media_type === "movie"),
        { root: true }
      );

      state.commit(
        "tv/UPDATE",
        results.filter((item: any) => item.media_type === "tv"),
        { root: true }
      );

      console.log(results);

      state.commit("SET_ID_LIST", trendingIds);
    }
  },
  getters: {
    list(state: any, getters: any, rootState: any, rootGetters: any) {
      return state.idList.map((id: any) => rootState.movies.byId[id] || rootState.tv.byId[id]);
    },
    isFetching(state: any) {
      return state.isFetching;
    }
  }
};
