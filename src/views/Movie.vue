<template>
  <div>
    <main class="movie_page">
      <img :src="backdropPath" :alt="movie.title + ` backdrop`" />
      <div class="overlay">
        <section>
          <h1>{{ movie.title }}</h1>
          <h2>{{ movie.tagline }}</h2>
          <p>{{ movie.overview }}</p>
          <p>{{ movie }}</p>
        </section>
      </div>
    </main>
    <aside></aside>
  </div>
</template>

<style lang="scss" scoped>
.movie_page {
  position: relative;
  height: 100vh;
  color: white;

  img {
    display: inline;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 0;
    filter: brightness(0.6);
  }

  .overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding-top: 4em;

    section {
      max-width: 1200px;
      margin: auto;
      padding: 0 1em;
      text-align: left;

      h1,
      h2 {
        text-transform: uppercase;
      }
      h1 {
        font-size: 3em;
      }
    }
  }
}
</style>

<script>
import MDB from "@/api/MDB";
import store from "@/store";

export default {
  name: "Movie",
  store,
  data: function() {
    return {
      movie: {},
      backdropPath: String
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData: async function() {
      let movie = this.$store.state.movies.byId[this.$route.params.id];
      if (!movie) {
        const res = await MDB.getMovie(this.$route.params.id);
        movie = res.data;
      }
      this.movie = movie;

      this.backdropPath = "https://image.tmdb.org/t/p/original" + this.movie.backdrop_path;
    }
  }
};
</script>
