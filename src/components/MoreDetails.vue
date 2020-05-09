<template>
  <router-link class="hero_btn" :to="route">
    <span>More</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M404.555 241.931L125.404 0l-24.379 28.138L363.948 256 101.025 483.862 125.404 512l279.151-241.931c4.076-3.536 6.42-8.672 6.42-14.069s-2.345-10.533-6.42-14.069z"
      />
    </svg>
  </router-link>
</template>

<script>
export default {
  name: "MoreDetails",
  props: ["route"]
};
</script>

<style lang="scss" scoped>
.hero_btn {
  cursor: pointer;
  border: none;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  padding: 1em;

  box-shadow: none;

  background: rgba(0, 0, 0, 0.349);
  color: white;
  border-radius: 2em;

  svg {
    margin: 0 0 0 0.5em;
  }

  &:hover {
    background: rgba(255, 255, 255, 1);
    color: #000;
  }
}
</style>
