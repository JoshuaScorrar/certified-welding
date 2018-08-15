<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12 lg10 class="mb-5">
        <alpha-images
          :categories="categories"
          :projects="projects"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Projects',
      meta: [
        { name: 'description', content: 'Customized vue-cli templates for Vue and Vuetify' }
      ]
    },
    computed: {
      categories () {
        return this.$t('Views.Gallery.categories')
      },
      projects () {
        return this.$t('Views.Gallery.projects')
      }
    }
  }
</script>
