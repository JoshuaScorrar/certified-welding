<template>
  <v-container fill-height class="mb-5 contact-pg">

    <v-layout justify-space-between wrap>

      <v-flex d-flex xs12 md8 class="pa-2">

        <v-card class="pa-4 translucent">
          <v-card-title v-text="contact.heading1" class="headline">

          </v-card-title>
          <v-card-title v-text="contact.headingText1" class="subheading">

          </v-card-title>
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
            <v-spacer/>
            <v-btn large class="px-5" color="primary">
              {{ contact.submit }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4 class="pa-2">
        <v-card class="pa-3 translucent">
          <v-flex>
            <v-card-media lg3>
              <img
                src="/static/img/cert-weld-logo-ws-180w.png"
                alt="logo"
                class="my-3 px-3"
              />
            </v-card-media>
            <v-card-title class="headline">
              Contact Details
            </v-card-title>

            <v-card-text>
              <v-layout justify-start row fill-height>
                <v-icon
                  sm
                >phone
                </v-icon>
                <p class="ml-2" v-text="contact.phone">
                </p>
              </v-layout>
              <v-layout justify-start row fill-height>
                <v-icon
                  sm
                >home
                </v-icon>
                <p class="ml-2" v-text="contact.address">
                </p>
              </v-layout>
            </v-card-text>
            <v-card-title class="subheading">
              People
            </v-card-title>
            <v-card-text
              v-for="(person, i) in contact.people"
              :key="i"
            >
              <v-layout justify-start row fill-height>
                <v-icon
                  sm
                >person_pin
                </v-icon>
                <p class="ml-2" v-text="person.name">
                </p>
              </v-layout>
              <v-layout justify-start row fill-height>
                <v-icon
                  sm
                >label
                </v-icon>
                <p class="ml-2" v-text="person.title">
                </p>
              </v-layout>
              <v-layout justify-start row fill-height>
                <v-icon
                  sm
                >phone
                </v-icon>
                <p class="ml-2" v-text="person.mobile">
                </p>
              </v-layout>
              <v-layout justify-start row fill-height>
                <v-icon
                  sm
                >email
                </v-icon>
                <p class="ml-2" v-text="person.email">
                </p>
              </v-layout>
            </v-card-text>
          </v-flex>

        </v-card>
      </v-flex>
      <v-flex xs12 md12 class="pa-2">
        <v-card class="pa-4 translucent">
        <GmapMap
          :center="contact.map.center"
          :zoom="17"
          map-type-id="terrain"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in contact.map.markers"
            title="Certified Welding"
            :position="contact.map.center"
            :clickable="true"
            :draggable="true"
          />
        </GmapMap>
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
        {name: 'description', content: 'For general inquiries, get in touch with the the team at Certified Welding'}
      ]
    }
  }
</script>

<style lang="stylus" scoped>

  .translucent
    background rgba(255, 255, 255, 0.35)

  .vue-map-container
    width 100%
    min-height 50vh


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
