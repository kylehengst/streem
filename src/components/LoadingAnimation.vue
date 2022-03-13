<template>
  <div class="flex justify-center h-12">
    <img v-show="loading" class="h-4 w-24" src="../assets/loading.svg" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
