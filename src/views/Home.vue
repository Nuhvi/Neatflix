<template>
  <div class="home">
    <HeroScroll :items="trending"></HeroScroll>
    <Scroller title="trending" :items="trending" type="movie"></Scroller>
    <Scroller title="Popular movies" :items="popularMovies" type="movie"></Scroller>
    <Scroller title="Popular Tv Shows" :items="popularTV" type="tv"></Scroller>
  </div>
</template>

<style >
</style>

<script>
// @ is an alias to /src
import MDB from "@/api/MDB";
import HeroScroll from "@/components/HeroScroll";
import Scroller from "@/components/Scroller";

export default {
  name: "Home",
  components: {
    HeroScroll,
    Scroller
  },
  data: () => ({
    popularMovies: [],
    popularTV: [],
    trending: []
  }),
  created() {
    this.loadData();
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
