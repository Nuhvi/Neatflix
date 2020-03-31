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

  grid-template-columns: repeat(auto-fit, minmax(5rem, 20rem));
  justify-content: space-evenly;
  align-content: space-between;
  padding: 4rem 0;
  gap: 4rem 2rem;
}
</style>
