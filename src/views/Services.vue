<template>
  <div>
    <v-container grid-list-lg pa-0 pb-4>
      <v-layout
        row
        wrap
        justify-center
        align-start
      >
        <v-flex
          fill-height
          xs12
          sm5
          md6
          mb-3
          pa-0
          v-for="(item, i) in items"
          class="mi"
          :class="$vuetify.breakpoint.smAndDown ? 'pa-2' : 'mi--' + i"
          :key="i"
          d-flex>
        <v-card
          dark
          @mouseover="hoverIn"
          @mouseout="hoverOut"
        >
          <v-card-media
            height="250px"
            :src="item.image"
            :alt="item.image"
          >
            <v-container fill-height fluid class="bg-gradient">
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{item.heading1}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <p class="mt-3 " v-text="item.headingText2a"/>
            </div>
          </v-card-title>
        </v-card>


        </v-flex>
      </v-layout>
    </v-container>
  <alpha-hero
    src="/static/img/cert-weld/narek/c.jpg"
    alt="narek image"
    :height="$vuetify.breakpoint.mdAndUp ? 500 : 'auto'"
    :jumbotron="false"
    dark
    class="mt-5 bg-gradient"
  >
    <v-container
      fill-height
      grid-list-xl
    >
      <v-layout
        align-center
        justify-space-around
        wrap

      >
        <v-flex
          xs10
          md6

        >
          <alpha-testimonial
            :author="testimonials[2].author"
            :title="testimonials[2].title"
            :quote="testimonials[2].quote"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </alpha-hero>
</div>
</template>
<script>
  /* eslint-disable no-undef */

  export default {
    metaInfo: {
      title: 'Services',
      meta: [
        {name: 'description', content: 'Customized vue-cli templates for Vue and Vuetify'}
      ]
    },
    methods: {
      hoverIn (e) {
        TweenMax.to(e.currentTarget, 0.3, {y: -6})
        TweenMax.to(e.currentTarget.querySelectorAll('.headline'), 0.3, {x: 7})
      },
      hoverOut (e) {
        TweenMax.to(e.currentTarget, 0.3, {y: 0})
        TweenMax.to(e.currentTarget.querySelectorAll('.headline'), 0.3, {x: 0})
      }
    },
    computed: {
      items () {
        return this.$t('Views.Services.items')
      },
      testimonials () {
        return this.$t('Views.Home.testimonials')
      }
    }
  }
</script>
<style scoped lang="stylus">
  .mi
    position relative
  .mi--0, .mi--2, .mi--4
    margin-top 2em
    right -0.75em

  .mi--1, mi--3, .mi--5
    margin-top 0
    z-index 1

  .bg-gradient
    background linear-gradient(to bottom, rgba(0, 0, 0, 0.95) 0%, rgba(255, 255, 255, 0.1) 90%);
</style>
