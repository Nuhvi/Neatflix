<template>
  <div class="hero" v-if="isLoading">isLoading</div>
  <div class="hero" v-else>
    <img :src="backdropPath" :alt="title + ' backdrop'" />
    <article role="article">
      <p class="duration" v-if="item.runtime">Duration: {{ item.runtime }} mins</p>
      <p class="stars_genres">
        <span class="stars">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
            <path fill="#F8D64E" d="M48 234L121 8l73 226L2 94h238z" />
          </svg>
          <span class="vote_average">{{ item.vote_average }}</span>
          <span class="genres" v-if="item.genreNames">{{ item.genreNames.join(" | ") }}</span>
        </span>
      </p>
      <h1>{{ title }}</h1>
      <p class="overview">{{ truncatedOverview }}</p>
      <div class="cta">
        <router-link class="card" :to="this.item.route || ''">watch</router-link>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: ["item", "isLoading"],
  data() {
    this.item;
    return {
      id: this.item.id,
      title: this.item.title,
      backdropPath: "https://image.tmdb.org/t/p/original" + this.item.backdrop_path,
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
