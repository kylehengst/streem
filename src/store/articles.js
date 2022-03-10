import { defineStore } from "pinia";
import axios from "axios";

export const userArticlesStore = defineStore("articles", {
  state: () => ({
    articles: [],
  }),
  actions: {
    async getArticles(page = 1, pageSize = 10) {
      this.articles = await axios.get(
        `https://frontend-engineering-test-api.netlify.app/.netlify/functions/articles`,
        { params: { page, pageSize } }
      );
    },
  },
});
