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
          md4
          v-for="(item, i) in items"
          :key="i"
          d-flex>
      <v-card dark>
        <v-card-media
          height="300px"
          :src="item.image"
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
            :author="testimonials[1].author"
            :title="testimonials[1].title"
            :quote="testimonials[1].quote"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </alpha-hero>
  </div>
</template>
<script>
  export default {
    metaInfo: {
      title: 'Projects',
      meta: [
        {name: 'description', content: 'Customized vue-cli templates for Vue and Vuetify'}
      ]
    },
    computed: {
      items () {
        return this.$t('Views.Projects.items')
      },
      testimonials () {
        return this.$t('Views.Home.testimonials')
      }
    }
  }
</script>
<style scoped lang="stylus">
  .headline
    position: relative
    z-index 2
  .bg-gradient
    background linear-gradient(to bottom, rgba(0, 0, 0, 0.95) 0%, rgba(255, 255, 255, 0.2) 90%);
</style>
