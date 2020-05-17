<template>
  <div v-bind:class="{ full_page: isFullPage}">
    <svg
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :stroke="color"
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
          <circle stroke-opacity="0.25" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.8s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "spinner",
  props: {
    color: {
      type: String,
      default: "#f00"
    },
    height: {
      type: Number,
      default: 64
    },
    width: {
      type: Number,
      default: 64
    },
    isFullPage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style() {
      return this.isFullPage ? "" : "relative";
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  z-index: 9;

  width: 100%;
  height: 100%;

  &.full_page {
    z-index: 9999;
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
}
</style>
