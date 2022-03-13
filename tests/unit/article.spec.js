import { shallowMount } from "@vue/test-utils";
import ArticleItem from "@/components/ArticleItem.vue";

describe("ArticleItem.vue", () => {
  it("renders article title when passed", () => {
    const article = {
      title: "Article Name",
      author: {},
      source: {},
      excerpts: [],
    };
    const wrapper = shallowMount(ArticleItem, {
      props: {
        article,
      },
    });
    expect(wrapper.find("h3").text()).toMatch(article.title);
  });
});
