<template>
  <v-container grid-list-lg pa-0>
    <v-layout
      row
      wrap
      justify-center
      align-start
    >
      <v-flex
        xs12
        sm4
        md4
        d-flex
        v-for="(feature, i) in features"
        :key="i"
      >
        <v-card
          :class="mobile ? '' : 'mi--' + i"
          flat
          tile
          dark
          class="grey darken-3 elevation-1"
          @mouseover="hoverIn"
          @mouseout="hoverOut"
        >
          <v-card-media
            :src="`/static/img/${feature.img}.jpg`"
            :height="cardHeight"
          />
          <v-flex pa-4>
          <v-card-title class="title text-lg-center pa-0 mb-3" v-text="feature.title"/>
          <v-card-text class="pa-0 mb-2" v-text="feature.text"/>
          <v-card-text class="pa-0 pb-5" v-text="feature.subText"/>
          <v-card-actions class="pa-0">
            <v-btn @click="direct(feature)">
              {{feature.callToAction}}
            </v-btn>
          </v-card-actions>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  /* eslint-disable no-undef */

  export default {
    name: 'alpha-card-feature',
    data () {
      return {
        items: this.$t('Layout.View.items')
      }
    },
    computed: {
      mobile () {
        return this.$vuetify.breakpoint.xsOnly
      }
    },

    methods: {
      direct (item) {
        this.$router.push(this.items.find((i) => i.text === item.name).to)
      },
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
        default: '300px'
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
    margin-top 4em;

  .container.grid-list-lg .layout .flex
    padding 0

  .v-card__text
    font-weight 100

  .bg-gradient
    position absolute
    width 100%
    height 100%
    background linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(117,117,117,0.25) 50%,
      rgba(0, 0, 0, 0.5) 100%
    )
    z-index 2
</style>
