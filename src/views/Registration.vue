<i18n>
{

  "de": {


  },
  "en": {

  "page-title": "Take part",

  "registration-heading": "Take part",
  "registration-text": "Swiss CohCoh only works if it is carried by scientists and citizen scientists who see the need for such a digital health cohort and are willing to take the lead.",

  "registration-existing-account": "<b>Do you already have a citizenscience.ch account?</b>",
  "registration-create-account": "Create Your citizenscience.ch Account to Take Part"

  }

}
</i18n>

<template>
  <div>

    <app-content-section>
      <div class="content-wrapper">

        <div class="content-subsection">
          <div class="row row-centered">
            <div class="col col-large-6 scroll-effect">
              <h2 class="heading centered">{{ $t('registration-heading') }}</h2>

              <div class="login-reminder-box margin-bottom" v-if="user.isAnon">
                <p class="centered reduced-bottom-margin" v-html="$t('registration-existing-account')"></p>
                <div class="button-group centered">
                  <router-link tag="button" to="/login" class="button button-secondary button-secondary-naked">Login</router-link>
                </div>
              </div>

              <p v-html="$t('registration-text')"></p>

            </div>
          </div>
        </div>

        <div class="content-subsection">
          <div class="row row-centered">
            <div class="col col-large-8 scroll-effect">
              <h3 class="subheading centered">{{ $t('registration-create-account') }}</h3>
              <coh-coh-registration-form></coh-coh-registration-form>
            </div>
          </div>
        </div>

      </div>
    </app-content-section>

    <section-feedback email="hatespeech@citizenscience.ch" color="light-greyish"></section-feedback>

    <app-footer></app-footer>

  </div>
</template>

<script>

import {mapState} from 'vuex'

import ContentSection from '@/components/shared/ContentSection.vue';
import CohCohRegistrationForm from "@/components/CohCohRegistrationForm";
import Footer from '@/components/shared/Footer.vue';
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
import SectionFeedback from "../components/shared/SectionFeedback";

export default {
  components: {
      SectionFeedback,
      CohCohRegistrationForm,
      SectionNewsletterSignup,
    'app-content-section': ContentSection,
    'app-footer': Footer
  },
  metaInfo: function() {
      return {
          title: this.$t('page-title'),
          meta: [
              {
                  property: 'og:title',
                  content: this.$t('page-title'),
                  template: '%s | '+this.$t('site-title')
              }
          ]
      }
  },
  computed: {
      ...mapState({
          user: state => state.c3s.user
      })
  }
}

</script>

<style lang="scss">

  @import '@/styles/theme.scss';
  @import '@/styles/shared/variables.scss';

  .login-reminder-box {
    padding: $spacing-3;
    border: 1px solid $color-black-tint-90;
    border-radius: $border-radius;
  }

</style>
