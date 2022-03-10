import { defineStore } from "pinia";
import axios from "axios";

export const userArticlesStore = defineStore("articles", {
  state: () => ({
    articles: [],
  }),
  actions: {
    async getArticles(page = 1, pageSize = 10) {
      const response = await axios.get(
        `https://frontend-engineering-test-api.netlify.app/.netlify/functions/articles`,
        { params: { page, pageSize } }
      );
      this.articles = response.data;
    },
  },
});
