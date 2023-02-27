<template>
  <div class="offer-box__term flex items-center justify-start gap-[10px]">
    <img class="term__icon" src="@/assets/offer-page/star.svg" alt="star-icon" />
    <span class="term__description text-base font-normal">{{ description }}</span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OfferTerm',

  props: {
    description: {
      type: String,
      required: true,
    },
  },
  
  methods: {},
})
</script>

<style lang="scss"></style>
