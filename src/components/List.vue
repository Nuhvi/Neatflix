<template>
  <section class="list">
    <h1>{{title}}</h1>
    <div class="list-items">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "List",
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

  h1 {
    text-transform: uppercase;
    font-family: "Raleway", "Montserrat";
    text-align: left;
    margin: 0;
    font-size: 3em;
    margin-bottom: -0.3em;
    background: linear-gradient(
      top,
      rgba(255, 0, 29, 1) 0%,
      rgba(254, 0, 79, 1) 100%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (min-width: 400px) {
      font-size: 4em;
    }
    @media screen and (min-width: 600px) {
      font-size: 6em;
    }
  }
}

.list-items {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: space-between;
  grid-gap: 1em;

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
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
