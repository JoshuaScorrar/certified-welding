<template>
  <div class="alpha-gallery">
    <v-dialog class="image-viewer" :fullscreen="fullscreen" v-if="project" v-model="dialog" max-width="90%">
      <v-carousel
        :hide-delimiters="true"
        :cycle="false"
        :value="projectIndex">
        <div class="btn-wrapper">
          <v-btn
            light
            small
            top
            fab
            right
            mt5
            class="v-btn-full"
            @click.native="fullscreen = !fullscreen"
          >
            <v-icon>{{!fullscreen ? 'fullscreen' : 'fullscreen_exit'}}</v-icon>
          </v-btn>
          <v-btn
            light
            small
            top
            fab
            right
            mt5
            @click.native="dialog = false"
          >
            <v-icon>clear</v-icon>
          </v-btn>
        </div>
        <v-carousel-item
          v-for="(pro, i) in computedProjects"
          :key="i"
          :src="path + pro.path + pro.img"
        ></v-carousel-item>
      </v-carousel>
      <!--<v-card>-->
        <!--<v-card-title class="headline">Use Google's location service?</v-card-title>-->
        <!--<v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>-->
        <!--<v-card-actions>-->
          <!--<v-spacer></v-spacer>-->
          <!--<v-btn color="green darken-1" flat @click.native="dialog = false">Close</v-btn>-->
        <!--</v-card-actions>-->
      <!--</v-card>-->
    </v-dialog>
    <v-tabs class="mb-5">
      <v-tab
        v-for="(category, i) in categories"
        :key="i"
        @click="select(category)"
        class="transparent"
      >
        <span v-text="category.text" />
      </v-tab>
    </v-tabs>
    <v-container grid-list-xl pa-0>
      <transition-group
        tag="v-layout"
        name="fade-transition"
        class="wrap child-flex"
        style="min-height: 450px"
      >
        <v-flex
          xs6
          sm4
          md4
          lg3
          xl2
          v-for="(project, j) in computedProjects"
          :key="project.name"
          gallery-card
          @click="genAction(project, j)"
        >
          <slot
            v-if="$scopedSlots.default"
            :project="project"
          />
          <v-card
            height="200px"
            hover
            class="white--text"
            :img="path + project.path + 'thumbs/' + project.img"
            slot="activator"
            v-else
          >
          </v-card>
        </v-flex>
      </transition-group>
    </v-container>
  </div>
</template>

<script>
  /* eslint-disable no-undef */

  export default {
    name: 'alpha-gallery',

    data: () => ({
      category: null,
      dialog: false,
      project: false,
      projectIndex: 0,
      fullscreen: true,
      path: 'static/img/cert-weld/'
    }),

    props: {
      categories: {
        type: Array,
        default: () => []
      },
      projects: {
        type: Array,
        default: () => []
      }
    },

    computed: {
      computedProjects () {
        return !this.category
          ? this.projects
          : this.projects.filter(p => p.categories.includes(this.category))
      }
    },

    methods: {
      genAction (project, i) {
        this.projectIndex = i
        this.dialog = true
        this.project = project
      },
      select (category) {
        this.category = category.filter
        TweenMax.set('#particles-js', {autoAlpha: 0})
        setTimeout(() => {
          window.pJSDom[0].pJS.fn.reset()
          TweenMax.to('#particles-js', 0.4, {autoAlpha: 1})
        }, 300)
      }
    }
  }
</script>

<style lang="stylus">

  .gallery-card
    transform-origin: center center 0
    transition: .3s cubic-bezier(.25,.8,.50,1)

  .v-tabs__bar
    background-color: transparent !important

  .fade-transition-leave,
  .fade-transition-leave-active,
  .fade-transition-leave-to
    display: none;

  .image-viewer
    /*min-height: 500px*/
    /*height: 70vh*/

  .v-dialog:not(.v-dialog--fullscreen).v-dialog--active
    height: 70%;

  .v-dialog
    .v-carousel
      height 100%
  /*height initial*/
      /*height: auto*/

  .v-carousel
    height: 100%
    .btn-wrapper
      position absolute
      z-index 10
      top 0.5em
      right 0.5em
      .v-btn
        top 0 !important
        right 0 !important
    .v-jumbotron__image
      height 100%
      max-height 900px
      max-width 1600px
      min-width auto
      z-index 0
    .v-jumbotron__background
      z-index -1
      background rgba(30,30,30, 1)

    .xs-12 .v-carousel
      height auto
      max-width 100%

</style>
