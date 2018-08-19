<template>
  <video-bg
    id="jumbotron"
    class="vh"
    :sources="[heroVideo + '.webm', heroVideo + '.mp4', heroVideo + '.ogv']" :img="heroImage" :alt="heroImage">
    <div class="z0 bg-gradient"></div>
    <v-fade-transition origin="top center 0.1" mode="out-in">
      <v-container
        fill-height
        fill-width
        :key="$route.path"
        v-if="isBooted"
        class="z3"
      >
        <v-layout align-center class="z4">
          <v-flex
            text-xs-center
            :key="$route.path"
          >
            <h1
              :class="[fontBPSize, {'invisible' : !lazyLoaded}]"
              class="white--text mb-3"
              v-html="title"/>
            <h2
              :class="[fontBPSize, {'invisible' : !lazyLoaded}]"
              class="white--text"
              v-html="subTitle"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-fade-transition>
  </video-bg>
</template>

<script>
  /* eslint-disable no-undef */

  export default {
    data: () => ({
      isBooted: false
    }),

    computed: {
      lazyLoaded () {
        return this.$store.state.app.lazyLoaded
      },
      isHome () {
        return this.$route.path === '/'
      },
      namespace () {
        return this.$route.name
      },
      title () {
        return this.$t(`Views.${this.namespace}.jumbotronTitle`)
      },
      subTitle () {
        return this.$t(`Views.${this.namespace}.jumbotronSubTitle`)
      },
      fontBPSize () {
        return this.$vuetify.breakpoint.smAndUp ? 'lg-text' : ''
      },
      heroImage () {
        let path = '/static/img/'
        let size = ''
        let name = 'top-a-'
        let bp = this.$vuetify.breakpoint
        if (bp.smAndDown) {
          size = '768'
        } else {
          size = '1280'
        }
        return path + name + size + '.jpg'
      },
      heroVideo () {
        let path = '/static/video/'
        let size = ''
        let name = 'top-a-'
        let bp = this.$vuetify.breakpoint

        if (bp.smAndDown) {
          size = '768'
        } else if (bp.mdAndDown) {
          size = '1024'
        } else if (bp.lgAndDown) {
          size = '1280'
        } else {
          size = '1920'
        }
        return (path + name + size)
      }
    },
    mounted () {
      setTimeout(() => {
        this.isBooted = true
        setTimeout(() => {
          TweenMax.fromTo('.scroll-arrow', 0.5, {y: -15}, {delay: 2, y: 0, ease: Quint.easeIn, yoyo: true, repeat: -1})
          TweenMax.staggerFromTo('#jumbotron .invisible', 1.5, {y: 40, autoAlpha: 0}, {y: 1, autoAlpha: 1}, 0.2)
        }, 1)
      }, 500)
    }
  }
</script>
<style scoped lang="stylus">

  .invisible
    opacity 0
    visibility hidden

  h1
    font-family 'Roboto', sans-serif
    font-weight bold
    font-size 40px
    line-height 1.1

  h2
    font-size 1.2em
    font-weight 100

  h1.lg-text
    font-size 60px

  h2.lg-text
    font-size 1.5em

  .bg-gradient
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events none
    /*background: linear-gradient(to bottom,*/
    /*rgba(50, 50, 50, 0.8),*/
    /*rgba(75, 75, 75, 0.8),*/
    /*rgba(150, 150, 150, 0.8),*/
    /*rgba(255, 255, 255, 1))*/
    /*background: -moz-linear-gradient(top, rgba(0,0,0,0.89) 0%, rgba(255,255,255,0.85) 76%, rgba(255,255,255,1) 100%); !* FF3.6-15 *!*/
    /*background: -webkit-linear-gradient(top, rgba(0,0,0,0.89) 0%,rgba(255,255,255,0.85) 76%,rgba(255,255,255,1) 100%); !* Chrome10-25,Safari5.1-6 *!*/
    background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%,rgba(103, 103, 103, 0.6) 59%,rgba(197, 197, 197, 0.73) 84%,rgba(255,255,255,1) 100%);

  .z4
    z-index 4

  .z3
    z-index 3

  .fill-width
    width 100%

  .vh
    height 75vh !important

</style>
