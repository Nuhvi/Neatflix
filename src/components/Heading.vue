<template>
  <h2>
    <slot />
  </h2>
</template>


  <script>
export default {
  name: "Heading",
  props: {
    title: String
  }
};
</script>

<style>
h2 {
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
}
@media screen and (min-width: 400px) {
  h2 {
    font-size: 4em;
  }
}

@media screen and (min-width: 600px) {
  h2 {
    font-size: 6em;
  }
}
</style>
