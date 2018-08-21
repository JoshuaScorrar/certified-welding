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
      let $this = this
      clearTimeout(this.delayAnimated)
      this.delayAnimated = setTimeout(() => {
        console.log('Lazy Loaded at mounted')
        //$this.setLazyLoaded(true)
        //$this.animateCards()
      }, 3000)
    },
    watch: {
      $route (to, from) {
        let $this = this
        this.animated = false
        clearTimeout(this.delayAnimated)
        this.delayAnimated = setTimeout(() => {
          console.log('Lazy Loaded at route change')
          $this.setLazyLoaded(true)
          $this.animated = false
          //$this.animateCards()
        }, from.path === '/' ? 3000 : 1000)
      }
    },
    methods: {
      ...mapMutations('app', ['setLazyLoaded']),
      ...mapGetters('app', ['getLazy']),
      animateCards () {
        if (this.animated) {
          return
        }
        this.animated = true
        TweenMax.staggerFromTo('#card-feature .invisible.v-card', 1.5, {y: 20, autoAlpha: 0}, {delay: 0.3, y: 0, autoAlpha: 1}, 0.2)
      },
      onScroll () {
        if (this.lazyTriggered && !this.getLazy()) {
          console.log('Lazy Loaded at scroll')
          this.setLazyLoaded(true)
        }
        this.animateCards()
        this.lazyTriggered = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) >
          (50)
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

  .invisible
    opacity 0
    visibility hidden

</style>
