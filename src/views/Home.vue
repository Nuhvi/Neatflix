<template>
  <div class="home">
    <div>
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MDB from "@/api/MDB";
import MovieCard from "@/components/MovieCard";

export default {
  name: "Home",
  components: {
    MovieCard
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
