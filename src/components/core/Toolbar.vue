<template>
  <v-toolbar
    app
    :dark="!isScrolling"
    flat
    dense
    :color="!isScrolling ? 'transparent' : '#fafafaba'"
    v-scroll="onScroll"
    class="pt-1 pb-1 z20"
  >
    <img
      class="toolbar-logo"
      src="/static/img/cert-weld-logo-ws-180w.png"
    />
    <v-spacer />
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(item, i) in items"
        :color="!isScrolling ? 'black--text' : undefined"
        :active-class="!isScrolling ? 'primary--text highlight' : 'primary--text a-highlight'"
        :key="i"
        :to="item.to"
        flat
      >
        <span v-text="item.text" />
      </v-btn>
    </v-toolbar-items>
    <v-btn v-else icon @click="toggleDrawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  // Utilities
  import { mapMutations } from 'vuex'

  export default {
    data: () => ({
      isScrolling: false
    }),

    computed: {
      items () {
        return this.$t('Layout.View.items')
      }
    },

    methods: {
      ...mapMutations('app', ['toggleDrawer']),
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > (this.$el.nextElementSibling.nextElementSibling.clientHeight - 100 || 100)
      }
    }
  }
</script>

<style lang="stylus">
  .z20
    z-index 20 !important
  .toolbar-logo
    height: 90%
  .highlight
    background rgba(246, 246, 246, 0.1)
  .a-highlight
    background rgba(100, 100, 100, 0.1)

</style>
