import MDB from "@/api/MDB";
import storage from "local-storage-fallback";
import { mapIdToName } from "./helpers";
import { Genre, ConfigState } from "./types";

export default {
  namespaced: true,
  state: {
    isLoading: false,
    genres: {}
  },
  mutations: {
    START_LOADING(state: ConfigState) {
      state.isLoading = true;
    },
    END_LOADING(state: ConfigState) {
      state.isLoading = false;
    },
    SET_CONFIG(state: ConfigState, payload: any) {
      state.base = payload;
    },
    SET_GENRES(state: any, payload: { movie: [Genre]; tv: [Genre] }) {
      const movie = mapIdToName(payload.movie);
      const tv = mapIdToName(payload.tv);

      state.genres = { movie, tv };
    },
    SET_CACHED_GENRES(state: any, payload: { movie: [Genre]; tv: [Genre] }) {
      state.genres = payload;
    }
  },
  actions: {
    async init(context: any) {
      context.commit("START_LOADING");
      const weekAgo = new Date(Date.now() - 604800000);
      const storedConfigDate = storage.getItem("config_cache_date");

      if (weekAgo < new Date(storedConfigDate || 0)) {
        const configBase = storage.getItem("base");
        const genres = storage.getItem("genres");

        configBase && context.commit("SET_CONFIG", JSON.parse(configBase));
        genres && context.commit("SET_CACHED_GENRES", JSON.parse(genres));
      } else {
        await context.dispatch("getConfig");
        await context.dispatch("getGenres");

        storage.setItem("base", JSON.stringify(context.state.base));
        storage.setItem("genres", JSON.stringify(context.state.genres));
        storage.setItem("config_cache_date", new Date().toDateString());
      }
      context.commit("END_LOADING");
    },
    async getConfig(context: any) {
      const res = await MDB.getConfig();
      context.commit("SET_CONFIG", res.data);
    },
    async getGenres(context: any) {
      const moviesGenres = await MDB.getMoviesGenres();
      const tvGenres = await MDB.getTvGenres();

      context.commit("SET_GENRES", {
        movie: moviesGenres.data.genres,
        tv: tvGenres.data.genres
      });
    }
  }
};
