<template>
  <span class="container flip-clock">
    <span v-if="lang==='de'">
      Online-Vernissage startet in {{ days }} Tagen, {{ hours }} Stunden, {{ minutes }}
      Minuten und {{ seconds }} Sekunden
    </span>
    <span v-if="lang==='ru'">
      Онлайн-вернисаж начнется через {{ days }} дня, {{ hours }} часов, {{ minutes }}
      минут и {{ seconds }} секунд.
    </span>
  </span>
</template>

<script>

import uuidv4 from 'uuid/v4'

export default {
  name: 'flipCountdown',
  props: {
    lang: {
      type: String,
      default: 'de',
    },
    deadline: {
      type: String,
    },
    stop: {
      type: Boolean,
    },
    showDays: {
      type: Boolean,
      required: false,
      default: true,
    },
    showHours: {
      type: Boolean,
      required: false,
      default: true,
    },
    showMinutes: {
      type: Boolean,
      required: false,
      default: true,
    },
    showSeconds: {
      type: Boolean,
      required: false,
      default: true,
    },
    labels: {
      type: Object,
      required: false,
      default: function () {
        return {
          days: 'Days',
          hours: 'Hours',
          minutes: 'Minutes',
          seconds: 'Seconds',
        }
      },
    },
  },
  data() {
    const uuid = uuidv4()
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      date: null,
      interval: null,
      diff: 0,
      show: false,
      timeData: [
        {
          current: 0,
          previous: 0,
          label: this.labels.days,
          elementId: 'flip-card-days-' + uuid,
          show: this.showDays,
        },
        {
          current: 0,
          previous: 0,
          label: this.labels.hours,
          elementId: 'flip-card-hours-' + uuid,
          show: this.showHours,
        },
        {
          current: 0,
          previous: 0,
          label: this.labels.minutes,
          elementId: 'flip-card-minutes-' + uuid,
          show: this.showMinutes,
        },
        {
          current: 0,
          previous: 0,
          label: this.labels.seconds,
          elementId: 'flip-card-seconds-' + uuid,
          show: this.showSeconds,
        },
      ],
    }
  },
  created() {
    if (!this.deadline) {
      throw new Error("Missing props 'deadline'")
    }
    const endTime = this.deadline
    this.date = Math.trunc(Date.parse(endTime.replace(/-/g, '/')) / 1000)
    if (!this.date) {
      throw new Error("Invalid props value, correct the 'deadline'")
    }
    this.interval = setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
  mounted() {
    if (this.diff !== 0) {
      this.show = true
    }
  },
  computed: {
    seconds() {
      return Math.trunc(this.diff) % 60
    },
    minutes() {
      return Math.trunc(this.diff / 60) % 60
    },
    hours() {
      return Math.trunc(this.diff / 60 / 60) % 24
    },
    days() {
      return Math.trunc(this.diff / 60 / 60 / 24)
    },
  },
  watch: {
    deadline: function (newVal, oldVal) {
      const endTime = this.deadline
      this.date = Math.trunc(Date.parse(endTime.replace(/-/g, '/')) / 1000)
      if (!this.date) {
        throw new Error("Invalid props value, correct the 'deadline'")
      }
    },
    now(value) {
      this.diff = this.date - this.now
      if (this.diff <= 0 || this.stop) {
        this.diff = 0
        //this.updateTime(3, 0);
      } else {
        //this.updateAllCards();
      }
    },
    diff(value) {
      if (value === 0) {
        this.$emit('timeElapsed')
        //this.updateAllCards();
      }
    },
  },
  filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    },
  },
  methods: {

  },
  beforeDestroy() {
    if (window['cancelAnimationFrame']) {
      cancelAnimationFrame(this.frame)
    }
  },
  destroyed() {
    clearInterval(this.interval)
  },
}
</script>

<style lang="less" scoped>

</style>
