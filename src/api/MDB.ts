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
  const getTV = (id: string) => api.get(`tv/${id}`);
  const getMovieRecommendations = (id: string) => api.get(`movie/${id}/recommendations`);
  const getPopularMovies = () => api.get("movie/popular");
  const getPopularTV = () => api.get("tv/popular");
  const getTrending = () => api.get("trending/all/week");
  const getTrendingMovies = () => api.get("trending/movie/day");
  const getTrendingTV = () => api.get("trending/tv/day");
  const getMoviesGenres = () => api.get("genre/movie/list");
  const getTvGenres = () => api.get("genre/tv/list");
  const getConfig = () => api.get("configuration");
  const getUpcoming = () => api.get("movie/upcoming");
  const getNowPlaying = () => api.get("movie/now_playing");
  const getAiringTonight = () => api.get("tv/airing_today");
  const getMoviesVideos = (id: string) => api.get(`movie/${id}/videos`);
  const getTVVideos = (id: string) => api.get(`tv/${id}/videos`);

  return {
    discoverMovies,
    getMovie,
    getTV,
    getMovieRecommendations,
    getPopularMovies,
    getPopularTV,
    getTrending,
    getMoviesGenres,
    getTvGenres,
    getConfig,
    getUpcoming,
    getNowPlaying,
    getAiringTonight,
    getTrendingMovies,
    getTrendingTV,
    getMoviesVideos,
    getTVVideos
  };
})();
