<template>
  <div
    class="dropdown absolute top-full z-2 inset-x-0 mt-[1px] border border-[#D2D5DA] rounded-b-[8px] bg-white"
  >
    <VSelectDropdownItem
      v-for="item in filterItems"
      :key="item.slug"
      :item="item"
      @click="onClick(item.slug)"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import VSelectDropdownItem from '@/components/ui/VSelect/VSelectDropdown/VSelectDropdownItem.vue'

export default defineComponent({
  components: {
    VSelectDropdownItem,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },

    activeItemSlug: {
      type: String,
      required: true,
    },
  },

  emits: ['select'],

  computed: {
    filterItems() {
      return this.items.filter((item) => item.slug !== this.activeItemSlug)
    },
  },

  methods: {
    onClick(slug) {
      this.$emit('select', slug)
    },
  },
})
</script>
