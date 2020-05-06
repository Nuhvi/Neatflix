<template>
  <div>
    <img :src="backdropPath" :alt="title + ' backdrop'" />
    <article role="article">
      <span class="stars_genres">
        <span class="stars">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
            <path fill="#F8D64E" d="M48 234L121 8l73 226L2 94h238z" />
          </svg>
          <span class="vote_average">{{item.vote_average}}</span>
          <span class="genres">{{item.genre_ids}}</span>
        </span>
      </span>
      <h1>{{title}}</h1>
    </article>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: ["item"],
  data() {
    this.item.title = this.item.title || this.item.original_name;
    return {
      id: this.item.id,
      title: this.item.title.match(/^[^\(:]+/)[0],
      backdropPath:
        "https://image.tmdb.org/t/p/original" + this.item.backdrop_path
    };
  }
};
</script>

<style lang="scss" scoped>
div {
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
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 75%,
      $app-bg 95%
    );
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
      margin-top: 0.2em;
    }

    .stars_genres {
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
  }
}
</style>
