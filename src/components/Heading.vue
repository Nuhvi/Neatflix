<template>
  <transition
    appear
    appear-class="appear"
    appear-to-class="appear-to"
    appear-active-class="appear-active"
  >
    <h2 class="heading">
      <slot />
    </h2>
  </transition>
</template>

<script>
export default {
  name: "Heading",
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
.heading {
  text-transform: uppercase;
  font-family: "Raleway", "Montserrat";
  text-align: left;
  margin: 0;
  font-size: 3em;
  margin-bottom: -0.3em;
  background: linear-gradient(top, rgba(255, 0, 29, 1) 0%, rgba(254, 0, 79, 1) 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: $sm) {
    font-size: 4em;
  }

  @media screen and (min-width: $md) {
    font-size: 5em;
  }
}

.appear-active {
  transition: all 0.5s ease;
}

.appear {
  opacity: 0;
  transform: translatey(-5px);
}

.appear-to {
  opacity: 1;
  transform: translatey(0);
}
</style>
