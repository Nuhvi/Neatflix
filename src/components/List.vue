<template>
  <section class="list">
    <Heading>{{title}}</Heading>
    <div class="list-items">
      <Card v-for="item in items" :key="item.id" :item="item" :type="type" />
    </div>
  </section>
</template>

<script>
import Heading from "@/components/Heading";
import Card from "@/components/Card";

export default {
  name: "List",
  components: {
    Card,
    Heading
  },
  props: {
    title: String,
    items: Array,
    type: String
  }
};
</script>

<style lang="scss">
.list {
  max-width: $xl;
  margin: auto;
  padding: 1.5em 1em;
}

.list-items {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: space-between;
  grid-gap: 2em;

  @media screen and (min-width: $sm) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0;
  }

  @media screen and (min-width: $md) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: $lg) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: $xl) {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
