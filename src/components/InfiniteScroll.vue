<template>
  <div ref="container" class="overflow-auto">
    <slot></slot>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  emits: ["end"],
  props: {
    buffer: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const container = ref(null);
    const onScroll = (evt) => {
      // console.log(
      //   evt.target.scrollHeight - evt.target.scrollTop - props.buffer,
      //   evt.target.offsetHeight
      // );
      if (
        evt.target.scrollHeight - evt.target.scrollTop - props.buffer <=
        evt.target.offsetHeight
      ) {
        emit("end");
      }
    };
    onMounted(() => {
      console.log(container.value);
      container.value.addEventListener("scroll", onScroll);
    });
    return {
      container,
    };
  },
};
</script>
