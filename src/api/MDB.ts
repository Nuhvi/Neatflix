/* eslint-disable @typescript-eslint/camelcase */
import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.MDB_API_KEY
  }
});
