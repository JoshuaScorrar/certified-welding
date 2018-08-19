<template>
  <v-content>

    <div id="particles-js"></div>
    <v-fade-transition mode="out-in">
      <router-view id="view" class="pt-5" />
    </v-fade-transition>

  </v-content>

</template>

<script>
  /* eslint-disable no-undef */

  import '../../plugins/particles'
  const particlesJS = window.particlesJS

  export default {
    metaInfo () {
      return {
        titleTemplate: '%s'
      }
    },
    data () {
      return {
        hideScrollArrow: null
      }
    },
    watch: {
      $route (to, from) {
        TweenMax.set('#particles-js', {autoAlpha: 0})
        setTimeout(() => {
          window.pJSDom[0].pJS.fn.reset()
          TweenMax.to('#particles-js', 0.4, {autoAlpha: 1})
        }, 1000)
      }
    },
    methods: {
      scrollTo () {
        this.hideScrollArrow = true
        TweenMax.to(window, 0.8, {scrollTo: {y: '#view', offset: -100}})
      }
    },
    computed: {
      lazyLoaded () {
        return this.$store.state.app.lazyLoaded
      },
      checkScrollArrow () {
        return this.hideScrollArrow
      }
    },
    mounted () {
      setTimeout(() => {
        particlesJS.load('particles-js', 'static/assets/particles.json')
      }, 500)
    }
  }
</script>

<style lang="stylus">

  .scroll-arrow
    width 40px
    height 40px
    z-index 20000
    position absolute
    top 20px
    left 0
    right 0
    margin auto

  #particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    top:0;
    left:0;
  }
  .application .theme--light.v-card, .application.theme--light{
    background: transparent;
  }
</style>
