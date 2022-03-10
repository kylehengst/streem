<template>
  <div class="bg-white p-6 rounded-r border-l border-l-4 border-sky-300">
    <h3 class="text-xl mb-3">
      <a :href="article.url" target="_blank" title="Open article">
        <strong>
          {{ article.title }}
        </strong>
      </a>
    </h3>
    <div class="flex items-center mb-3">
      <div>
        <img class="w-6 h-6" :src="article.source.logo_url" alt="Logo" />
      </div>
      <div class="text-sm px-3">
        <p>
          <strong>{{ article.source.name }}</strong>
        </p>
        <div class="text-gray-500">
          {{ article.published_at }}, {{ article.author.name }},
          {{ article.word_count }} words
        </div>
      </div>
    </div>
    <template v-for="(excerpt, index) in article.excerpts" :key="index">
      <div class="excerpt" v-html="excerpt.text"></div>
    </template>
    <div v-if="article.excerpts.length > 1">
      <img class="w-12 h-6" src="../assets/chevron-down.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup() {},
};
</script>

<style lang="postcss" scoped>
.excerpt em {
  @apply bg-yellow-300;
  color: red;
}
</style>
