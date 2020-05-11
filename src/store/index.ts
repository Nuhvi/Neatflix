import Vue from "vue";
import Vuex from "vuex";

import global from "./config";
import featured from "./featured";
import trending from "./trending";
import movies from "./movies";
import tv from "./tv";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    featured,
    trending,
    movies,
    tv,
    global
  },
  actions: {}
});
