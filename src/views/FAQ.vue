<i18n>
  {

  "en": {

  "page-title": "The Swiss «Cause of Health» Cohort (Swiss COHCOH)",

  "faq-heading": "Frequently Asked Questions",
  "faq-1-question": "How is my data treated?",
  "faq-1-answer": "<p>All the data collected via the MitrendS app is encrypted and securely stored in your personal account on the MIDATA platform. With your consent, this data will be shared with our research team in anonymized form. This means that throughout the project your identity will always be protected.</p>",
  "faq-2-question": "What data is being collected/used?",
  "faq-2-answer": "<p>The data that we collect and use for this project include:</p><ul class='reduced-bottom-margin'><li>year of birth</li><li>gender</li><li>handedness (left or right)</li><li>level of education</li><li>presence of MS or neurological disease (yes/no)</li><li>regular medication intake (yes/no)</li><li>arm or hand disabilities (right/left/both sides/none)</li><li>results of the performed exercises (incl. completion time, execution speed, accuracy, number of attempts and error rates)</li></ul><p class='reduced-bottom-margin'>All the data will be shared anonymously. Further information <a href='https://ch.midata.coop/#/portal/terms/mitrends-cs-terms-of-use--1.0?lang=en' target='_blank'>here</a>.</p>",
  "faq-3-question": "What exercises do I have to do and what is my daily commitment?",
  "faq-3-answer": "<p>Currently, three exercises are implemented in MitrendS: The Lines exercise, the Points exercise and the Symbols exercise. In the Lines exercise, curved lines must be drawn one after the other with a pencil and both index fingers. In the Points exercise, three blue points are moved in three circles with thumb, index finger and middle finger. Both exercises serve to evaluate the motor function of hand and arm. All exercises can be performed by the patients at home. In addition, several questionnaires which have already been validated are stored in the app. Further exercises are currently being developed to expand the neurological examinations.</p>",
  "faq-4-question": "Do I get compensation?",
  "faq-4-answer": "<p class='reduced-bottom-margin'>You will not receive any compensation for participating in this study. You will receive an evaluation of your exercise results by email at the end of the study.</p>",
  "faq-5-question": "What are my rights?",
  "faq-5-answer": "<p>Your participation is on a voluntary basis. If you do not want to participate or later withdraw your participation, you do not have to justify this. All data collected up to the time of your withdrawal will be used anonymously in the evaluation. You may ask questions about participation and the project at any time. For further information, please contact: <a href='mailto:nims@usz.ch' target='_blank'>nims@usz.ch</a></p>",
  "faq-6-question": "How is this project financed?",
  "faq-6-answer": "<p>The project is funded by the <a href='https://www.multiplesclerosis.uzh.ch/en.html' target='_blank'>Clinical Research Program Multiple Sclerosis</a>, the <a href='https://www.sfa-phrt.ch/projects' target='_blank'>Personalized Health and Related Technologies</a> and the <a href='https://datascience.ch/' target='_blank'>Swiss Data Science Center</a>.</p>",
  "faq-7-question": "How can I get in touch with you?",
  "faq-7-answer": "<p>In case of any uncertainties or emergencies occurring during or after the project, you can always contact us on: <a href='mailto:nims@usz.ch' target='_blank'>nims@usz.ch</a></p>",
  "faq-8-question": "How long is the study?",
  "faq-8-answer": "<p>tbd</p>",
  "faq-9-question": "Will I discover if I have MS?",
  "faq-9-answer": "<p>tbd</p>",

  "contact-heading": "Contact us",
  "contact-text": "MIDATA Genossenschaft<br>c/o EvalueScience AG<br>Pfingstweidstrasse 16, 8005 Zürich<br>012 345 67 89",
  "contact-email": "nims@usz.ch"

  },
  "de": {

  }

  }
</i18n>

<template>
  <div>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered margin-bottom">

          <div class="col col-tablet-portrait-10 col-large-8 col-xlarge-6 scroll-effect">
            <h2 class="heading centered">{{ $t('faq-heading')}}</h2>
            <expandable>
              <template slot="header">{{ $t('faq-1-question') }}</template>
              <template slot="content">
                <div v-html="$t('faq-1-answer')"></div>
              </template>
            </expandable>
            <expandable>
              <template slot="header">{{ $t('faq-2-question') }}</template>
              <template slot="content">
                <div v-html="$t('faq-2-answer')"></div>
              </template>
            </expandable>
            <expandable>
              <template slot="header">{{ $t('faq-3-question') }}</template>
              <template slot="content">
                <div v-html="$t('faq-3-answer')"></div>
              </template>
            </expandable>
            <expandable>
              <template slot="header">{{ $t('faq-4-question') }}</template>
              <template slot="content">
                <div v-html="$t('faq-4-answer')"></div>
              </template>
            </expandable>
            <expandable>
              <template slot="header">{{ $t('faq-5-question') }}</template>
              <template slot="content">
                <div v-html="$t('faq-5-answer')"></div>
              </template>
            </expandable>
            <expandable>
              <template slot="header">{{ $t('faq-6-question') }}</template>
              <template slot="content">
                <div v-html="$t('faq-6-answer')"></div>
              </template>
            </expandable>
            <expandable>
              <template slot="header">{{ $t('faq-7-question') }}</template>
              <template slot="content">
                <div v-html="$t('faq-7-answer')"></div>
              </template>
            </expandable>
            <expandable>
              <template slot="header">{{ $t('faq-8-question') }}</template>
              <template slot="content">
                <div v-html="$t('faq-8-answer')"></div>
              </template>
            </expandable>
            <expandable>
              <template slot="header">{{ $t('faq-9-question') }}</template>
              <template slot="content">
                <div v-html="$t('faq-9-answer')"></div>
              </template>
            </expandable>
          </div>

        </div>
      </div>
    </app-content-section>

    <app-content-section color="greyish">
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-reverse-large">

          <div class="col col-large-5 scroll-effect">
            <div>
              <h2 class="heading centered">{{ $t('contact-heading') }}</h2>
              <p v-html="$t('contact-text')" class="centered reduced-bottom-margin"></p>
              <div class="button-group centered">
                <router-link tag="button" to="/take-part" class="button button-primary button-icon button-normal-case">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <path d="M502.3,190.8c3.9-3.1,9.7-0.2,9.7,4.7V400c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V195.6c0-5,5.7-7.8,9.7-4.7
                    c22.4,17.4,52.1,39.5,154.1,113.6c21.1,15.4,56.7,47.8,92.2,47.6c35.7,0.3,72-32.8,92.3-47.6C450.3,230.4,479.9,208.2,502.3,190.8z
                     M256,320c23.2,0.4,56.6-29.2,73.4-41.4c132.7-96.3,142.8-104.7,173.4-128.7c5.8-4.5,9.2-11.5,9.2-18.9v-19c0-26.5-21.5-48-48-48H48
                    C21.5,64,0,85.5,0,112v19c0,7.4,3.4,14.3,9.2,18.9c30.6,23.9,40.7,32.4,173.4,128.7C199.4,290.8,232.8,320.4,256,320L256,320z"/>
                  </svg>
                  {{ $t('contact-email') }}
                </router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>

    <app-footer></app-footer>

  </div>
</template>

<script>

    import {mapState} from 'vuex'

    import ContentSection from '@/components/shared/ContentSection.vue';
    import Footer from '@/components/shared/Footer.vue';
    import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
    import SectionFeedback from "../components/shared/SectionFeedback";
    import Expandable from "../components/shared/Expandable";

    export default {
        components: {
          Expandable,
            SectionFeedback,
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

</style>
