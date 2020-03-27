import { shallowMount } from "@vue/test-utils";
import MovieCard from "@/components/MovieCard.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const movieData = { title: "movie title" };
    const wrapper = shallowMount(MovieCard, {
      propsData: { movieData }
    });
    expect(wrapper.text()).toMatch(movieData.title);
  });
});
