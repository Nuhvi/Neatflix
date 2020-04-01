<template>
  <header>
    <div class="nav-container">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <div class="header-container">
      <router-link to="/" class="logo">
        <h1>Neatflix</h1>
      </router-link>
      <div class="placeholder"></div>
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
  padding: 3em;

  display: flex;

  text-transform: uppercase;
  color: #9b9a9d;
}

.header-container {
  .logo {
    margin: 0;
    color: #ff000d;

    h1 {
      margin: 0;
    }
  }
}

.nav-container {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  #nav {
    width: 8em;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: inherit;
      font-weight: bold;

      &:hover {
        color: white;
      }
    }
  }
}
</style>
