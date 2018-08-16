<template>
  <v-container fill-height class="mb-5 contact-pg">
    <v-layout justify-space-between wrap>
      <v-flex xs12 md7>
        <h2 class="headline mb-2" v-text="$t('Views.Contact.heading1')" />
        <p class="mb-4" v-text="$t('Views.Contact.headingText1')" />
        <v-card class="pa-4">
          <v-card-text>
            <v-text-field
              label="Name"
              prepend-icon="mdi-account"
            />
            <v-text-field
              label="Email"
              prepend-icon="mdi-email"
            />
            <v-textarea
              label="Message"
              prepend-icon="mdi-message-text"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn large class="px-5" color="primary">
              {{ $t('Views.Contact.submit') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex md4 xs12>
        <v-card class="pa-3">
          <v-flex row>
          <v-card-media lg3>
            <img
              src="/static/img/cert-weld-logo-ws-180w.png"
              alt="logo"
              class="my-3 px-3"
            />
          </v-card-media>
          <v-card-title class="headline">
            Contact us here
          </v-card-title>

          <v-card-text>
            <div v-text="'Phone: ' + contact.phone"></div>
            <div v-text="'Address: ' + contact.address"></div>
            <div v-text="'City: ' + contact.cityState"></div>
            <div v-text="'Post Code: ' + contact.zip"></div>
          </v-card-text>
          <v-card-title class="subheading">
            People
          </v-card-title>
          <v-card-text
            v-for="(person, i) in contact.people"
            :key="i"
          >
            <div v-text="'Name: ' + person.name"></div>
            <div v-text="'Title: ' + person.title"></div>
            <div v-text="'Phone: ' + person.mobile"></div>
            <div v-text="'Email: ' + person.email"></div>
          </v-card-text>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        contact: this.$t('Views.Contact')
      }
    },
    metaInfo: {
      title: 'Contact',
      meta: [
        { name: 'description', content: 'For general inquiries, get in touch with the the team at Certified Welding' }
      ]
    }
  }
</script>

<style lang="stylus" scoped>


  .contact-pg
    .v-card__media img
      width initial
      width auto
      height 50px
    /*.v-card__text*/
      /*padding 35px*/
      /*padding-right 53px*/
    /*.v-card__actions*/
      /*padding-bottom 35px*/
      /*padding-right 53px*/
</style>
