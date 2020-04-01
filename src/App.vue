<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "assets/base.scss";
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

#app {
  position: relative;
  font-family: "Bebas Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #212025;

  min-height: 100%;
  font-size: 16px;
}
</style>
