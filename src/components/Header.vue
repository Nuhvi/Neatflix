<template>
  <header>
    <div class="container">
      <router-link to="/" class="logo">
        <h1>Neatflix</h1>
      </router-link>
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/movies">Movies</router-link>|
        <router-link to="/tv">Series</router-link>
      </div>
      <a class="placeholder">user</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
header {
  width: 100%;
  position: absolute;
  z-index: 999;
  color: #9b9a9d;

  .container {
    z-index: -1;

    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: auto;

    padding: 3em 5em;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.logo {
  margin: 0;
  color: #ff000d;

  h1 {
    letter-spacing: 0.1em;
    margin: 0;
  }
}

#nav {
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: inherit;
    font-size: 1.2em;
    padding: 0 0.4em;

    &:hover,
    &.router-link-exact-active {
      color: rgb(207, 207, 207);
    }
  }
}
</style>
