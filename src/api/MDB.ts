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

  const discover = () => api.get("discover/movie");

  return {
    discover
  };
})();
