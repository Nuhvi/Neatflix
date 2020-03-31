<template>
  <div class="movie_page">
    <img :src="backdropPath" :alt="movie.title + ` backdrop`" />

    <!-- <figcaption>
        <p>{{movie}}</p>
    </figcaption>-->
  </div>
</template>

<style lang="scss" scoped>
.movie_page {
  height: 100vh;
  color: white;

  img {
    display: inline;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
