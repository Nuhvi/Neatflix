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
        loop: true,
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
  max-width: 1280px;
  margin: auto;
  padding: 1.5em 1em;
}
.swiper {
  --swiper-navigation-size: 2em;
}

.swiper-button-next,
.swiper-button-prev {
  width: 2.5em;
  height: 100%;
  top: 1.4em;
  left: 0;

  &::after {
    color: rgba(243, 243, 243, 0.616);
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
