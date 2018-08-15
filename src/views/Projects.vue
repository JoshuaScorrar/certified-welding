<template>
  <v-container
    fill-height
    column
  >
    <v-layout
      wrap
      pb-5
      v-for="(item, i) in items"
      :key="i"
      pa-5

    >
      <v-flex md12>
      <v-flex md10 mb-5 hidden-sm-and-down>
        <v-card :img="item.images[0]" height="250px"/>
      </v-flex>
      <v-flex xs12 md12>
        <h2 class="title mb-3" v-text="item.heading1"/>
        <p v-text="item.headingText1"/>
      </v-flex>
      <v-flex xs12 md12 class="py-5">
        <h2 class="title mb-3"v-text="item.heading2"/>
        <p v-text="item.headingText2a"/>
      </v-flex>
      <v-flex xs12>
        <v-layout justify-center>
          <v-flex xs12 sm10 md8>
            <alpha-testimonial
              :author="item.testimonial.author"
              :title="item.testimonial.title"
              :quote="item.testimonial.quote"
            />
          </v-flex>
        </v-layout>
      </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
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
      }
    }
  }
</script>
