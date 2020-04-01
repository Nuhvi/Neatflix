<template>
  <router-link class="card" :to="`/${type}/${id}/${title.replace(/\s/g, '_')}`">
    <img :src="posterPath" :alt="title + ' poster'" />
    <h3>{{title}}</h3>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: ["item", "type"],
  data() {
    this.item.title = this.item.title || this.item.original_name;
    return {
      id: this.item.id,
      title: this.item.title.match(/^[^\(:]+/)[0],
      posterPath: "https://image.tmdb.org/t/p/w300" + this.item.poster_path
    };
  }
};
</script>

<style lang='scss' >
@mixin pop-card {
  box-shadow: 0rem 1em 2em rgba(0, 0, 0, 1);
}

.card {
  position: relative;

  transition: all 100ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;

  h3 {
    position: absolute;
    bottom: 0;
    left: 0;
    visibility: hidden;
  }

  img {
    @include pop-card;
    width: 100%;
    display: block;
    border-radius: 0.5em;
  }

  figcaption,
  h2 {
    margin: 0;
  }
}

@media screen and (min-width: 400px) {
  .card {
    img {
      border-radius: 0;
      box-shadow: none;
      filter: brightness(0.75);
    }
    &:hover {
      z-index: 9999999;
      transform: scale(1.1);

      img {
        @include pop-card;
        filter: brightness(1);
      }
    }
  }
}
</style>
