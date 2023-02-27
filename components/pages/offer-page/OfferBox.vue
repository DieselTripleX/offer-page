<template>
  <div
    class="offer-page__offer-box relative p-6 w-full max-w-[475px] bg-white border rounded-3xl border-[#CDCDCD] mobile:bg-transparent mobile:border-none"
  >
    <div
      class="offer-page__offer-box__wrapper mobile:p-4 mobile:pb-8 mobile:border mobile:border-[#CDCDCD] mobile:rounded-[12px] mobile:bg-white"
    >
      <p class="offer-box__title text-2xl font-extrabold mobile:text-[18px] mobile:drop-shadow-sm">
        3-day trial for <span class="text-[#FF8D24]">$0.99</span>
      </p>
      <p
        v-if="!expired"
        class="offer-box__description relative text-xl font-semibold mobile:text-[16px]"
      >
        Then $9.99
      </p>
      <p
        v-else
        class="offer-box__description--expired mb-12 text-xl font-semibold mobile:text-[16px]"
      >
        Then $39.99/week
      </p>
    </div>
    <OfferParagraph
      class="hidden my-10 mobile:block"
      @button-click="onClick"
    />
    <OfferTerms />
    <VButton
      class="offer-box__button border mt-6 rounded-xl text-[#01C120]"
      :icon="lockIcon"
      >Safe & secure payment</VButton
    >
    <p
      class="offer-box__reminder mt-6 opacity-50 text-center font-normal text-xs"
    >
      $0.99 charged today. If you don't cancel at least 24 hours before the end
      of the 3-day trial period, you will automatically be charged the full
      price of $19.99/Month . You can cancel your subscription at any time. By
      continuing, you indicate that you've read and agree to our Terms &
      Conditions, Privacy Policy , Money Back , and Subscription Terms .
    </p>
    <OfferTimer
      class="top-[7%] right-[5%] tablet:top-[10%] mobile:!right-[10%] mobile:!top-[6%]"
      :duration="180"
      @expire="expiredAction"
    />
    <img
      class="asteroid-icon absolute -top-[10%] right-[5%] mobile:hidden"
      src="@/assets/offer-page/asteroid.svg"
      alt="asteroid-icon"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import OfferTerms from '@/components/pages/offer-page/OfferTerms/OfferTerms.vue'
import OfferParagraph from '@/components/pages/offer-page/OfferParagraph.vue'
import OfferTimer from '@/components/pages/offer-page/OfferTimer.vue'
import VButton from '@/components/ui/VButton.vue'

import lockIcon from '@/assets/offer-page/lock.svg?url'

export default defineComponent({
  name: 'OfferBox',

  components: { OfferTerms, OfferParagraph, OfferTimer, VButton },

  emits: ['button-click'],

  data: () => ({
    lockIcon,
    expired: false,
  }),

  methods: {
    expiredAction() {
      this.expired = true
    },

    onClick() {
      this.$emit('button-click')
    },
  },
})
</script>

<style lang="scss">
.offer-box__description::after {
  position: absolute;
  left: 0;
  top: 24px;

  content: '$39.99/week';
  font-size: 16px;
  text-decoration: line-through;
  opacity: 40%;
}
</style>
