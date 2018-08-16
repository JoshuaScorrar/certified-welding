<template>
  <v-container grid-list-xl pa-0>
    <v-layout
      row
      wrap
      justify-center
      align-start
    >
      <v-flex
        xs12
        sm4
        d-flex
        v-for="(feature, i) in features"
        :key="i"
      >
        <v-card
          :class="mobile ? '' : 'mi--' + i"
          flat
          tile
          dark
          class="grey darken-3 elevation-1 pointer"
          @mouseover="hoverIn" @mouseout="hoverOut"
          :to="item"
        >
          <v-card-media

            :src="`/static/img/${feature.img}.jpg`"
            :height="cardHeight"
          />
          <v-card-title class="title text-lg-center" v-text="feature.title"/>
          <v-card-text class="pb-5" v-text="feature.text"/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import TweenMax from 'gsap'

  export default {
    name: 'alpha-card-feature',
    computed: {
      mobile () {
        return this.$vuetify.breakpoint.xsOnly
      },
      item () {
        let $this = this
        let items = $this.$t('Layout.View.items')
        let match = items.find((item) => {
          return $this.features.find((feature) => {
            return feature.name === item.text
          })
        })
        return match.to
      }
    },
    methods: {
      hoverIn (e) {
        TweenMax.to(e.currentTarget, 0.3, {y: -10})
      },
      hoverOut (e) {
        TweenMax.to(e.currentTarget, 0.3, {y: 0})
      }
    },
    props: {
      cardHeight: {
        type: String,
        default: '200px'
      },
      features: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .mi--0
    position: relative;
    margin-top 2em;

  .mi--1
    position relative
    margin-top 0em;

  .mi--2
    position: relative;
    margin-top 6em;

  .container.grid-list-xl .layout .flex
    padding 0

</style>
