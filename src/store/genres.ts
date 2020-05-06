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
      const movieGenres = payload.reduce((map: any, obj: Genre) => {
        map[obj.id] = obj.name;
        return map;
      }, {});

      state.movie = movieGenres;
    },
    SET_TV(state: any, payload: [Genre]) {
      const tvGenres = payload.reduce((map: any, obj: Genre) => {
        map[obj.id] = obj.name;
        return map;
      }, {});

      state.tv = tvGenres;
    }
  },
  actions: {
    async fetchAll(state: any) {
      const moviesGenres = await MDB.getMoviesGenres();
      const tvGenres = await MDB.getTvGenres();

      state.commit("SET_MOVIE", moviesGenres.data.genres);
      state.commit("SET_TV", tvGenres.data.genres);
    }
  }
};
