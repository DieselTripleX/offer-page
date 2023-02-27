<template>
  <component
    :is="tag"
    v-bind="$attrs"
    class="flex items-center justify-center gap-[10px] w-full h-[56px] rounded-xl overflow-hidden text-ellipsis transition-colors ease-out disabled:bg-[#D2D2D2]"
    @click="buttonClick"
  >
    <img v-if="icon" :src="icon" alt="icon" class="button__icon" />
    <span class="button__text text-inherit">
      <slot />
    </span>
  </component>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},

  props: {
    tag: {
      type: String,
      default: 'button',
    },
    icon: {
      type: String,
      default: '',
    },
  },

  methods: {
    buttonClick(event) {
      if (this.gtagEvent) this.$gtag('event', this.gtagEvent)
      this.$emit('click', event)
    },
  },
})
</script>
