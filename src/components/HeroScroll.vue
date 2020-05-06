<template>
  <div class="hero">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in items.slice(0,3)" :key="item.id">
        <Hero :item="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Hero from "@/components/Hero";
export default {
  nam: "HeroScroll",
  components: {
    Swiper,
    SwiperSlide,
    Hero
  },
  props: ["items"],
  data() {
    return {
      item: this.items[0],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>

<style lang="scss">
.hero {
  position: relative;
  margin: auto;
  overflow: hidden;

  height: 50vh;

  .swiper {
    height: 100%;
  }

  .swiper-pagination-bullet {
    width: 60px;
    height: 20px;
    background: none;

    &::after {
      content: "";
      height: 3px;
      width: 50px;
      display: inline-block;
      border-radius: 2px;
      background: #fff9;
    }

    &.swiper-pagination-bullet-active {
      &::after {
        background: white;
      }
    }
  }

  @media (min-width: $md) {
    height: 80vh;
  }
}
</style>
