import { shallowMount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("HelloWorld.vue", () => {
  xit("renders props.msg when passed", () => {
    const movieData = { title: "movie title" };
    const wrapper = shallowMount(Card, {
      propsData: { movieData }
    });
    expect(wrapper.text()).toMatch(movieData.title);
  });
});
