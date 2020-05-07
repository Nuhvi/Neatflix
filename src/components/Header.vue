<template>
  <header>
    <div class="container">
      <router-link to="/" class="logo">
        <img src="@/assets/Neatflix.svg" alt="Neatflix" />
      </router-link>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/movies">Movies</router-link>
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
  border-bottom: 2px solid rgba(255, 255, 255, 0.05);

  .container {
    z-index: -1;

    position: relative;
    width: 100%;
    max-width: $xl;
    margin: auto;

    padding: 2em 1em;

    display: grid;
    grid-template-columns: 160px auto 160px;
    align-items: center;

    .logo {
      display: flex;
      justify-content: left;
      font-size: 1em;

      img {
        width: 6em;
      }
    }

    #nav {
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        color: inherit;
        font-size: 1em;
        padding: 0 0.4em;

        &:hover,
        &.router-link-exact-active {
          color: rgb(207, 207, 207);
        }
      }
    }
  }
}

@media screen and (max-width: $md) {
  header {
    .container {
      grid-template-columns: 1fr;
      .logo {
        justify-content: center;
      }
      #nav,
      .placeholder {
        display: none;
      }
    }
  }
}
</style>
