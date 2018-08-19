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
    computed: {
      setLazy: (val) => {
        // if (this.getLazy()) {
        //   this.animateCards()
        // }
      }
    },
    mounted () {
      setTimeout(() => {
        this.animateCards()
        this.setLazyLoaded(true)
      }, 2000)
    },
    methods: {
      ...mapMutations('app', ['setLazyLoaded']),
      ...mapGetters('app', ['getLazy']),
      animateCards () {
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
</style>
