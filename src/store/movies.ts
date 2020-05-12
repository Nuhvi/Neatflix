import MDB from "@/api/MDB";
import { mapIdToSelf, createMovieItem } from "./helpers";
import { GenericItem } from "./types";
interface Movie {
  id: number;
  trailerPath: string;
}
interface State {
  byId: [Movie];
  popular: {
    isLoading: boolean;
    list: [number];
  };
  upcoming: {
    isLoading: boolean;
    list: [number];
  };
  nowPlaying: {
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
    upcoming: {
      isLoading: false,
      list: []
    },
    nowPlaying: {
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
    START_LOADING_UPCOMING(state: State) {
      state.upcoming.isLoading = true;
    },
    SET_UPCOMING_LIST(state: State, payload: [number]) {
      state.upcoming.list = payload;
    },
    END_LOADING_UPCOMING(state: State) {
      state.upcoming.isLoading = false;
    },
    START_LOADING_NOW_PLAYING(state: State) {
      state.nowPlaying.isLoading = true;
    },
    SET_NOW_PLAYING_LIST(state: State, payload: [number]) {
      state.nowPlaying.list = payload;
    },
    END_LOADING_NOW_PLAYING(state: State) {
      state.nowPlaying.isLoading = false;
    },
    ADD_TRAILER(state: State, payload: { id: number; trailerPath: string }) {
      state.byId[payload.id]["trailerPath"] = payload.trailerPath;
    },
    UPDATE_ONE(state: State, payload: GenericItem) {
      state.byId[payload.id] = { ...state.byId[payload.id], ...payload };
    }
  },
  actions: {
    update(context: any, payload: [{ id: number }]) {
      const standardized = payload.map((item: any) => {
        const movie = context.state.byId[item.id];
        return movie ? movie : createMovieItem(item, context);
      });

      context.commit("UPDATE", mapIdToSelf(standardized));
    },
    async fetchPopular(context: any) {
      context.commit("START_LOADING_POPULAR");
      const response = await MDB.getPopularMovies();

      context.commit(
        "SET_POPULAR_LIST",
        response.data.results.map((item: Movie) => item.id)
      );

      context.dispatch("movies/update", response.data.results, { root: true });

      context.commit("END_LOADING_POPULAR");
    },
    async fetchUpcoming(context: any) {
      context.commit("START_LOADING_UPCOMING");
      const response = await MDB.getUpcoming();

      context.commit(
        "SET_UPCOMING_LIST",
        response.data.results.map((item: Movie) => item.id)
      );

      context.dispatch("movies/update", response.data.results, { root: true });

      context.commit("END_LOADING_UPCOMING");
    },
    async fetchNowPlaying(context: any) {
      context.commit("START_LOADING_NOW_PLAYING");
      const response = await MDB.getNowPlaying();

      context.commit(
        "SET_NOW_PLAYING_LIST",
        response.data.results.map((item: Movie) => item.id)
      );

      context.dispatch("movies/update", response.data.results, { root: true });

      context.commit("END_LOADING_NOW_PLAYING");
    }
  },
  getters: {
    popular(state: State) {
      return state.popular.list.map((id: number) => state.byId[id]);
    },
    upcoming(state: State) {
      return state.upcoming.list.map((id: number) => state.byId[id]);
    },
    nowPlaying(state: State) {
      return state.nowPlaying.list.map((id: number) => state.byId[id]);
    }
  }
};
