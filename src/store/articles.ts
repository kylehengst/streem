import { defineStore } from "pinia";
import axios from "axios";

// Define the structure of an article item based on API response and usage
// This should ideally match or be compatible with the Article interface in ArticleItem.vue
interface ArticleItemData {
  id: string; // Assuming an ID field from the API
  url: string;
  title: string;
  source: {
    logo_url: string;
    name: string;
  };
  published_at: string;
  author: {
    name: string;
  };
  word_count: number;
  excerpts: Array<{
    text: string;
    keywords: string[];
  }>;
  // Add any other fields that come from the API
}

interface ArticlesState {
  page: number;
  pageSize: number;
  loading: boolean;
  articles: ArticleItemData[];
  end: boolean; // Potentially for pagination control
  lastPage: number; // Potentially for pagination control
}

export const userArticlesStore = defineStore("articles", {
  state: (): ArticlesState => ({
    page: 1,
    pageSize: 10,
    loading: false,
    articles: [],
    end: false,
    lastPage: 0,
  }),
  actions: {
    async getArticles(
      page: number,
      pageSize: number
    ): Promise<ArticleItemData[]> {
      this.loading = true;
      try {
        const response = await axios.get<ArticleItemData[]>(
          `https://frontend-engineering-test-api.netlify.app/.netlify/functions/articles`,
          {
            params: {
              page: page,
              pageSize: pageSize,
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error("Failed to get articles:", error);
        return []; // Return empty array on error
      } finally {
        this.loading = false;
      }
    },
    async loadNextPage(): Promise<void> {
      // Ensure `this` is correctly typed if not using arrow functions for actions
      // With Pinia's setup style, `this` should be correctly typed.
      const newArticles = await this.getArticles(this.page, this.pageSize);
      if (newArticles.length > 0) {
        this.articles = this.articles.concat(newArticles);
        this.page++;
      } else {
        // Optionally set `end` to true if no more articles are loaded
        this.end = true;
      }
    },
  },
});
