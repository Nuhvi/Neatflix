<template>
  <router-link
    class="card"
    v-bind:class="{ detailed: detailed, hoverable: hoverable, lightenable: lightenable }"
    :to="this.item.route || ''"
  >
    <figure>
      <img :src="this.item.cardPath" :alt="this.item.title + ' poster'" />
      <div class="overlay">
        <figcaption>
          <h3>{{ this.item.title }}</h3>
          <p>{{ item.release_date || item.first_air_date }}</p>
        </figcaption>
      </div>
    </figure>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: {},
    hoverable: Boolean,
    detailed: Boolean,
    lightenable: Boolean
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: block;

  figure {
    top: 0;
    left: 0;
    margin: 0;
    position: relative;
    padding-top: 150%;

    img {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .overlay {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;

      transition: all 0.1s ease-in-out;
      visibility: hidden;
    }

    figcaption {
      position: absolute;
      width: 100%;
      bottom: 0;

      padding: 0.5em 1em;
      padding-top: 5em;

      color: rgba(255, 255, 255, 0.85);
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0.5) 70%,
        rgba(0, 0, 0, 0) 100%
      );

      font-size: 0.8em;
      text-align: left;

      h3,
      p {
        margin: 0;
      }

      h3 {
        font-weight: normal;
      }
      p {
        font-size: 0.8em;
        opacity: 0.5;
      }
    }
  }

  &.detailed {
    &:hover {
      .overlay {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  &.hoverable {
    transition: all 0.1s ease-in-out;

    @media screen and (min-width: $sm) {
      &:hover {
        overflow: hidden;
        z-index: 999999;
        transform: scale(1.1);
        border-radius: 0.5em;
        box-shadow: 0rem 1em 2em rgba(0, 0, 0, 1);
      }
    }
  }

  &.lightenable {
    opacity: 0.7;

    @media screen and (min-width: $sm) {
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
