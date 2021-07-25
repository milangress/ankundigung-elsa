<template lang="pug">
.main
  .top-bar
    span.countdown
      text-countdown(deadline="2021-10-16 12:00:00" :lang="currentLang")
        //flip-countdown(deadline="2021-10-16 12:00:00")
        //vue-countdown(:time="5 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }"> Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.)
    span.date
      span(v-html="date")
  main
    .left
      h1(v-html="main")
      p(v-html="secondary")
      .button.button--zoom {{buttonZoom}}
    .right
      .lang-switch(v-on:click="langSwitch") {{altLang}}
      .rotated
        h1(v-html="mainAlt")
        p(v-html="secondaryAlt")
  .bottom-bar
    span.countdown
      text-countdown(deadline="2021-10-16 12:00:00" :lang="altLang")
    span.date
      span(v-html="dateAlt")

</template>

<script>
  import FlipCountdown from './components/FlipCountdown.vue'
  import TextCountdown from './components/TextCountdown.vue'
  import VueCountdown from '@chenfengyuan/vue-countdown'


  export default {
    components: { FlipCountdown, VueCountdown, TextCountdown },
    computed: {
      main: function() {
        return this.txt.main[this.currentLang]
      },
      mainAlt: function() {
        return this.txt.main[this.altLang]
      },
      date: function () {
        return this.txt.date[this.currentLang]
      },
      dateAlt: function () {
        return this.txt.date[this.altLang]
      },
      secondary: function () {
        return this.txt.secondary[this.currentLang]
      },
      secondaryAlt: function () {
        return this.txt.secondary[this.altLang]
      },
      buttonZoom: function() {
        return this.txt.buttonZoom[this.currentLang]
      }
    },
    methods: {
      langSwitch: function() {
        const currLang = this.currentLang
        this.currentLang = this.altLang
        this.altLang = currLang
      }
    },
    data() {
      return {
        currentLang: 'de',
        altLang: 'ru',
        txt: {
          date: {
            de: '04. November 2021',
            ru: '4 ноября 2021 г.'
          },
          main: {
            de: `Elsa Winokurow –</br>Pionierin um die</br>Jahrhundertwende.</br>Studentin, Migrantin, Ärztin.`,
            ru: `Эльза Винокурова –</br>Пионер во всем</br>На рубеже веков.</br>Студент, мигрант, врач.`
          },
          secondary: {
            de: `Ein Projekt des 17. Jahrgangs</br>des Elitestudiengangs</br>Osteuropastudien der</br>LMU München und der</br>Universität Regensburg.`,
            ru: `Проект 17-го года элитного</br>курса Восточноевропейские</br>исследования</br>LMU Мюнхен и</br>университет Регенсбург.`
          },
          buttonZoom: {
            de: 'Zoom Webinar ☎️ ',
            ru: 'Вебинар Zoom ☎️ '
          }
        }
      }
    }
  }
</script>

<style>
@font-face {
  font-family: testfont;
  src: url(https://cdn.glitch.com/27980582-17ad-4d9c-96fc-33c1aac77c69%2Fgt.woff2?v=1627207369399);
}
  body {
    font-family: testfont,sans-serif;
    font-size: 2rem;
    color: #E22326;
  }
h1 {
  font-weight: normal;
}
.top-bar, .bottom-bar {
  display: flex;
  justify-content: space-between;
}
.bottom-bar {
  transform: rotate(180deg);
}
main {
  display: flex;
  justify-content: space-between;
}
.button {
  display: inline-block;
  border: 1px solid #E22326;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 0px 10px;
}
.lang-switch {
  text-align: right;
  font-size: 3rem;
  text-transform: uppercase;
  text-decoration: underline;
}
.rotated {
  transform: rotate(180deg);
}
</style>
