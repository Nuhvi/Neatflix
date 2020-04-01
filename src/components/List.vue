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
  max-width: 1200px;
  margin: auto;
  display: grid;
  padding: 1.5em 1em;

  grid-template-columns: repeat(auto-fit, minmax(5em, 15em));
  justify-content: center;
  align-content: space-between;
}
</style>
