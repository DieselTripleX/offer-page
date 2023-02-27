<template>
  <div class="offer-page__paragraph">
    <h1 class="offer-page__title text-5xl font-extrabold tablet:text-[32px]">
      Start your learning<br />
      journey now
    </h1>
    <p
      class="offer-page__description mt-6 text-2xl font-semibold tablet:text-[24px]"
    >
      Get a
      <span class="font-extrabold text-[#FF8D24]">Planet</span
      ><span class="font-extrabold">Learn</span> plan to rock<br />
      self-learning
    </p>
    <VButton
      class="offer-page__button mt-8 max-w-[273px] bg-black hover:bg-[#00CA14] text-base font-bold text-white"
      @click="onClick"
      >Get my plan</VButton
    >
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import VButton from '@/components/ui/VButton.vue'

export default defineComponent({
  name: 'OfferParagraph',
  components: { VButton },
  emits: ['button-click'],
  methods: {
    onClick() {
      this.$emit('button-click')
    }
  },
})
</script>

<style lang="scss"></style>
