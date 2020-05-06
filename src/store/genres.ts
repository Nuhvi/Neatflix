import MDB from "@/api/MDB";

interface Genre {
  id: number;
  name: string;
}

export default {
  namespaced: true,
  state: {
    movie: {},
    tv: {}
  },
  mutations: {
    SET_MOVIE(state: any, payload: [Genre]) {
      state.movie = payload;
    },
    SET_TV(state: any, payload: [Genre]) {
      payload.forEach((item: Genre) => {
        state.tv = {
          ...state.tv,
          [item.id]: item.name
        };
      });
      state.tv = payload;
    }
  },
  actions: {
    async fetchAll(state: any) {
      const moviesGenres = await MDB.getMoviesGenres();
      const tvGenres = await MDB.getTvGenres();

      state.commit("SET_MOVIE", moviesGenres.data.genres);
      state.commit("SET_TV", tvGenres.data.genres);
    }
  },
  getters: {
    tvGenres(state: any) {
      return state.tv;
    }
  }
};
