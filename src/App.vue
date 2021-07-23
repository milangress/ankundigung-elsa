<template>
  <div>
    <!--<flip-countdown deadline="2021-10-16 12:00:00"></flip-countdown>-->
    <div>
      
    <!--<vue-countdown :time="5 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }">
  Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
</vue-countdown>-->
      <text-countdown deadline="2021-10-16 12:00:00"></text-countdown>
  </div>
  </div>
</template>

<script>
  import FlipCountdown from './components/FlipCountdown.vue'
  import TextCountdown from './components/TextCountdown.vue'
  import VueCountdown from '@chenfengyuan/vue-countdown';


  export default {
    components: { FlipCountdown, VueCountdown, TextCountdown }
  }
</script>

<style>
@font-face {
  font-family: testfont;
  src: url(https://cdn.glitch.com/27980582-17ad-4d9c-96fc-33c1aac77c69%2FGT-America-Regular-trial-subset.woff2?v=1627044356526);
}
  body {
    font-family: testfont;
  }
</style>