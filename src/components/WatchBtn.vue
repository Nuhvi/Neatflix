<template>
  <button class="hero_btn red">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 494.148 494.148">
      <path
        d="M405.284 201.188L130.804 13.28C118.128 4.596 105.356 0 94.74 0 74.216 0 61.52 16.472 61.52 44.044v406.124c0 27.54 12.68 43.98 33.156 43.98 10.632 0 23.2-4.6 35.904-13.308l274.608-187.904c17.66-12.104 27.44-28.392 27.44-45.884.004-17.48-9.664-33.764-27.344-45.864z"
      />
    </svg>
    <span>watch</span>
  </button>
</template>

<script>
export default {
  name: "WatchBtn"
};
</script>

<style lang="scss">
.hero_btn {
  cursor: pointer;
  border: none;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  padding: 1em;

  background: rgba(255, 255, 255, 0.418);
  color: white;
  border-radius: 2em;

  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);

  transition: all ease 0.5s;

  svg {
    fill: currentColor;
    height: 1em;
    margin-right: 0.5em;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &.red {
    background: red;

    &:hover {
      box-shadow: 0 0 10px rgba(255, 0, 0, 1);
    }
  }
}
</style>
