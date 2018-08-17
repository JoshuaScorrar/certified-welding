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
    watch: {
      $route (to, from) {
        TweenMax.set('#particles-js', {autoAlpha: 0})
        setTimeout(() => {
          window.pJSDom[0].pJS.fn.reset()
          TweenMax.to('#particles-js', 0.4, {autoAlpha: 1})
        }, 1000)
      }
    },
    mounted () {
      setTimeout(() => {
        particlesJS.load('particles-js', 'static/assets/particles.json')
      }, 500)
    }
  }
</script>

<style>
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
