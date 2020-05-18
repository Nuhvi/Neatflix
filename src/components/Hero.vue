<template>
  <div class="hero" v-if="!empty">
    <img
      v-if="this.item.backdropPath"
      :src="this.item.backdropPath"
      :alt="this.item.title + ' backdrop'"
    />
    <transition
      appear
      appear-class="appear"
      appear-to-class="appear-to"
      appear-active-class="appear-active"
    >
      <article role="article">
        <div class="container">
          <h2>
            {{ item.title }}
          </h2>
          <p class="stars_genres">
            <span class="stars">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
                <path fill="#F8D64E" d="M48 234L121 8l73 226L2 94h238z" />
              </svg>
              <span class="vote_average">{{ item.rating }}</span>
              <span class="genres" v-if="item.genreNames">{{ formatedGenres }}</span>
            </span>
          </p>
          <AddBtns :item="this.item"></AddBtns>
          <p class="overview">{{ truncatedOverview }}</p>
          <div class="cta">
            <WatchBtn :id="this.item.id" :mediaType="this.item.mediaType"></WatchBtn>
            <MoreDetails :route="this.item.route" v-if="more"></MoreDetails>
          </div>
        </div>
      </article>
    </transition>
  </div>
  <div class="hero" v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import { joinWithCol, truncate } from "@/utils";
import Spinner from "@/components/Spinner";
import WatchBtn from "@/components/WatchBtn";
import MoreDetails from "@/components/MoreDetails";
import AddBtns from "@/components/AddBtns";

export default {
  name: "Hero",
  props: ["item", "empty", "more"],
  components: {
    Spinner,
    WatchBtn,
    AddBtns,
    MoreDetails
  },
  data() {
    return {
      formatedGenres: this.item && joinWithCol(this.item.genreNames.slice(0, 3)),
      truncatedOverview: this.item && truncate(this.item.overview, 200)
    };
  }
};
</script>

<style lang="scss">
.hero {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;

  overflow: hidden;

  height: 50vh;

  @media (min-width: $md) {
    height: 80vh;
  }

  .add_btns {
    font-size: 0.3em;
    margin: 0;
  }

  &::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    left: 0;
    background: linear-gradient(to bottom, #0005 50%, $app-bg);
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
      align-items: flex-start;
    }

    h2 {
      margin: 0.2em 0;
      text-transform: capitalize;

      @media (max-width: $sm) {
        font-size: 2.5rem;
      }
    }

    .stars_genres,
    .overview,
    .cta {
      padding-left: 0.25em;
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

    .overview {
      font-size: 0.55em;
      font-weight: normal;
      text-align: left;
      max-width: 55ch;
      line-height: 1.5;
    }
  }
}

.appear-active {
  transition: all 0.5s ease;
}

.appear {
  opacity: 0;
  transform: translateX(50px);
}

.appear-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
