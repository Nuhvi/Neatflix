/* eslint-disable @typescript-eslint/camelcase */
import axios from "axios";

export default (() => {
  const config = {
    baseURL: "https://api.themoviedb.org/3",
    params: { api_key: process.env.VUE_APP_MDB_API_KEY }
  };

  const api = {
    get: (url: string) => axios.get(url, config)
  };

  const discoverMovies = () => api.get("discover/movie");
  const getMovie = (id: string) => api.get(`movie/${id}`);
  const getMovieRecommendations = (id: string) => api.get(`movie/${id}/recommendations`);
  const getPopularMovies = () => api.get("movie/popular");
  const getPopularTV = () => api.get("tv/popular");
  const getTrending = () => api.get("trending/all/week");
  const getMoviesGenres = () => api.get("genre/movie/list");
  const getTvGenres = () => api.get("genre/tv/list");

  return {
    discoverMovies,
    getMovie,
    getMovieRecommendations,
    getPopularMovies,
    getPopularTV,
    getTrending,
    getMoviesGenres,
    getTvGenres
  };
})();
