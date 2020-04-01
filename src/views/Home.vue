<template>
  <div class="home">
    <List>
      <Card v-for="movie in movies" :key="movie.id" :movie="movie" />
    </List>
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
import Card from "@/components/Card";
import List from "@/components/List";

export default {
  name: "Home",
  components: {
    Card,
    List
  },
  data: () => ({
    movies: String
  }),
  created() {
    this.loadData();
  },
  methods: {
    loadData: async function() {
      const res = await MDB.discoverMovies();
      this.movies = res.data.results;
    }
  }
};
</script>
