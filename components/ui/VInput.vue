<template>
  <div class="relative min-w-[116px]">
    <div
      class="v-input relative flex flex-row-reverse items-center gap-4 py-[14px] px-4 h-12 rounded-[8px] bg-white border-solid border border-gray-300 text-gray-1100 hover:border-gray-800 focus-within:border-gray-400 cursor-text transition-colors duration-300 ease-in-out"
      :class="style"
      @click="handleClick"
    >
      <img
        v-if="icon"
        :src="icon"
        alt="icon"
        class="w-20 h-20"
        :class="{ 'icon-invalid': invalid }"
      />
      <input
        ref="input"
        v-model="inputModel"
        :type="type"
        :minlength="minLength"
        :maxlength="maxLength"
        :disabled="disabled"
        class="required relative input outline-none w-full bg-transparent text-inherit"
        :placeholder="placeholder"
      />
    </div>
    <div class="absolute px-[5px] left-4 -top-2 text-xs font-bold bg-white">
      {{ fieldName }}
    </div>
    <div class="absolute right-[14px] top-[14px]">
      <transition name="fade">
        <p
          v-if="errorMessage && invalid"
          class="text-[12px] text-[#FF0000] font-medium truncate"
        >
          {{ errorMessage }}
        </p>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: '',
    },

    type: {
      type: String,
      default: 'text',
    },

    icon: {
      type: String,
      default: '',
    },

    fieldName: {
      type: String,
      default: 'field',
    },

    placeholder: {
      type: String,
      default: 'Write here!',
    },

    mask: {
      type: String,
      default: '',
    },

    minLength: {
      type: String,
      default: '',
    },

    maxLength: {
      type: String,
      default: '',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    invalid: {
      type: Boolean,
      default: false,
    },

    errorMessage: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue'],

  data: () => ({}),

  computed: {
    inputModel: {
      get() {
        return this.modelValue
      },

      set(value) {
        this.$emit('update:modelValue', value)
      },
    },

    style() {
      return this.invalid
        ? 'border-red-500 hover:!border-red-500 focus-within:!border-red-500 text-gray-1100'
        : ''
    },
  },

  watch: {
    invalid(value) {
      if (value) setTimeout(() => (this.errorBackground = ''), 500)
      else this.errorBackground = ' !bg-red-100'
    },
  },

  methods: {
    handleClick() {
      const input = this.$refs.input
      if (!this.disabled) {
        input.focus()
      }
    },
  },
})
</script>

<style>
.icon-invalid {
  filter: invert(45%) sepia(93%) saturate(2008%) hue-rotate(321deg)
    brightness(84%) contrast(96%);
}
</style>
