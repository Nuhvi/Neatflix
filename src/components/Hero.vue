<template>
  <div class="hero" v-if="isLoading">isLoading</div>
  <div class="hero" v-else>
    <img :src="this.item.backdropPath" :alt="this.item.title + ' backdrop'" />
    <article role="article">
      <p class="stars_genres">
        <span class="stars">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
            <path fill="#F8D64E" d="M48 234L121 8l73 226L2 94h238z" />
          </svg>
          <span class="vote_average">{{ item.vote_average }}</span>
          <span class="genres" v-if="item.genreNames">{{ item.genreNames.join(" | ") }}</span>
        </span>
      </p>
      <h1>{{ this.item.title }}</h1>
      <p class="overview">{{ truncatedOverview }}</p>
      <div class="cta">
        <router-link class="hero_btn red" :to="this.item.route">watch</router-link>
        <button class="hero_btn ">Add to list</button>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: ["item", "isLoading"],
  data() {
    return {
      truncatedOverview:
        this.item.overview.length > 200
          ? this.item.overview.slice(0, 200) + "..."
          : this.item.overview
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
    position: relative;
    max-width: $lg;
    margin: auto;
    height: 100%;
    width: 90%;
    top: -100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    color: white;

    font-size: 1.5em;

    @media (min-width: $md) {
      font-size: 2rem;
    }

    h1 {
      margin: 0.2em 0;
    }

    .stars_genres {
      margin: 1rem 0;
      font-size: 0.8em;

      .stars {
        svg {
          height: 1em;
        }
        .vote_average {
          margin: 0 0.3em;
        }

        .genres {
          font-size: 0.65em;
          opacity: 0.8;
        }
      }
    }

    .cta {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      @media (min-width: $md) {
        width: 8em;
      }
    }

    .hero_btn {
      cursor: pointer;
      border: none;
      font-size: 0.8em;

      display: block;
      padding: 0.4em 0.8em;
      background: black;
      color: white;
      border-radius: 2em;

      @media (min-width: $md) {
        font-size: 0.6em;
      }

      &.red {
        background: red;
        box-shadow: 0 0 30px rgba(255, 0, 0, 1);
      }
    }

    .overview {
      font-size: 0.5em;
      font-weight: normal;
      text-align: left;
      max-width: 60ch;
      line-height: 1.8;
    }
  }
}
</style>
