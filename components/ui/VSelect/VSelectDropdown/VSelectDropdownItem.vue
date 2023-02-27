<template>
  <div
    class="dropdown-item flex items-center gap-3 w-full h-8 px-4 py-2 border-b border-[#D2D5DA] hover:bg-[#00CA14] hover:text-white last:border-none last:rounded-[8px]"
  >
    <span class="category-name text-inherit text-[16px]">{{ item.name }}</span>
    <div
      v-if="item.itemsCount"
      class="flex items-baseline gap-3"
    >
      <span class="bullet text-inherit">•</span>
      <span class="posts-count text-inherit text-[14px]">{{ item.itemsCount }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
});
</script>
