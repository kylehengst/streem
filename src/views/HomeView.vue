<template>
  <div class="home">
    <InfiniteScroll>
      <ArticlesList> <ArticleItem></ArticleItem></ArticlesList>
      {{ articles }}
      {{ loadingArticles }}
    </InfiniteScroll>
  </div>
</template>

<script>
import InfiniteScroll from "@/components/InfiniteScroll.vue";
import ArticlesList from "@/components/ArticlesList.vue";
import ArticleItem from "@/components/ArticleItem.vue";
import { userArticlesStore } from "@/store/articles";
import { computed, ref } from "@vue/runtime-core";
export default {
  name: "HomeView",
  components: {
    InfiniteScroll,
    ArticlesList,
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
