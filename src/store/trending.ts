import MDB from "@/api/MDB";
import { standardize } from "./helpers";

interface TrendingItem {
  id: number;
  mediaType: string;
}
interface State {
  list: [TrendingItem];
  isLoading: boolean;
}

export default {
  namespaced: true,
  state: {
    isLoading: false,
    list: []
  },
  mutations: {
    SET_ID_LIST(state: State, payload: [TrendingItem]) {
      state.list = payload;
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
      const resTrending = await MDB.getTrending();
      context.commit("END_LOADING");

      let results = resTrending.data.results;
      const trendingIds = results.map((item: { id: number; media_type: string }) => ({
        id: item.id,
        mediaType: item.media_type
      }));
      context.commit("SET_ID_LIST", trendingIds);

      results = results.map((item: any) =>
        standardize(item, { genres: context.rootState.global.genres })
      );

      context.dispatch(
        "movies/update",
        results.filter((item: any) => item.media_type === "movie"),
        { root: true }
      );

      context.commit(
        "tv/UPDATE",
        results.filter((item: any) => item.media_type === "tv"),
        { root: true }
      );
    }
  },
  getters: {
    list(state: State, getters: any, rootState: any) {
      return state.list.map((item: TrendingItem) => {
        if (item.mediaType === "tv") {
          return rootState.tv.byId[item.id];
        } else {
          return rootState.movies.byId[item.id];
        }
      });
    },
    listByScore(state: State, getters: any) {
      return getters.list.sort((a: any, b: any) => b.vote_average - a.vote_average);
    },
    isLoading(state: State) {
      return state.isLoading;
    }
  }
};
