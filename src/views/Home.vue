<template>
  <div>

    <v-container fill-height>

      <v-layout
        justify-center
        align-center
        wrap
      >

        <v-flex dark xs12 mb-5>
          <alpha-card-feature :features="cardFeatures"/>
        </v-flex>

      </v-layout>
    </v-container>

    <alpha-hero
      src="/static/img/cert-weld/narek/c.jpg"
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
      title: 'Certified Welding',
      meta: [
        {name: 'description', content: 'Serious Welding for serious projects, from structural steel to concrete moulds, we do it all.'}
      ]
    },
    mounted () {
      TweenMax.staggerFromTo('.v-card', 1, {y: 40, autoAlpha: 0}, {y: 0, autoAlpha: 1}, 0.2)
    },
    methods: {
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > (this.$el.clientHeight || 100)
      }
    },
    computed: {
      cardFeatures () {
        return this.$t('Views.Home.cardFeatures')
      },
      testimonials () {
        return this.$t('Views.Home.testimonials')
      }
    }
  }
</script>

<style lang="stylus" scoped="true">

  .mi--0
    position: relative;
    margin-top 2em;

  .mi--1
    position relative
    margin-top 9em;

  .mi--2
    position: relative;
    margin-top 6em;

  .mi--u, .mi--d
    //-webkit-box-shadow: 0px 0px 20px -6px rgba(0,0,0,0.75)
    //-moz-box-shadow: 0px 0px 20px -6px rgba(0,0,0,0.75)
    //box-shadow: 0px 0px 20px -6px rgba(0,0,0,0.75)
    position: relative
    padding 0 !important

  .mi--u
    top -1em

  .mi--d
    top 1em
    z-index 1

  .bg-gradient
    background: linear-gradient(to bottom, rgba(0, 0, 0, .85), rgba(255, 255, 255, 0.5));
</style>
