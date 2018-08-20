<template>
  <v-app v-scroll="onScroll">
    <core-toolbar />

    <core-drawer />

    <core-jumbotron />

    <core-view />

    <core-mfooter />
  </v-app>
</template>

<script>
  /* eslint-disable no-undef */

  import { mapMutations, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        lazyTriggered: null
      }
    },
    mounted () {
      setTimeout(() => {
        this.animateCards()
        this.setLazyLoaded(true)
      }, 3000)
    },
    methods: {
      ...mapMutations('app', ['setLazyLoaded']),
      ...mapGetters('app', ['getLazy']),
      animateCards () {
        if (this.animated) {
          return
        }
        this.animated = true
        TweenMax.staggerFromTo('.v-card', 1, {y: 40, autoAlpha: 0}, {delay: 0.5, y: 0, autoAlpha: 1}, 0.2)
      },
      onScroll () {
        if (this.lazyTriggered && !this.getLazy()) {
          this.animateCards()
          this.setLazyLoaded(true)
        }
        this.lazyTriggered = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) >
          (10)
      }
    }
  }
</script>

<style lang="stylus">
  .pointer
    cursor pointer

  .max-view-width
    max-width 1366px
    margin 0 auto
</style>
