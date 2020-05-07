<template>
  <div class="home">
    <HeroScroll :items="HeroItems" :isLoading="HeroItemsLoading" limit="8"></HeroScroll>
    <Scroller title="trending" :items="trending" type="movie"></Scroller>
    <Scroller title="Popular movies" :items="popularMovies" type="movie"></Scroller>
    <Scroller title="Popular Tv Shows" :items="popularTV" type="tv"></Scroller>
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
  data: () => ({
    popularMovies: [],
    popularTV: []
  }),
  created() {
    this.$store.dispatch("trending/fetch");
  },
  computed: {
    trending() {
      return this.$store.getters["trending/list"];
    },
    HeroItems() {
      return this.$store.getters["trending/listByScore"];
    },
    HeroItemsLoading() {
      return this.$store.state.trending.isLoading;
    }
  },
  methods: {
    loadData: async function() {
      const resMovies = await MDB.getPopularMovies();
      this.popularMovies = resMovies.data.results;
      const resTV = await MDB.getPopularTV();
      this.popularTV = resTV.data.results;
      const resTrending = await MDB.getTrending();
      this.trending = resTrending.data.results;
    }
  }
};
</script>
