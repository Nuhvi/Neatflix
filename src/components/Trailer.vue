<template>
  <modal name="trailer" @before-open="beforeOpen" width="100%" height="auto">
    <div>
      <iframe
        width="100%"
        height="100%"
        :src="this.trailerPath"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </modal>
</template>

<style lang="scss">
.vm--container {
  z-index: 99999;
}
.vm--overlay {
  background: rgba(0, 0, 0, 0.5);
}
.vm--modal {
  max-width: 960px;
  margin: auto;

  div {
    position: relative;
    padding-top: 56%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>

<script>
import store from "@/store";

export default {
  name: "Trailer",
  store,
  data() {
    return {
      trailerPath: ""
    };
  },
  methods: {
    beforeOpen(event) {
      this.trailerPath = event.params.trailerPath;
    }
  }
};
</script>
