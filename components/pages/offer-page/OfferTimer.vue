<template>
  <div class="offer-box__timer absolute">
    <div
      class="timer__wrapper relative flex items-center justify-center overflow-hidden w-[160px] h-[60px] rounded-xl bg-black tablet:w-[110px] tablet:h-[47px]"
      :style="{ border: percentageValue > 70 ? '2px solid #FF0000' : 'none' }"
    >
      <div
        class="timer__status w-full h-full transition-all ease-in-out rounded-r-xl bg-[#00CA14]"
        :style="{ marginRight: `${percentageValue}%` }"
      ></div>
      <span class="timer__metric absolute text-white text-2xl font-semibold">{{
        stringValue
      }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OfferTimer',

  components: {},

  props: {
    duration: {
      type: Number,
      required: true,
    },
  },

  emits: ['expire'],

  data: () => ({
    stringValue: '',
    percentageValue: 25,
  }),

  mounted() {
    this.setTimer()
  },

  methods: {
    setTimer() {
      if (!localStorage.getItem('offer-page-timer')) {
        localStorage.setItem('offer-page-timer', Date.now())
      }
      this.startTimer(localStorage.getItem('offer-page-timer'))
    },

    startTimer(startingPoint) {
      const indervalId = setInterval(() => {
        const delta = Math.floor(Date.now() - startingPoint) / 1000

        if (delta >= this.duration) {
          clearInterval(indervalId)
          localStorage.removeItem('offer-page-timer')
          return this.$emit('expire', true)
        }

        this.stringValue = this.secondsToTime(this.duration - delta)
        this.percentageValue = (delta / this.duration) * 100
      }, 1000)
    },
    
    secondsToTime(e) {
      const m = Math.floor((e % 3600) / 60)
        .toString()
        .padStart(2, '0')
      const s = Math.floor(e % 60)
        .toString()
        .padStart(2, '0')
      return m + ':' + s
    },
  },
})
</script>

<style lang="scss"></style>
