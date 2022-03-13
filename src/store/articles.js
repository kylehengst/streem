import { defineStore } from "pinia";
import axios from "axios";

export const userArticlesStore = defineStore("articles", {
  state: () => ({
    page: 1,
    pageSize: 10,
    loading: false,
    articles: [],
    end: false,
  }),
  actions: {
    async getArticles(page, pageSize) {
      this.loading = true;
      const response = await axios.get(
        `https://frontend-engineering-test-api.netlify.app/.netlify/functions/articles`,
        {
          params: {
            page: page,
            pageSize: pageSize,
          },
        }
      );
      // if (response.data.length)
      //   this.articles = this.articles.concat(response.data);
      this.loading = false;
      return response.data;
    },
    async loadNextPage() {
      const articles = await this.getArticles(this.page + 1, this.pageSize);
      if (articles.length) {
        this.articles = this.articles.concat(articles);
        this.page++;
      }
    },
  },
});
