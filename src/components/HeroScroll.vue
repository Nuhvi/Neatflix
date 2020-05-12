<template>
  <div class="hero_scroller" v-if="isLoading">
    <Hero :empty="true" />
  </div>
  <div class="hero_scroller" v-else>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in this.items" :key="item.id">
        <Hero :item="item" :more="true" />
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
  props: ["items", "isLoading"],
  data() {
    return {
      swiperOption: {
        lazy: true,
        effect: "fade",
        keyboard: {
          enabled: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
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
.hero_scroller {
  position: relative;
  margin: 0 0 5em auto;
  overflow: hidden;

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

    @media (max-width: $md) {
      width: 30px;
      &::after {
        width: 25px;
      }
    }

    &.swiper-pagination-bullet-active {
      &::after {
        background: white;
      }
    }
  }
}
</style>
