<template>
  <div class="home">
    <HeroScroll :items="featured.list" :isLoading="featured.isLoading"></HeroScroll>
    <Scroller title="trending" :items="trending.list" :isLoading="trending.isLoading"></Scroller>
    <Scroller
      title="Airing Tonight"
      :items="airingtTonight.list"
      :isLoading="airingtTonight.isLoading"
    ></Scroller>
    <Scroller
      title="Now in Theaters"
      :items="nowPlaying.list"
      :isLoading="nowPlaying.isLoading"
    ></Scroller>
    <Scroller
      title="Upcoming movies"
      :items="upcoming.list"
      :isLoading="upcoming.isLoading"
    ></Scroller>
    <Scroller
      title="Popular movies"
      :items="popularMovies.list"
      :isLoading="popularMovies.isLoading"
    ></Scroller>
    <Scroller
      title="Popular Tv Shows"
      :items="popularTV.list"
      :isLoading="popularTV.isLoading"
    ></Scroller>
  </div>
</template>

<style></style>

<script>
// @ is an alias to /src
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
    this.featured.list.length === 0 && this.$store.dispatch("featured/fetch");
    this.trending.list.length === 0 && this.$store.dispatch("trending/fetch");
    this.popularMovies.list.length === 0 && this.$store.dispatch("movies/fetchPopular");
    this.popularTV.list.length === 0 && this.$store.dispatch("tv/fetchPopular");
    this.upcoming.list.length === 0 && this.$store.dispatch("movies/fetchUpcoming");
    this.nowPlaying.list.length === 0 && this.$store.dispatch("movies/fetchNowPlaying");
    this.airingtTonight.list.length === 0 && this.$store.dispatch("tv/fetchAiringTonight");
  },
  computed: {
    featured() {
      return {
        isLoading: this.$store.state.featured.isLoading,
        list: this.$store.getters["featured/list"]
      };
    },
    trending() {
      return {
        isLoading: this.$store.state.trending.isLoading,
        list: this.$store.getters["trending/list"]
      };
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
  }
};
</script>
