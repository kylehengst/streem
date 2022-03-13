<template>
  <div>
    <div class="excerpt" v-html="computedExcerpt"></div>
    <div class="text-gray-500 text-sm mt-1">
      Keywords: {{ keywords.join(", ") }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    keywords: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  setup(props) {
    return {
      computedExcerpt: props.text,
    };
  },
};
</script>

<style lang="postcss" scoped>
.excerpt {
  >>> em {
    background: yellow;
  }
}
</style>
