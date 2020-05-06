<template>
  <div class="hero">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in items" :key="item.id">
        <HeroItem :item="item" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import HeroItem from "@/components/HeroItem";
export default {
  nam: "Hero",
  components: {
    Swiper,
    SwiperSlide,
    HeroItem
  },
  props: ["items"],
  data() {
    return {
      item: this.items[0],
      swiperOption: {}
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

    &::after,
    &::before {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
    &::before {
      z-index: 9;
      content: "";
      background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 75%,
        $app-bg 95%
      );
    }
  }

  @media (min-width: $md) {
    height: 80vh;
  }
}
</style>
