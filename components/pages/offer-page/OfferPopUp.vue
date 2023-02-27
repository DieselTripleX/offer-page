<template>
  <div class="overlay fixed w-full h-full inset-0 bg-[rgba(0,0,0,0.5)]">
    <div
      class="offer-page__pop-up relative w-full max-w-[400px] mx-auto px-4 py-6 top-1/4 rounded-xl bg-white"
    >
      <p class="pop-up__title text-center text-xl font-extrabold">
        Payment method
      </p>
      <VButton
        class="pop-up__button--paypal mt-6 bg-[#FEC538] hover:bg-[#FFDA80] text-base font-bold"
        :icon="paypal"
        >BUY NOW</VButton
      >
      <VButton
        class="pop-up__button--gpay mt-4 border border-[#E1E1E1] bg-white hover:bg-black text-base font-bold hover:text-white"
        :icon="gpay"
        >PAY</VButton
      >
      <div class="pop-up__credentials flex flex-col gap-8 mt-6">
        <VInput
          :invalid="true"
          type="password"
          min-length="16"
          max-length="16"
          field-name="Card number"
          placeholder="•••• •••• •••• ••••"
          error-message="Invalid number"
        />
        <div class="flex gap-[10px]">
          <VSelect :items="months" field-name="Month" />
          <VSelect :items="years" field-name="Year" />
          <VInput
            :invalid="false"
            type="password"
            min-length="3"
            max-length="3"
            field-name="CVV"
            placeholder="•••"
            error-message="Invalid number"
          />
        </div>
      </div>
      <VButton
        disabled
        class="pop-up__button--submit max-w-[300px] mt-10 mx-auto bg-black text-white text-base font-bold"
        >Submit</VButton
      >
      <VButton
        class="pop-up__button--submit mt-2 bg-transparent text-base font-bold"
        @click="closePopUp"
        >Close</VButton
      >
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import VButton from '@/components/ui/VButton.vue'
import VInput from '@/components/ui/VInput.vue'
import VSelect from '@/components/ui/VSelect/VSelect.vue'

import paypal from '@/assets/offer-page/paypal.svg?url'
import gpay from '@/assets/offer-page/gpay.svg?url'
import { months, years } from '@/components/pages/offer-page/content'

export default defineComponent({
  name: 'OfferPopUp',
  
  components: { VButton, VInput, VSelect },

  emits: ['close'],

  data: () => ({ paypal, gpay, months, years }),

  methods: {
    closePopUp() {
      this.$emit('close')
    },
  },
})
</script>

<style lang="scss">
.pop-up__credentials::before {
  content: '';
  width: 100%;
  border-top: 2px solid black;
  opacity: 10%;
}
</style>
