<template>
  <div class="home">
    <List title="trending" :items="trending" type="movie"></List>
    <List title="Popular movies" :items="popularMovies" type="movie"></List>
    <List title="Popular Tv Shows" :items="popularTV" type="tv"></List>
  </div>
</template>

<style >
.home {
  padding-top: 8em;
}
</style>

<script>
// @ is an alias to /src
import MDB from "@/api/MDB";
import List from "@/components/List";

export default {
  name: "Home",
  components: {
    List
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
      this.popularMovies = resMovies.data.results.slice(0, 6);
      const resTV = await MDB.getPopularTV();
      this.popularTV = resTV.data.results.slice(0, 6);
      const resTrending = await MDB.getTrending();
      this.trending = resTrending.data.results.slice(0, 6);
    }
  }
};
</script>
