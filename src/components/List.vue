<template>
  <section class="list">
    <Heading>{{title}}</Heading>
    <div class="list-items">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import Heading from "@/components/Heading";
export default {
  name: "List",
  components: {
    Heading
  },
  props: {
    title: String
  }
};
</script>

<style lang="scss">
.list {
  max-width: 1280px;
  margin: auto;
  padding: 1.5em 1em;
}

.list-items {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: space-between;
  grid-gap: 2em;

  @media screen and (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0;
  }

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
