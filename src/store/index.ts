import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import storage from "local-storage-fallback";

import config from "./config";
import featured from "./featured";
import trending from "./trending";
import movies from "./movies";
import tv from "./tv";
import trailer from "./trailer";
import user from "./user";

import { isRecent } from "@/utils";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    isLoading: false,
    hasCachedData: false
  },
  modules: {
    featured,
    trending,
    movies,
    tv,
    config,
    trailer,
    user
  },
  mutations: {
    START_LOADING(state: RootState) {
      state.isLoading = true;
    },
    END_LOADING(state: RootState) {
      state.isLoading = false;
    },
    SET_CACHED_DATA(state: RootState, payload: RootState) {
      state.tv = payload.tv;
      state.movies = payload.movies;
      state.trending = payload.trending;
      state.featured = payload.featured;
      state.hasCachedData = !!(
        payload.tv &&
        payload.movies &&
        payload.trending &&
        payload.featured
      );
    }
  },
  actions: {
    async init(context: any) {
      context.commit("START_LOADING");
      const cachedDataDate = storage.getItem("data_cache_date");
      const cachedData = storage.getItem("data");

      if (isRecent(cachedDataDate, 1) && cachedData) {
        context.commit("SET_CACHED_DATA", JSON.parse(cachedData));
      }

      await context.dispatch("config/init");
      await context.dispatch("user/init");
      context.commit("END_LOADING");
    }
  }
};

export default new Vuex.Store<RootState>(store);
