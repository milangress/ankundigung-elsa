<template lang="pug">
.main
  text-countdown(deadline="2021-10-16 12:00:00")
    //flip-countdown(deadline="2021-10-16 12:00:00")
    //vue-countdown(:time="5 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }"> Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.)
  h1
    | Elsa Winokurow -
    br
    | Pionierin um die
    br
    | Jahrhundertwende.
    br
    | Studentin, Migrantin, Ärztin.
  p
    | Ein Projekt des 17. Jahrgangs des
    br
    | Elitestudiengangs Osteuropastudien
    br
    | der LMU München und der
    br
    | Universität Regensburg.

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
  src: url(https://cdn.glitch.com/27980582-17ad-4d9c-96fc-33c1aac77c69%2FGT-America-Condensed-Regular--trial-subset.woff2?v=1627049070089);
}
  body {
    font-family: testfont,sans-serif;
    font-size: 2rem;
    color: #E22326;
  }
h1 {
  font-weight: normal;
}
</style>
