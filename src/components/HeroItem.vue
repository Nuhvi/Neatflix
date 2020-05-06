<template>
  <article role="article">
    <img :src="backdropPath" :alt="title + ' backdrop'" />
  </article>
</template>

<script>
export default {
  name: "HeroItem",
  props: ["item"],
  data() {
    this.item.title = this.item.title || this.item.original_name;

    let width;

    return {
      id: this.item.id,
      title: this.item.title.match(/^[^\(:]+/)[0],
      mediaType: "movie",
      backdropPath:
        "https://image.tmdb.org/t/p/original" + this.item.backdrop_path
    };
  }
};
</script>

<style lang="scss" >
.hero {
  article {
    width: 100%;
    height: 100%;
    display: block;

    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
}
</style>
