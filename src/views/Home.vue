<template>
  <div class="home">
    <HeroScroll :items="heroItems" :isLoading="trendingLoading" limit="8"></HeroScroll>

    <Scroller title="trending" :items="trending" type="movie" :isLoading="trendingLoading"></Scroller>
    <Scroller
      title="Popular movies"
      :items="popularMovies.list"
      type="movie"
      :isLoading="popularMovies.isLoading"
    ></Scroller>
    <Scroller
      title="Popular Tv Shows"
      :items="popularTV.list"
      type="tv"
      :isLoading="popularTV.isLoading"
    ></Scroller>
    <Scroller
      title="Now in Theaters"
      :items="nowPlaying.list"
      type="tv"
      :isLoading="nowPlaying.isLoading"
    ></Scroller>
    <Scroller
      title="Airing Tonight"
      :items="airingtTonight.list"
      type="tv"
      :isLoading="airingtTonight.isLoading"
    ></Scroller>
    <Scroller
      title="Upcoming movies"
      :items="upcoming.list"
      type="tv"
      :isLoading="upcoming.isLoading"
    ></Scroller>
  </div>
</template>

<style></style>

<script>
// @ is an alias to /src
import MDB from "@/api/MDB";
import HeroScroll from "@/components/HeroScroll";
import Scroller from "@/components/Scroller";
import store from "@/store";

export default {
  name: "Home",
  store,
  components: {
    HeroScroll,
    Scroller
  },
  created() {
    this.$store.dispatch("trending/fetch");
    this.$store.dispatch("movies/fetchPopular");
    this.$store.dispatch("tv/fetchPopular");
    this.$store.dispatch("movies/fetchUpcoming");
    this.$store.dispatch("movies/fetchNowPlaying");
    this.$store.dispatch("tv/fetchAiringTonight");
  },
  computed: {
    trending() {
      return this.$store.getters["trending/list"];
    },
    trendingLoading() {
      return this.$store.state.trending.isLoading;
    },
    heroItems() {
      return this.$store.getters["trending/listByScore"];
    },
    popularMovies() {
      return {
        isLoading: this.$store.state.movies.popular.isLoading,
        list: this.$store.getters["movies/popular"]
      };
    },
    popularTV() {
      return {
        isLoading: this.$store.state.movies.popular.isLoading,
        list: this.$store.getters["tv/popular"]
      };
    },
    upcoming() {
      return {
        isLoading: this.$store.state.movies.upcoming.isLoading,
        list: this.$store.getters["movies/upcoming"]
      };
    },
    nowPlaying() {
      return {
        isLoading: this.$store.state.movies.nowPlaying.isLoading,
        list: this.$store.getters["movies/nowPlaying"]
      };
    },
    airingtTonight() {
      return {
        isLoading: this.$store.state.tv.airingTonight.isLoading,
        list: this.$store.getters["tv/airingTonight"]
      };
    }
  },
  methods: {
    loadData: async function() {
      const resTV = await MDB.getPopularTV();
      this.popularTV = resTV.data.results;
    }
  }
};
</script>
