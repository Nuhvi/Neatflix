<template>
  <router-link class="card" :to="route">
    <figure>
      <div class="image">
        <img
          v-if="this.item.cardPath"
          :src="this.item.cardPath"
          :alt="this.item.title + ' poster'"
        />
        <img v-else src="@/assets/poster_not_found.png" :alt="this.item.title + ' poster'" />
        <div class="overlay">
          <h3>{{ this.item.title }}</h3>
          <p>{{ truncatedOverview }}</p>
          <WatchBtn :id="this.item.id" :mediaType="this.item.mediaType"></WatchBtn>
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
import WatchBtn from "@/components/WatchBtn";
import { truncate } from "@/utils";

export default {
  name: "Card",
  props: ["item"],
  components: {
    WatchBtn
  },
  computed: {
    truncatedOverview() {
      return truncate(this.item.overview, 100);
    },
    route() {
      return this.item.route || "";
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  @media (max-width: $sm) {
    pointer-events: none;
  }
}

figure {
  margin: 0;

  .image {
    overflow: hidden;
    position: relative;
    width: 100%;
    padding-top: 150%;
    background: $app-bg;
    border-radius: 0.5em;

    .overlay {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      opacity: 0;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      padding: 0 1em;
      color: white;
      text-align: left;

      @media (min-width: $sm) {
        font-size: 0.8em;
      }

      @media (min-width: $md) {
        font-size: 0.9em;
      }

      @media (min-width: $lg) {
        font-size: 0.8em;
      }

      h3 {
        font-weight: 500;
      }

      p {
        opacity: 0.7;
      }

      .hero_btn {
        margin: auto;
        border-radius: 5em;
      }
    }

    img {
      display: block;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
    }

    @media (hover: hover) {
      &:hover {
        z-index: 999999;
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

        animation: pop 0.5s both;

        .overlay {
          border-radius: 0.7em;
          border: 1px solid rgba(255, 255, 255, 0.2);

          opacity: 1;
        }

        img {
          filter: blur(20px) brightness(0.7);
        }
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
