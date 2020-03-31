<template>
  <router-link :to="`/movie/${id}/${title.replace(/\s/g, '_')}`">
    <img :src="posterPath" :alt="title + ' poster'" />
    <figcaption>
      <h2>{{title}}</h2>
    </figcaption>
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

<style lang='scss'>
a {
  display: inline-block;

  img {
    width: 100%;
    display: block;
    border-radius: 0.5rem;
  }

  figcaption,
  h2 {
    margin: 0;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.2);

    img {
      border-radius: 0.5rem 0.5rem 0 0;
    }

    figcaption {
      background: red;
    }
  }
}
</style>
