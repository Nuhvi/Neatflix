<template>
  <router-link
    class="card"
    v-bind:class="{ standalone: isStandalone, hoverable:hoverable }"
    :to="`/${itemType}/${id}/${title.replace(/\s/g, '_')}`"
  >
    <img :src="posterPath" :alt="title + ' poster'" />
    <h3>{{title}}</h3>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: {},
    itemType: String,
    isStandalone: Boolean,
    hoverable: Boolean
  },
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
    width: 100%;
    display: block;
    box-shadow: none;
    filter: brightness(0.75);
  }

  figcaption,
  h2 {
    margin: 0;
  }

  &.hoverable {
    &:hover {
      z-index: 9999999;
      transform: scale(1.1);

      img {
        box-shadow: 0rem 1em 2em rgba(0, 0, 0, 1);
        filter: brightness(1);
      }
    }
  }

  &.standalone {
    img {
      border-radius: 0.5em;
      box-shadow: 0rem 0.4em 0.4em rgba(0, 0, 0, 1);
      filter: none;
    }
  }
}
</style>
