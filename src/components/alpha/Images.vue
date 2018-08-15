<template>
  <div class="alpha-gallery">
    <v-dialog v-model="dialog" max-width="90%">
      <v-carousel
        height="80vh"
        :cycle="false"
        :hide-delimiters="true"
        :value="projectIndex">
        <v-carousel-item
          v-for="(pro, i) in computedProjects"
          v-if="dialog"
          :key="i"
          :src="`/static/img/${pro.img}`"
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
          xs12
          md6
          lg3
          v-for="(project, j) in computedProjects"
          :key="project.img"
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
            :img="`/static/img/${project.img}`"
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
  export default {
    name: 'alpha-gallery',

    data: () => ({
      category: null,
      dialog: false,
      project: false,
      projectIndex: 0
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
      }
    }
  }
</script>

<style>
  .gallery-card {
    transform-origin: center center 0;
    transition: .3s cubic-bezier(.25,.8,.50,1);
  }
  .v-tabs__bar {
    background-color: transparent !important;
  }
  .fade-transition-leave,
  .fade-transition-leave-active,
  .fade-transition-leave-to {
    display: none;
  }
  .v-carousel{
    height: 70vh;
  }
  .v-jumbotron__image{
    height: 100%;
    min-width: auto;
    z-index: 0;
  }
  .v-jumbotron__background{
    z-index: -1;
    background: rgba(30,30,30, 1);
  }
</style>
