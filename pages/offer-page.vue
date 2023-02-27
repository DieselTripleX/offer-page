<template>
  <div class="offer-page w-full h-full">
    <OfferPageHeader />
    <VContainer>
      <div class="offer-page__content flex justify-center gap-24 mt-24 mobile:mt-8">
        <OfferParagraph class="mobile:hidden" @button-click="switchPopUp" />
        <OfferBox @button-click="switchPopUp" />
      </div>
    </VContainer>
    <Transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <OfferPopUp v-if="modalActive" @close="switchPopUp" />
    </Transition>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import OfferPageHeader from '@/components/pages/offer-page/OfferPageHeader.vue'
import OfferParagraph from '@/components/pages/offer-page/OfferParagraph.vue'
import OfferBox from '@/components/pages/offer-page/OfferBox.vue'
import OfferPopUp from '@/components/pages/offer-page/OfferPopUp.vue'
import VContainer from '@/components/ui/VContainer.vue'

export default defineComponent({
  name: 'OfferPage',
  components: {
    OfferPageHeader,
    OfferParagraph,
    OfferBox,
    OfferPopUp,
    VContainer,
  },
  data: () => ({ modalActive: false }),
  methods: {
    switchPopUp() {
      this.modalActive = !this.modalActive
    },
  },
})
</script>

<style lang="scss">
.offer-page::before {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  content: '';
  background-image: url('@/assets/offer-page/background.svg');
  background-position: 0px -150px;
  opacity: 5%;
}
</style>
