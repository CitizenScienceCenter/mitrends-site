<i18n>
  {

  "en": {

  "page-title": "FAQ",

  "faq-heading": "Frequently Asked Questions",
  "faq-1-question": "How is my data treated?",
  "faq-1-answer": "<p>All the data collected via the MitrendS Citizen Science app is encrypted and securely stored in your personal account on the MIDATA platform. With your consent, this data will be shared with the study in anonymized form. This means that throughout the project, your identity will always be protected.</p>",
  "faq-2-question": "What data is being collected/used?",
  "faq-2-answer": "<p class='reduced-bottom-margin'>The data that we collect and use for this project include:</p><ul class='reduced-bottom-margin'><li>year of birth</li><li>gender</li><li>handedness (left or right)</li><li>level of education</li><li>presence of MS or neurological disease (yes/no)</li><li>regular medication intake (yes/no)</li><li>arm or hand disabilities (right/left/both sides/none)</li><li>results of the performed exercises (incl. completion time, execution speed, accuracy, number of attempts and error rates)</li></ul><p class='reduced-bottom-margin'>All the data will be shared anonymously.</p>",
  "faq-3-question": "Can I see my data?",
  "faq-3-answer": "<p>All your data is securely stored in your MIDATA account.<br>There you can find all the raw data collected each time you have performed an exercise on MitrendS Citizen Science. You can access your account anytime via <a href='https://ch.midata.coop/' target='_blank'>midata.coop</a>.</p>",
  "faq-4-question": "What exercises do I have to do and what is my daily commitment?",
  "faq-4-answer": "<p>Currently, three exercises are implemented in MitrendS: The Lines exercise, the Points exercise and the Symbols exercise. In the Lines exercise, curved lines must be drawn one after the other with a pencil and both index fingers. In the Points exercise, three blue points are moved in three circles with thumb, index finger and middle finger. Both exercises serve to evaluate the motor function of hand and arm. All exercises can be performed by the citizens at home. In addition, several questionnaires which have already been validated are stored in the app. Further exercises are currently being developed to expand the neurological examinations. The daily commitment is approximately 5 minutes, except for the first day: On that day it takes longer due to registration and test runs (approximately 15 minutes).</p>",
  "faq-5-question": "Do I get compensation?",
  "faq-5-answer": "<p>You will not receive any compensation for participating in this study. You will receive an evaluation of your exercise results by email at the end of the study.</p>",
  "faq-6-question": "What are my rights?",
  "faq-6-answer": "<p>Your participation is on a voluntary basis. If you do not want to participate or later withdraw your participation, you do not have to justify this. All data collected up to the time of your withdrawal will be used anonymously in the evaluation. You may ask questions about participation and the project at any time. For further information, please contact: <a href='mailto:nims@usz.ch' target='_blank'>nims@usz.ch</a></p>",
  "faq-7-question": "How is this project financed?",
  "faq-7-answer": "<p>The app is provided by MIDATA Cooperative and it is part of a research project funded by the <a href='https://www.multiplesclerosis.uzh.ch/en.html' target='_blank'>Clinical Research Program Multiple Sclerosis</a>, the <a href='https://www.sfa-phrt.ch/projects' target='_blank'>Personalized Health and Related Technologies</a> and the <a href='https://datascience.ch/' target='_blank'>Swiss Data Science Center</a>.<br>The project has also received an ethical approval from the Cantonal Ethics Committee Zurich (BASEC-Nr: 2019-01402).</p>",
  "faq-8-question": "How can I get in touch with you?",
  "faq-8-answer": "<p>In case of any uncertainties or emergencies occurring during or after the project, you can always contact us on: <a href='mailto:nims@usz.ch' target='_blank'>nims@usz.ch</a></p>",
  "faq-9-question": "How long is the study?",
  "faq-9-answer": "<p>The study is scheduled to last two years. During this time you have the opportunity to participate for two weeks.</p>",
  "faq-10-question": "Will I discover if I have MS?",
  "faq-10-answer": "<p>This app cannot tell you if you suffer from Multiple Sclerosis. It was developed as an aid for people who are already ill and is used to monitor their progress.</p>"

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
            <expandable>
              <template slot="header">{{ $t('faq-10-question') }}</template>
              <template slot="content">
                <div v-html="$t('faq-10-answer')"></div>
              </template>
            </expandable>
          </div>

        </div>
      </div>
    </app-content-section>

    <section-contact></section-contact>

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
    import SectionContact from "../components/SectionContact";

    export default {
        components: {
          SectionContact,
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
