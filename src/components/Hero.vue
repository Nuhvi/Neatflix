<template>
  <div>
    <img :src="backdropPath" :alt="title + ' backdrop'" />
    <article role="article">
      <h1>{{title}}</h1>
    </article>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: ["item"],
  data() {
    this.item.title = this.item.title || this.item.original_name;

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

<style lang="scss" scoped>
div {
  width: 100%;
  height: 100%;
  display: block;

  overflow: hidden;

  &::after,
  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  &::before {
    z-index: 9;
    content: "";
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 75%,
      $app-bg 95%
    );
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }

  article {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    text-align: left;
    padding: 5em;
  }
}
</style>
