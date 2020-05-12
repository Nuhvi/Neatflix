import MDB from "@/api/MDB";
import _ from "lodash";

interface State {
  listMovies: [number];
  listTV: [number];
  isLoading: boolean;
}

export default {
  namespaced: true,
  mutations: {},
  actions: {
    async fetch(context: any, payload: { id: number | string; mediaType: string }) {
      const youtubeBase = "https://www.youtube.com/embed/";
      const options =
        "?autoplay=1&cc_load_policy=0&controls=1&disablekb=0&enablejsapi=0&fs=1&iv_load_policy=1&loop=0&rel=0&showinfo=1&start=0&wmode=transparent&theme=dark";
      let resVideos;

      if (payload.mediaType === "movie") {
        if (context.rootState.movies.byId[payload.id].trailerPath) return;
        resVideos = await MDB.getMoviesVideos(`${payload.id}`);
      } else {
        if (context.rootState.tv.byId[payload.id].trailerPath) return;
        resVideos = await MDB.getTVVideos(`${payload.id}`);
      }
      const videos = resVideos.data.results;

      const trailer = videos.find(
        (video: any) =>
          (video.type === "Trailer" || video.type === "Teaser") && video.site === "YouTube"
      );

      const trailerPath = trailer && youtubeBase + trailer.key + options;

      if (payload.mediaType === "movie") {
        context.commit(
          "movies/ADD_TRAILER",
          { id: payload.id, trailerPath: trailerPath },
          { root: true }
        );
      } else {
        context.commit(
          "tv/ADD_TRAILER",
          { id: payload.id, trailerPath: trailerPath },
          { root: true }
        );
      }
    }
  }
};
