<template>
  <div>
    <main class="movie_page">
      <img :src="backdropPath" :alt="movie.title + ` backdrop`" />
      <div class="overlay">
        <section>
          <h1>{{movie.title}}</h1>
          <h2>{{movie.tagline}}</h2>
          <p>{{movie.overview}}</p>
          <p>{{movie}}</p>
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

export default {
  name: "Movie",

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
      const res = await MDB.getMovie(this.$route.params.id);
      this.movie = res.data;
      this.backdropPath =
        "https://image.tmdb.org/t/p/original" + res.data.backdrop_path;

      console.log(this.movie);
    }
  }
};
</script>
