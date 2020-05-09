<template>
  <router-link class="card" :to="this.item.route || ''">
    <figure>
      <div class="image">
        <img :src="this.item.cardPath" :alt="this.item.title + ' poster'" />
        <div class="overlay">
          <h3>{{ this.item.title }}</h3>
        </div>
      </div>
      <figcaption>
        <h3>{{ this.item.title }}</h3>
        <p>{{ item.release_date || item.first_air_date }}</p>
      </figcaption>
    </figure>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: ["item"]
};
</script>

<style lang="scss" scoped>
figure {
  margin: 0;

  .image {
    overflow: hidden;
    position: relative;
    width: 100%;
    padding-top: 150%;
    background: $app-bg;

    .overlay {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      opacity: 0;

      padding: 0 1em;
      color: white;
      text-align: left;
      font-size: 1em;

      h3 {
        font-weight: 500;
      }

      .hero_btn {
        font-size: 0.8em;
      }
    }

    img {
      display: block;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
    }

    &:hover {
      z-index: 999999;
      border-radius: 0.5em;
      box-shadow: 0rem 1em 2em rgba(0, 0, 0, 1);

      @keyframes pop {
        0% {
          transform: scale(1);
        }
        30% {
          transform: scale(1.11);
        }
        100% {
          transform: scale(1.1);
        }
      }

      @media (min-width: $sm) {
        animation: pop 0.5s both;
      }

      .overlay {
        opacity: 1;
      }

      img {
        filter: blur(20px) brightness(0.7);
      }
    }
  }

  figcaption {
    padding: 1em;
    color: rgba(255, 255, 255, 0.85);

    font-size: 0.8em;
    text-align: left;

    h3 {
      margin: 0;
      margin-bottom: 0.5em;
    }
    p {
      margin: 0;
    }
  }
}
</style>
