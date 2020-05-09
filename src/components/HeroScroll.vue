<template>
  <div class="hero_scroller" v-if="isLoading">
    <Hero :empty="true" />
  </div>
  <div class="hero_scroller" v-else>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in limitedItems" :key="item.id">
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
  props: ["items", "limit", "isLoading"],
  computed: {
    limitedItems() {
      return this.items.slice(0, this.limit || 8);
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: true
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
  margin: auto;
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
