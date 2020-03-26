<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <p v-for="movie in movies" :key="movie.id">{{ movie }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MDB from "@/api/MDB";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data: () => ({
    movies: ""
  }),
  created() {
    this.loadData();
  },
  methods: {
    loadData: async function() {
      const res = await MDB.discover();
      this.movies = res.data.results;
    }
  }
};
</script>
