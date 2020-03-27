<template>
  <div class="movie-card">
    <h1>{{title}}</h1>
    <img :src="posterPath" :alt="title + ' poster'" />
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: ["movie"],
  data() {
    return {
      title: this.movie.title.match(/^[^\(:]+/)[0],
      posterPath: "https://image.tmdb.org/t/p/w300" + this.movie.poster_path
    };
  }
};
</script>

<style>
</style>
