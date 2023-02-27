<template>
  <div class="heading flex items-center gap-3">
    <span
      v-if="item.name"
      class="category-name text-inherit text-[16px]"
      >{{ item.name }}</span
    >
    <span
      v-else
      class="placeholder text-gray-500 text-[16px]"
      >{{ placeholder }}</span
    >
    <div
      v-if="item.itemsCount"
      class="flex items-center gap-3"
    >
      <span class="bullet text-inherit">•</span>
      <span class="posts-count text-inherit text-[14px]">{{ item.itemsCount }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },

    placeholder: {
      type: String,
      default: '',
    },
  },
});
</script>
