<template>
  <div class="p-3 bg-gray-100">
    <InfiniteScroll>
      <ArticleItem
        class="mb-3"
        v-for="article in articles"
        :key="article.id"
        :article="article"
      ></ArticleItem>
      {{ loadingArticles }}
    </InfiniteScroll>
  </div>
</template>

<script>
import InfiniteScroll from "@/components/InfiniteScroll.vue";
// import ArticlesList from "@/components/ArticlesList.vue";
import ArticleItem from "@/components/ArticleItem.vue";
import { userArticlesStore } from "@/store/articles";
import { computed, ref } from "@vue/runtime-core";
export default {
  name: "HomeView",
  components: {
    InfiniteScroll,
    // ArticlesList,
    ArticleItem,
  },
  setup() {
    const loadingArticles = ref(false);
    const articlesStore = userArticlesStore();
    loadingArticles.value = true;
    articlesStore.getArticles().finally(() => {
      loadingArticles.value = false;
    });
    return {
      loadingArticles,
      articles: computed(() => articlesStore.articles),
    };
  },
};
</script>
