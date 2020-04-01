<template>
  <router-link class="card" :to="`/movie/${id}/${title.replace(/\s/g, '_')}`">
    <img :src="posterPath" :alt="title + ' poster'" />
    <!-- <figcaption>
      <h2>{{title}}</h2>
    </figcaption>-->
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: ["movie"],
  data() {
    return {
      id: this.movie.id,
      title: this.movie.title.match(/^[^\(:]+/)[0],
      posterPath: "https://image.tmdb.org/t/p/w300" + this.movie.poster_path
    };
  }
};
</script>

<style lang='scss' >
.card {
  display: inline-block;

  img {
    width: 100%;
    display: block;
  }

  figcaption,
  h2 {
    margin: 0;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0em 2em 5em rgba(0, 0, 0, 0.2);

    img {
      border-radius: 0.5em;
    }

    figcaption {
      background: red;
    }
  }
}
</style>
