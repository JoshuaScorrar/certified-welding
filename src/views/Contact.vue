<template>
  <v-container fill-height class="max-view-width mb-5 contact-pg">

    <v-layout justify-space-between wrap>

      <v-flex d-flex xs12 md7 class="pa-2">
        <v-form ref="form" v-model="valid" method="post" lazy-validation netlify name="submitMessage">
          <v-text-field
            prepend-icon="account_box"
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="name"
            name="name"
            type="text"
            required
          ></v-text-field>
          <v-text-field
            prepend-icon="email"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            name="email"
            type="text"
            required
          ></v-text-field>

          <v-text-field
            prepend-icon="message"
            v-model="message"
            :rules="messageRules"
            label="Message"
            name="message"
            type="text"
            required
          ></v-text-field>


          <v-btn
            :disabled="!valid"
            @click="submit"
            type="submit"
          >
            submit
          </v-btn>
          <v-btn>clear</v-btn>
        </v-form>
        <v-card :class="$vuetify.breakpoint.smAndDown ? 'pa-1' : 'pa-4'" class="translucent">
          <v-card-title v-text="contact.heading1" class="headline">

          </v-card-title>
          <v-card-title v-text="contact.headingText1" class="subheading">

          </v-card-title>
          <v-card-title class="subheading">
            <span>If you'd like to find us, check out the map below.</span>
            <v-icon d-inline color="primary" sm class="ml-2 pointer hidden-xs-only" @click="goToMap">
              my_location
            </v-icon>
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="Name"
              prepend-icon="account_box"
            />
            <v-text-field
              label="Email"
              prepend-icon="email"
            />
            <v-textarea
              label="Message"
              prepend-icon="message"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn type="submit" large class="px-5" color="primary">
              {{ contact.submit }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md5 class="pa-2">
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
              <v-layout mb-2 justify-start align-center row>
                <v-icon
                  sm
                >phone
                </v-icon>
                <a class="ml-2 p-format" :href="'tel:' + contact.phone"  v-text="contact.phone">
                </a>
              </v-layout>
              <v-layout mb-2 justify-start align-center row>
                <v-icon
                  sm
                >home
                </v-icon>
                <p class="ml-2 p-format" v-text="contact.address">
                </p>
              </v-layout>
              <v-layout justify-start align-start row>
                <v-icon
                  sm
                >access_time
                </v-icon>
                <v-layout justify-start column>
                <p class="ml-2 p-format" v-text="contact.hours.weekday">
                </p>
                <p class="ml-2 p-format" v-text="contact.hours.weekend">
                </p>
                </v-layout>
              </v-layout>
            </v-card-text>
            <v-card-title class="subheading">
              People
            </v-card-title>
            <v-card-text
              v-for="(person, i) in contact.people"
              :key="i"
            >
              <v-layout mb-2 justify-start align-center row>
                <v-icon
                  sm
                >person_pin
                </v-icon>
                <p class="ml-2 p-format" v-text="person.name">
                </p>
              </v-layout>
              <v-layout mb-2 justify-start align-center row>
                <v-icon
                  sm
                >label
                </v-icon>
                <p class="ml-2 p-format" v-text="person.title">
                </p>
              </v-layout>
              <v-layout mb-2 justify-start align-center row>
                <v-icon
                  sm
                >smartphone
                </v-icon>
                <a
                  class="ml-2 p-format"
                  :href="'tel:' + person.mobile"
                  v-text="person.mobile">
                </a>
              </v-layout>
              <v-layout
                justify-start
                row
              >
                <v-icon
                  sm
                >email
                </v-icon>
                <a
                  class="ml-2 p-format"
                  :mailto="person.email"
                  v-text="person.email">
                </a>
              </v-layout>
            </v-card-text>
          </v-flex>

        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md12 class="pa-2" id="map">
        <v-card class="translucent">
        <GmapMap
          :center="contact.map.center"
          :zoom="13"
          map-type-id="terrain"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in contact.map.markers"
            title="Certified Welding"
            label="Certified Welding"
            streetViewControl="true"
            :position="contact.map.center"
            :clickable="true"
            :draggable="true"
          />
        </GmapMap>
        </v-card>
      </v-flex>
    </v-layout>
    <alpha-tag
      :icon="'phone'"
      :text="'Call us'"
      :value="'tel:' + contact.phone"
      :offset="'220px'"
    ></alpha-tag>
    <alpha-tag
      :icon="'email'"
      :text="'Email us'"
      :value="'mailto:' + contact.email"
    ></alpha-tag>
  </v-container>
</template>

<script>
  /* eslint-disable no-undef */

  import AlphaTag from '../components/alpha/Tag'
  export default {
    components: {AlphaTag},
    data () {
      return {
        contact: this.$t('Views.Contact'),
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        message: '',
        messageRules: [
          v => !!v || 'Message must be valid',
          v => (v && v.length >= 10) || 'Your message must be more than 10 characters'
        ],
        select: null
      }
    },
    methods: {
      goToMap (e) {
        let tar = document.getElementById('map')
        let pos = tar.getBoundingClientRect()
        TweenMax.to(window, 0.3, {scrollTo: {y: window.scrollY + pos.top - (pos.height / 2)}})
      },
      clear () {
        this.$refs.form.reset()
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
    background rgba(255, 255, 255, 0.8)

  .vue-map-container
    width 100%
    height 100%
    min-height 50vh

  .p-format
    margin-bottom: 0
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
