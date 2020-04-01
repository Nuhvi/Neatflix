<template>
  <section class="list">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "List"
};
</script>

<style lang="scss">
.list {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(5em, 20em));
  justify-content: space-evenly;
  align-content: space-between;
  padding: 4em 0;
  gap: 4em 2em;
}
</style>
