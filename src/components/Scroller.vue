<template>
  <section class="list">
    <Heading>{{title}}</Heading>
    <div class="list-items">
      <Card v-for="item in items" :key="item.id" :item="item" :type="type" hoverable />
    </div>
  </section>
</template>

<script>
import Heading from "@/components/Heading";
import Card from "@/components/Card";

export default {
  name: "Scroller",
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
  max-width: 1280px;
  margin: auto;
  padding: 1.5em 1em;
}

.list-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5em, 15em));
}
</style>
