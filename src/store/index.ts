import Vue from "vue";
import Vuex from "vuex";

import { RootState, TrendingModel } from "./types";
import trending from "./trending";
import movies from "./movies";
import tv from "./tv";
import global from "./config";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    trending,
    movies,
    tv,
    global
  },
  actions: {}
});
