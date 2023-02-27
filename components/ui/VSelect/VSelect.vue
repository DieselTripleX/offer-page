<template>
  <div
    class="select relative flex justify-between p-4 min-w-[116px] h-[48px] rounded-[8px] bg-white border border-[#D2D5DA] text-gray-1100 hover:border-[#00CA14] focus-within:border-[#00CA14] cursor-pointer"
    @click="toggleDropdown"
  >
    <VSelectHeading :item="activeItem" :placeholder="placeholder" />
    <div
      class="arrow-icon flex items-center transition-transform ease-in-out duration-300"
      :class="{ 'rotate-180': isOpen }"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M4 7L8 11L12 7"
          stroke="#292929"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <Transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <VSelectDropdown
        v-if="isOpen"
        :items="items"
        :active-item-slug="modelValue"
        @select="onSelect"
      />
    </Transition>
    <div class="absolute px-[5px] left-4 -top-2 text-xs font-bold bg-white">
      {{ fieldName }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import VSelectHeading from '@/components/ui/VSelect/VSelectHeading.vue'
import VSelectDropdown from '@/components/ui/VSelect/VSelectDropdown/VSelectDropdown.vue'

export default defineComponent({
  components: {
    VSelectDropdown,
    VSelectHeading,
  },

  props: {
    placeholder: {
      type: String,
      default: 'Select',
    },

    fieldName: {
      type: String,
      default: 'Field',
    },

    items: {
      type: Array,
      required: true,
    },

    modelValue: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue', 'touch'],

  data: () => ({
    isOpen: false,
  }),

  computed: {
    activeItem() {
      const item = this.items.find((item) => item.slug === this.modelValue)
      return item || { name: '', slug: '' }
    },
  },

  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
      this.$emit('touch')
    },

    onSelect(slug) {
      this.$emit('update:modelValue', slug);
    },
  },
})
</script>
