<template>
  <div
    class="offer-box__terms flex flex-col items-start justify-center gap-4 mt-12"
  >
    <OfferTerm
      v-for="term in terms"
      :key="term.description"
      :description="term.description"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { terms } from '../content'

import OfferTerm from '@/components/pages/offer-page/OfferTerms/OfferTerm.vue'

export default defineComponent({
  name: 'OfferTerms',

  components: { OfferTerm },

  data: () => ({
    terms,
  }),
  
  methods: {},
})
</script>

<style lang="scss"></style>
