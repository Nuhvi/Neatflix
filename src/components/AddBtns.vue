<template>
  <div class="add_btns">
    <button @click="like" v-bind:class="{ active: isLiked }">
      <svg
        class="red"
        v-bind:class="{ active: isLiked }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 51.997 51.997"
      >
        <path
          d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477z"
        />
      </svg>
    </button>

    <button @click="list" v-bind:class="{ active: isListed }">
      <svg
        class="blue"
        viewBox="0 0 448 448"
        xmlns="http://www.w3.org/2000/svg"
        v-bind:class="{ active: isListed }"
      >
        <path
          d="M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"
        />
      </svg>
    </button>

    <button @click="watch" v-bind:class="{ active: isWatched }">
      <svg
        class="green"
        v-bind:class="{ active: isWatched }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 515.556 515.556"
      >
        <path
          d="M257.778 64.444C138.666 64.444 37.609 145.218 0 257.778c37.609 112.56 138.666 193.333 257.778 193.333 119.112 0 220.169-80.774 257.778-193.333C477.947 145.218 376.89 64.444 257.778 64.444zm0 119.162c18.982 0 37.963 7.243 52.446 21.726 28.966 28.966 28.966 75.926 0 104.892-28.966 28.966-75.926 28.966-104.892 0-28.966-28.966-28.966-75.926 0-104.892 14.483-14.483 33.464-21.726 52.446-21.726z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "AddBtns",
  store,
  props: ["item"],
  computed: {
    isLiked() {
      return this.$store.state.user.likes[this.item.id];
    },
    isWatched() {
      return this.$store.state.user.watched[this.item.id];
    },
    isListed() {
      return this.$store.state.user.listed[this.item.id];
    }
  },
  methods: {
    like(event) {
      event.preventDefault();
      this.$store.dispatch("user/like", { ...this.item });
    },
    list(event) {
      event.preventDefault();
      this.$store.dispatch("user/list", { ...this.item });
    },
    watch(event) {
      event.preventDefault();
      this.$store.dispatch("user/watch", { ...this.item });
    }
  }
};
</script>

<style lang="scss">
.add_btns {
  margin-bottom: 1em;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 1.5em;
    fill: currentColor;
    display: block;
    margin: auto;
  }

  button {
    width: 3em;
    height: 3em;
    padding: 0;
    color: inherit;
    background: #fff0;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;

    transition: background 0.3s;

    &:hover {
      background: #fff3;
    }

    &.active {
      background: rgba($app-bg, 0.3);
      &:hover {
        background: rgba($app-bg, 0.5);
      }
    }
  }
}
</style>
