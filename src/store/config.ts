import MDB from "@/api/MDB";

interface Genre {
  id: number;
  name: string;
}

interface State {
  staticCategories: [string];
  isLoading: boolean;
  base: {};
  genres: {};
}

// TODO
// const configCache = () => {};

export default {
  namespaced: true,
  state: {
    staticCategories: ["Popular", "Top Rated", "Upcoming"],
    isLoading: true,
    genres: {}
  },
  mutations: {
    START_LOADING(state: State) {
      state.isLoading = true;
    },
    END_LOADING(state: State) {
      state.isLoading = false;
    },
    SET_CONFIG(state: State, payload: any) {
      state.base = payload;
    },
    SET_MOVIE_GENRES(state: any, payload: [Genre]) {
      const movieGenres = payload.reduce((map: any, obj: Genre) => {
        map[obj.id] = obj.name;
        return map;
      }, {});

      state.genres.movie = movieGenres;
    },
    SET_TV_GENRES(state: any, payload: [Genre]) {
      const tvGenres = payload.reduce((map: any, obj: Genre) => {
        map[obj.id] = obj.name;
        return map;
      }, {});

      state.genres.tv = tvGenres;
    }
  },
  actions: {
    async init(state: any) {
      state.commit("START_LOADING");
      await state.dispatch("getConfig");
      await state.dispatch("getGenres");
      state.commit("END_LOADING");
    },
    async getConfig(state: any) {
      const res = await MDB.getConfig();
      state.commit("SET_CONFIG", res.data);
    },
    async getGenres(state: any) {
      const moviesGenres = await MDB.getMoviesGenres();
      const tvGenres = await MDB.getTvGenres();

      state.commit("SET_MOVIE_GENRES", moviesGenres.data.genres);
      state.commit("SET_TV_GENRES", tvGenres.data.genres);
    }
  }
};
