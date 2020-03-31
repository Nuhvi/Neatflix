<template>
  <div id="app">
    <header>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/base.scss";

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #151515;

  min-height: 100%;
  font-size: 16px;
}

header {
  position: absolute;
  z-index: 999;
  width: 100%;
  padding: 2rem;
  text-transform: uppercase;
  color: white;

  display: flex;
  justify-content: center;

  #nav {
    width: 8rem;
    display: inherit;
    justify-content: space-between;
    a {
      color: inherit;
    }
  }
}
</style>
