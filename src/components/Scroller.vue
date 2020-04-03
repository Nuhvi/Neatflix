<template>
  <section class="list">
    <Heading>{{ title }}</Heading>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in items" :key="item.id">
        <Card :item="item" />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </section>
</template>

<script>
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Scroller",
  props: {
    title: String,
    items: Array
  },
  components: {
    Swiper,
    SwiperSlide,
    Heading,
    Card
  },
  data() {
    return {
      swiperOption: {
        lazy: true,
        loop: false,
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          1280: {
            slidesPerView: 6
          },
          960: {
            slidesPerView: 5
          },
          600: {
            slidesPerView: 3
          },
          400: {
            slidesPerView: 2
          }
        }
      }
    };
  }
};
</script>

<style lang="scss">
.list {
  max-width: $xl;
  margin: auto;
  padding: 1.5em 1em;
}

/* Customize Swiper overflow */
$additionalSlides: (
  $sm: 1,
  $md: 2,
  $lg: 4,
  $xl: 5
);

.swiper-container {
  overflow: visible;
}

$slide: ".swiper-slide";
.swiper-slide {
  position: relative;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  z-index: 1;

  transition: all 200ms ease-in-out, visibility 200ms ease-in-out,
    transform 0.1s ease-in-out, border-radius 0.1s ease-in-out,
    z-index 0.1s ease-in-out;

  &-active {
    opacity: 1;
    visibility: visible;

    @each $breakingPoint, $additionalSlidesNo in $additionalSlides {
      @media screen and (min-width: $breakingPoint) {
        @for $i from 1 through $additionalSlidesNo {
          & + #{$slide} {
            opacity: 1;
            visibility: visible;
          }
          $slide: "#{$slide} + .swiper-slide";
        }
      }
    }
  }

  @media screen and (min-width: $sm) {
    &:hover {
      z-index: 999999;
      transform: scale(1.1);
      border-radius: 0.5em;
      box-shadow: 0rem 1em 2em rgba(0, 0, 0, 1);
    }
  }
}

/* Customize Swiper buttons */
.swiper-button-next,
.swiper-button-prev {
  width: 2.5em;
  height: 100%;
  top: 1.4em;
  left: 0;

  &::after {
    color: rgba(243, 243, 243, 0.6);
    font-size: 2em;
  }
}
.swiper-button-next {
  left: auto;
  right: 0;
}

.swiper-button-disabled {
  display: none;
}
</style>
