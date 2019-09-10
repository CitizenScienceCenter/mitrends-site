<i18n>
{

  "de": {

  "page-title": "Take part",

  "registration-heading": "Take part",
  "registration-text": "Swiss CohCoh only works if it is carried by scientists and citizen scientists who see the need for such a digital health cohort and are willing to take the lead.",

  "existing-account": "<b>Do you already have a CitizenScience.ch account?</b>",
  "existing-account-button": "Login",

  "legal-heading": "Ethical and Legal Considerations",
  "legal-text": "Any scientific study involving human participants requires ethical approval from the cantonal ethics commission. Novel participatory studies such as the Swiss CohCoh require novel approaches to ethical oversight and ethical approach. This is in itself a research project running within the Swiss CohCoh.  The specific law on genetic analysis in humans (GUMG) that is currently in revision provides the boundary conditions for this project. Naturally, this project will also generate interesting legal scientific questions."


  },
  "en": {

  "page-title": "Take part",

  "registration-heading": "Take part",
  "registration-text": "Swiss CohCoh only works if it is carried by scientists and citizen scientists who see the need for such a digital health cohort and are willing to take the lead.",

  "existing-account": "<b>Do you already have a CitizenScience.ch account?</b>",
  "existing-account-button": "Login",

  "legal-heading": "Ethical and Legal Considerations",
  "legal-text": "Any scientific study involving human participants requires ethical approval from the cantonal ethics commission. Novel participatory studies such as the Swiss CohCoh require novel approaches to ethical oversight and ethical approach. This is in itself a research project running within the Swiss CohCoh.  The specific law on genetic analysis in humans (GUMG) that is currently in revision provides the boundary conditions for this project. Naturally, this project will also generate interesting legal scientific questions."

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
                <p class="centered reduced-bottom-margin" v-html="$t('existing-account')"></p>
                <div class="button-group centered">
                  <router-link tag="button" to="/login" class="button button-secondary button-secondary-naked">{{$t('existing-account-button')}}</router-link>
                </div>
              </div>

              <p v-html="$t('registration-text')"></p>

            </div>
          </div>
        </div>

        <div class="content-subsection">
          <div class="row row-centered">
            <div class="col col-large-8 scroll-effect">

              <coh-coh-registration-form></coh-coh-registration-form>

            </div>
          </div>
        </div>

      </div>
    </app-content-section>

    <app-content-section color="light-greyish">
      <div class="content-wrapper">

        <div class="row row-centered">
          <div class="col col-large-6 scroll-effect">
            <h2 class="heading centered">{{ $t('legal-heading') }}</h2>
            <p v-html="$t('legal-text')"></p>
          </div>
        </div>

      </div>
    </app-content-section>

    <section-feedback email="cause-of-health@citizenscience.ch"></section-feedback>

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
