<template>
  <div class="flex flex-col overflow-hidden p-3 flex-1">
    <div
      class="bg-gray-100 rounded p-3 overflow-auto lg:w-1/2 xl:w-1/3 flex-1"
      v-iscroll
      iscroll-offset="30"
      @iscroll-end="onScrollEnd"
    >
      <template v-for="(article, articleIndex) in articles" :key="article.id">
        <ArticleItem class="mb-3" :article="article"></ArticleItem>
        <ArticleDivider
          v-if="
            !((articleIndex + 1) % 10) && articleIndex + 1 != articles.length
          "
        >
          {{ (articlesPageSize + articleIndex + 1) / articlesPageSize }}
        </ArticleDivider>
      </template>
      <LoadingAnimation :loading="articlesLoading"></LoadingAnimation>
    </div>
  </div>
</template>

<script>
// import InfiniteScroll from "@/components/InfiniteScroll.vue";
import { iscroll } from "@/infinite-scroll";
// import ArticlesList from "@/components/ArticlesList.vue";
import ArticleItem from "@/components/ArticleItem.vue";
import ArticleDivider from "@/components/ArticleDivider.vue";
import LoadingAnimation from "@/components/LoadingAnimation.vue";
import { userArticlesStore } from "@/store/articles";
import { storeToRefs } from "pinia";
export default {
  name: "HomeView",
  directives: {
    iscroll,
  },
  components: {
    LoadingAnimation,
    // InfiniteScroll,
    ArticleItem,
    ArticleDivider,
  },
  setup() {
    const articlesStore = userArticlesStore();
    const {
      articles,
      loading: articlesLoading,
      page: articlesPage,
      pageSize: articlesPageSize,
    } = storeToRefs(articlesStore);
    articlesStore.loadNextPage();
    return {
      articles,
      articlesLoading,
      articlesPage,
      articlesPageSize,
      onScrollEnd: () => {
        console.log("end");
        if (articlesLoading.value) return;
        articlesStore.loadNextPage();
      },
    };
  },
};
</script>
