<template>


  <video-bg
    class="vh"
    :sources="[heroVideo]" img="demo/assets/bg.jpg">
    <div class="z0 bg-gradient"></div>
    <v-fade-transition origin="top center 0.1" mode="out-in">
    <v-container
      fill-height
      fill-width
      :key="$route.path"
      v-if="isBooted"
      class="z5"

    >



      <v-layout align-center class="z10">
        <v-flex
          text-xs-center
          :key="$route.path"
        >
          <h1 class="white--text" v-html="title"/>
        </v-flex>
      </v-layout>

    </v-container>
    </v-fade-transition>
  </video-bg>
</template>

<script>
  export default {
    data: () => ({
      isBooted: false
    }),

    computed: {
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
      heroImage () {
        return `/static/img/welding/${this.namespace.toLowerCase()}-bw.jpg`
      },
      heroVideo () {
        return `/static/video/7.mp4`
      }
    },

    mounted () {
      setTimeout(() => {
        this.isBooted = true
      }, 200)
    }
  }
</script>
<style scoped lang="stylus">
  h1
    font-family 'Roboto', sans-serif
    font-weight bold
    font-size 60px

  .bg-gradient
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /*background: linear-gradient(to bottom,*/
    /*rgba(50, 50, 50, 0.8),*/
    /*rgba(75, 75, 75, 0.8),*/
    /*rgba(150, 150, 150, 0.8),*/
    /*rgba(255, 255, 255, 1))*/
    /*background: -moz-linear-gradient(top, rgba(0,0,0,0.89) 0%, rgba(255,255,255,0.85) 76%, rgba(255,255,255,1) 100%); !* FF3.6-15 *!*/
    /*background: -webkit-linear-gradient(top, rgba(0,0,0,0.89) 0%,rgba(255,255,255,0.85) 76%,rgba(255,255,255,1) 100%); !* Chrome10-25,Safari5.1-6 *!*/
    background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%,rgba(103, 103, 103, 0.6) 59%,rgba(197, 197, 197, 0.73) 84%,rgba(255,255,255,1) 100%);

  .z10
    z-index 10

  .z5
    z-index 5

  .fill-width
    width 100%

  .vh
    height 70vh !important

</style>
