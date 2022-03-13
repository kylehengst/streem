<template>
  <div v-html="computedDetails"></div>
</template>

<script>
import { DateTime } from "luxon";
import { computed } from "vue";
export default {
  props: {
    publishedAt: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    wordCount: {
      type: Number,
      default: null,
    },
    separator: {
      type: String,
      default: ", ",
    },
  },
  setup(props) {
    return {
      computedDetails: computed(() => {
        const details = [];
        if (props.publishedAt)
          details.push(
            DateTime.fromISO(props.publishedAt).toRelativeCalendar()
          );
        if (props.name) {
          details.push(props.name);
        }
        if (props.wordCount) {
          details.push(`${props.wordCount} words`);
        }
        return details.join(props.separator);
      }),
    };
  },
};
</script>
