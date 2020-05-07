<template>
  <header>
    <div class="container">
      <router-link to="/" class="logo">
        <img src="@/assets/Neatflix.svg" alt="Neatflix" />
      </router-link>

      <div class="right">
        <ul id="nav">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li><router-link to="/movies">Movies</router-link></li>
          <li><router-link to="/tv">Series</router-link></li>
        </ul>
        <a class="placeholder">user</a>
      </div>
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
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);

  .container {
    z-index: -1;

    position: relative;
    width: 90%;
    max-width: $xl;
    margin: auto;

    padding: 2em 1em;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      display: flex;
      justify-content: left;
      font-size: 1em;

      img {
        width: 6em;
      }
    }

    .right {
      display: flex;

      #nav {
        display: flex;
        justify-content: end;
        align-items: center;

        list-style: none;
        margin: 0;
        padding: 0;

        li {
          margin: 0;
          padding: 0;
        }

        a {
          color: inherit;
          font-size: 1em;
          padding: 0 2em;

          &:hover,
          &.router-link-exact-active {
            position: relative;
            color: rgb(255, 255, 255);
          }

          &.router-link-exact-active {
            &::after {
              content: "";
              position: absolute;
              left: 50%;
              bottom: -100%;
              width: 5px;
              height: 5px;
              background: red;

              border-radius: 50%;
            }
          }
        }
      }

      .placeholder {
        padding-left: 2em;
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
