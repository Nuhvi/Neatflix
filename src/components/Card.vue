<template>
  <div class="skeleton-card" v-if="isSkeleton">
    <div class="image"></div>
    <div class="title"></div>
    <div class="data"></div>
  </div>
  <router-link class="card" :to="route" v-else>
    <figure>
      <div class="image">
        <img v-if="item.cardPath" :src="item.cardPath" :alt="item.title + ' poster'" />
        <img v-else src="@/assets/poster_not_found.png" :alt="item.title + ' poster'" />
        <div class="overlay">
          <h3>{{ item.title }}</h3>
          <p>{{ truncatedOverview }}</p>
          <WatchBtn :id="item.id" :mediaType="item.mediaType"></WatchBtn>
          <AddBtns :item="item"></AddBtns>
        </div>
      </div>
      <figcaption>
        <h3>{{ item.title }}</h3>
        <div class="date-details">
          <p class="date">{{ (item.release_date || item.first_air_date).split("-")[0] }}</p>

          <div class="details">
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
            <div class="rating">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
                <path d="M48 234L121 8l73 226L2 94h238z" />
              </svg>
              <span class="vote_average">{{ item.rating }}</span>
            </div>
          </div>
        </div>
      </figcaption>
    </figure>
  </router-link>
</template>

<script>
import WatchBtn from "@/components/WatchBtn";
import AddBtns from "@/components/AddBtns";
import { truncate } from "@/utils";
import store from "@/store";

export default {
  name: "Card",
  props: ["item", "isSkeleton"],
  store,
  components: {
    WatchBtn,
    AddBtns
  },
  computed: {
    truncatedOverview() {
      return truncate(this.item.overview, 100);
    },
    route() {
      return this.item.route || "";
    },
    isLiked() {
      return this.$store.state.user.likes[this.item.id];
    },
    isWatched() {
      return this.$store.state.user.watched[this.item.id];
    }
  }
};
</script>

<style lang="scss">
.card {
  @media (max-width: $sm) {
    pointer-events: none;
  }
}

.image {
  width: 100%;
  padding-top: 150%;
  background: $app-bg;
  border-radius: 0.5em;
}

figure {
  margin: 0;

  .image {
    overflow: hidden;
    position: relative;

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
        margin-bottom: 2em;
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
    .date-details {
      font-weight: 600;
      color: #838383;

      display: flex;

      .date {
        margin: 0;
        flex-grow: 1;
      }

      .details {
        display: flex;
        justify-content: space-between;
        flex-grow: 1;
      }

      .rating {
        align-items: center;
        color: #f9d251;

        svg {
          margin-right: 0.5em;
        }
      }
    }
  }
}

.details {
  svg {
    height: 1em;
  }
}

svg {
  fill: currentColor;
  &.active {
    &.red {
      fill: #e0332c;
    }
    &.green {
      fill: #2ce04a;
    }
    &.blue {
      fill: #2c80e0;
    }
  }
}

.skeleton-card {
  @keyframes loading {
    0% {
      background: #323232;
    }
    50% {
      background: #3d3d3d;
    }
    100% {
      background: #323232;
    }
  }

  .image,
  .title,
  .data {
    animation: loading 1s infinite;
  }

  .title,
  .data {
    margin-top: 0.5em;
    border-radius: 0.2em;
    padding-top: 1em;
    width: 70%;
  }

  .data {
    width: 90%;
  }
}
</style>
