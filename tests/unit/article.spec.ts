import { shallowMount, VueWrapper } from "@vue/test-utils";
import ArticleItem from "@/components/ArticleItem.vue";

// Define the Article interface, ideally imported or shared from ArticleItem.vue
// For simplicity here, defining it directly, but sharing is better.
interface ArticleSource {
  logo_url: string;
  name: string;
}

interface ArticleAuthor {
  name: string;
}

interface Excerpt {
  text: string;
  keywords: string[];
}

interface Article {
  url: string;
  title: string;
  source: ArticleSource;
  published_at: string;
  author: ArticleAuthor;
  word_count: number;
  excerpts: Excerpt[];
}

describe("ArticleItem.vue", () => {
  it("renders article title when passed", () => {
    const article: Article = {
      title: "Article Name",
      url: "http://example.com",
      author: { name: "John Doe" },
      source: { name: "Test Source", logo_url: "http://example.com/logo.png" },
      published_at: "2024-05-23T12:00:00Z",
      word_count: 100,
      excerpts: [{ text: "This is an excerpt.", keywords: ["test", "vue"] }],
    };
    const wrapper: VueWrapper<any> = shallowMount(ArticleItem, {
      props: {
        article,
      },
    });
    expect(wrapper.find("h3").text()).toMatch(article.title);
  });
});
