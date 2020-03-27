<template>
  <div class="home">
    <div>
      <Card v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MDB from "@/api/MDB";
import Card from "@/components/Card";

export default {
  name: "Home",
  components: {
    Card
  },
  data: () => ({
    movies: String
  }),
  created() {
    this.loadData();
  },
  methods: {
    loadData: async function() {
      const res = await MDB.discover();
      this.movies = res.data.results;
    }
  }
};
</script>
