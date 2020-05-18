<template>
  <div id="app">
    <Trailer></Trailer>
    <Header role="banner" />

    <main role="main" v-if="isLoading">
      <Spinner :isFullPage="true"></Spinner>
    </main>
    <main role="main" v-else>
      <router-view />
    </main>
    <Footer role="contentinfo" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";
import Trailer from "@/components/Trailer";
import store from "@/store";

export default {
  name: "App",
  store,
  components: {
    Header,
    Footer,
    Spinner,
    Trailer
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  created() {
    store.dispatch("init");
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/base.scss";
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@900&display=swap");

body {
  &::-webkit-scrollbar {
    background-color: $app-bg;
    width: 0.8em;
  }
  &::-webkit-scrollbar-thumb,
  html::-webkit-scrollbar-thumb {
    background-color: #ffffff26;
    border-radius: 1em;
  }
}

#app {
  position: relative;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $app-color;
  background-color: $app-bg;

  min-height: 100%;
  font-size: 16px;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  main {
    flex-grow: 1;
  }
}
</style>
