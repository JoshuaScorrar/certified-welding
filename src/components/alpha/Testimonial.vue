<template>
  <div
    v-scroll="testimonialScroll"
    class="alpha-testimonial"
    :class="[dark ? 'alpha-testimonial--dark' : '']"
  >
    <div class="alpha-testimonial__content">
      <v-icon
        x-large
        class="primary--text"
        :dark="dark"
      >format_quote</v-icon>
      <p v-text="quote" />
    </div>
    <footer>
      <div
        class="alpha-testimonial__footer-bar"
        :class="[dark ? 'white' : 'primary']"
      />
      <div class="headline" v-text="author" />
      <div class="title" v-text="title" />
    </footer>
  </div>
</template>

<script>
  /* eslint-disable no-undef */

  export default {
    props: {
      author: String,
      dark: Boolean,
      quote: String,
      title: String
    },
    methods: {
      testimonialScroll (e) {
        let el = this.$el
        let pos = el.getBoundingClientRect().top
        if (!this.showTestimonial && pos < (window.innerHeight / 1.1)) {
          this.showTestimonial = true
          TweenMax.fromTo(el, 1.7, {y: 70, autoAlpha: 0}, {y: 0, autoAlpha: 1})
        }
      }
    }
  }
</script>

<style lang="stylus">
  .alpha-testimonial
    visibility: hidden
    opacity 0
    &__content
      align-items: flex-start
      display: flex
      justify-content: space-between

    &__footer-bar
      height: 4px
      margin: 20px 0 20px auto
      width: 100px

    .v-icon
      justify-content: flex-end
      flex: 0 1 10%
      margin-top: -8px
      transform: rotate(180deg)

    p
      flex: 1 1 85%
      line-height: 2


    footer
      flex: 1 0 auto
      text-align: right

      .title
        font-weight: 300

    &--dark
      color: #fff
</style>
