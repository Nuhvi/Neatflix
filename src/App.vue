<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
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
  color: #9b9a9d;
  background-color: $app-bg;

  min-height: 100%;
  font-size: 16px;
  overflow: hidden;

  h1,
  h2 {
    font-family: "Bebas Neue", Helvetica, Arial, sans-serif;
  }
}
</style>
