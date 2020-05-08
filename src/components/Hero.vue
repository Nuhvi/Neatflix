<template>
  <div class="hero " v-if="!empty">
    <img :src="this.item.backdropPath" :alt="this.item.title + ' backdrop'" />
    <article role="article">
      <div class="container">
        <h2>{{ this.item.title }}</h2>
        <p class="stars_genres">
          <span class="stars">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
              <path fill="#F8D64E" d="M48 234L121 8l73 226L2 94h238z" />
            </svg>
            <span class="vote_average">{{ item.vote_average }}</span>
            <span class="genres" v-if="item.genreNames">{{ formatedGenres }}</span>
          </span>
        </p>
        <p class="overview">{{ truncatedOverview }}</p>
        <div class="cta">
          <router-link class="hero_btn red" :to="this.item.route">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 494.148 494.148">
              <path
                d="M405.284 201.188L130.804 13.28C118.128 4.596 105.356 0 94.74 0 74.216 0 61.52 16.472 61.52 44.044v406.124c0 27.54 12.68 43.98 33.156 43.98 10.632 0 23.2-4.6 35.904-13.308l274.608-187.904c17.66-12.104 27.44-28.392 27.44-45.884.004-17.48-9.664-33.764-27.344-45.864z"
              />
            </svg>
            <span>watch</span>
          </router-link>
          <button class="hero_btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.33333 469.33333">
              <path
                d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"
              />
            </svg>
            <span>Add to list</span>
          </button>
        </div>
      </div>
    </article>
  </div>
  <div class="hero" v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import { joinWithCol, truncate } from "@/utils";
import Spinner from "@/components/Spinner";

export default {
  name: "Hero",
  props: ["item", "empty"],
  components: {
    Spinner
  },
  data() {
    return {
      formatedGenres: this.item && joinWithCol(this.item.genreNames.slice(0, 3)),
      truncatedOverview: this.item && truncate(this.item.overview, 200)
    };
  }
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;

  overflow: hidden;

  &::after,
  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  &::before {
    z-index: 2;
    content: "";
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 75%, $app-bg 95%);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }

  article {
    z-index: 3;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    text-align: left;

    color: white;

    font-size: 1.5em;

    @media (min-width: $md) {
      font-size: 2em;
    }

    .container {
      max-width: $lg;
      margin: auto;
      height: 100%;
      padding: 0 1em;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
    }

    h2 {
      margin: 0.2em 0;
      text-transform: capitalize;

      @media (max-width: $sm) {
        font-size: 2.5rem;
      }
    }

    .stars_genres {
      display: flex;
      text-align: left;
      margin: 0;
      font-size: 0.7em;

      .stars {
        svg {
          height: 0.8em;
          margin-right: 0.3em;
        }
        .vote_average {
        }
      }

      .genres {
        font-size: 0.8em;
        opacity: 0.8;
        margin-left: 1em;
      }
    }

    .cta {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 0.5em;
      font-size: 0.5em;

      .hero_btn.red {
        margin-right: 1em;
      }

      @media (min-width: $md) {
        width: auto;
        justify-content: space-between;
      }
    }

    .hero_btn {
      cursor: pointer;
      border: none;
      text-transform: capitalize;

      display: flex;
      align-items: center;
      padding: 1em;

      background: black;
      color: white;
      border-radius: 2em;

      box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);

      transition: transform ease 0.1s;

      svg {
        fill: currentColor;
        height: 1em;
        margin-right: 0.5em;
      }

      &.red {
        background: red;
        box-shadow: 0 0 10px rgba(255, 0, 0, 1);
      }

      &:hover {
        transform: translateY(-2px);
      }
    }

    .overview {
      font-size: 0.55em;
      font-weight: normal;
      text-align: left;
      max-width: 60ch;
      line-height: 1.5;
    }
  }
}
</style>
