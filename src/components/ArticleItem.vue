<template>
  <article
    class="bg-white p-6 rounded-r border-l border-l-4 border-sky-300 grid grid-flow-rows gap-3"
  >
    <header>
      <h3 class="text-xl">
        <a :href="article.url" target="_blank" title="Open article">
          <strong>
            {{ article.title }}
          </strong>
        </a>
      </h3>
    </header>
    <div class="flex items-center">
      <div class="shrink-0">
        <img class="w-6 h-6" :src="article.source.logo_url" alt="Logo" />
      </div>
      <div class="text-sm px-3">
        <p>
          <strong>{{ article.source.name }}</strong>
        </p>
        <ArticleDetails
          class="text-gray-500"
          :publishedAt="article.published_at"
          :name="article.author.name"
          :wordCount="article.word_count"
        >
        </ArticleDetails>
      </div>
    </div>
    <div class="grid grid-flow-rows gap-2">
      <template v-for="(excerpt, index) in computedExcerpts" :key="index">
        <ArticleExcerpt
          :text="excerpt.text"
          :keywords="excerpt.keywords"
        ></ArticleExcerpt>
      </template>
      <div v-if="article.excerpts.length > 1">
        <a
          @click.prevent="showMore = !showMore"
          title="Show more excerpts"
          class="cursor-pointer inline-flex rounded-full w-6 h-6 bg-gray-100 items-center justify-center hover:bg-gray-300 transition-colors duration-300"
        >
          <img
            v-if="showMore"
            class="w-6 h-6"
            src="../assets/chevron-up.svg"
            alt=""
          />
          <img v-else class="w-6 h-6" src="../assets/chevron-down.svg" alt="" />
        </a>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { computed, ref, defineProps, Ref, ComputedRef } from "vue";
import ArticleDetails from "./ArticleDetails.vue";
import ArticleExcerpt from "./ArticleExcerpt.vue";

// Define interfaces for props
interface ArticleSource {
  logo_url: string;
  name: string;
}

interface ArticleAuthor {
  name: string;
}

interface Excerpt {
  text: string;
  keywords: string[]; // Assuming keywords is an array of strings based on usage
}

interface Article {
  url: string;
  title: string;
  source: ArticleSource;
  published_at: string; // Consider Date if applicable, but string is common from APIs
  author: ArticleAuthor;
  word_count: number;
  excerpts: Excerpt[];
}

// Define props
const props = defineProps<{
  article: Article;
}>();

const showMore: Ref<boolean> = ref(false);

const computedExcerpts: ComputedRef<Excerpt[]> = computed(() => {
  if (!props.article || !props.article.excerpts) {
    return [];
  }
  if (showMore.value) {
    return props.article.excerpts;
  }
  return props.article.excerpts.slice(0, 1);
});
</script>
