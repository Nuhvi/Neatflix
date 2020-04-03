<template>
  <router-link
    class="card"
    v-bind:class="{ expandable: expandable }"
    :to="`/${mediaType}/${id}/${title.replace(/\s/g, '_')}`"
  >
    <figure>
      <img :src="posterPath" :alt="title + ' poster'" />

      <figcaption>
        <h3>{{ title }}</h3>
        <p>{{item.date}}</p>
      </figcaption>
    </figure>
  </router-link>
</template>

<script >
export default {
  name: "Card",
  props: {
    item: {},
    expandable: Boolean
  },
  data() {
    this.item.title = this.item.title || this.item.original_name;
    this.item.date = this.first_air_date || this.first_air_date;
    console.log(this.item);
    return {
      id: this.item.id,
      title: this.item.title.match(/^[^\(:]+/)[0],
      mediaType: "movie",
      posterPath: "https://image.tmdb.org/t/p/w300" + this.item.poster_path,
      backdropPath: "https://image.tmdb.org/t/p/w300" + this.item.backdrop_path
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: block;
  padding-top: 150%;

  figure {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;

    img {
      width: 100%;
      height: 100%;
      display: block;
      box-shadow: none;
    }

    figcaption {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      color: white;

      transition: all 0.1s ease-in-out;

      visibility: hidden;
      opacity: 0;

      h3 {
        font-weight: normal;
      }
    }
  }

  &.expandable {
    &:hover {
      figcaption {
        opacity: 1;
        visibility: visible;
        background: rgba(0, 0, 0, 0.452);
      }
    }
  }
}
</style>
