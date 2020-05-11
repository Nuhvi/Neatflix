import MDB from "@/api/MDB";

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

      const results = resTrending.data.results;

      const trendingList = results.map((item: { id: number; media_type: string }) => ({
        id: item.id,
        mediaType: item.media_type
      }));

      context.commit("SET_ID_LIST", trendingList);

      context.dispatch(
        "movies/update",
        results.filter((item: any) => item.media_type === "movie"),
        { root: true }
      );

      context.dispatch(
        "tv/update",
        results.filter((item: any) => item.media_type === "tv"),
        { root: true }
      );

      context.commit("END_LOADING");
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
    }
  }
};
