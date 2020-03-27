<template>
  <div class="card">
    <h1>{{title}}</h1>
    <router-link :to="'/movie/'+title">
      <img :src="posterPath" :alt="title + ' poster'" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
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
