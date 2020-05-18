import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";

import config from "./config";
import featured from "./featured";
import trending from "./trending";
import movies from "./movies";
import tv from "./tv";
import trailer from "./trailer";
import user from "./user";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    isLoading: false
  },
  mutations: {
    START_LOADING(state: RootState) {
      state.isLoading = true;
    },
    END_LOADING(state: RootState) {
      state.isLoading = false;
    }
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
  actions: {
    async init(context: any) {
      context.commit("START_LOADING");
      await context.dispatch("config/init");
      await context.dispatch("user/init");
      context.commit("END_LOADING");
    }
  }
};

export default new Vuex.Store<RootState>(store);
