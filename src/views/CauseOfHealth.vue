<i18n>
  {

  "de": {

  "page-title": "The Cause of Health",

  "health-heading": "What is Health?",
  "health-text-1": "The UN World Health Organization notes in its <a href='' target='_blank'>constitution</a> that “Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity”. Health is hence much more than just a biomedical condition.",
  "health-subheading": "The «Cause of Health»",
  "health-text-2": "The Swiss Cause of Health Cohort initiative is built on the premise that an individual's health is determined by the Health Triangle, a complex interplay between a unique individual (genome), the environment, and the individual’s behaviour in the environment.",
  "health-text-3": "To understand this complexity we need standardized longitudinal sets of health data from millions of people. Such data sets form the basis of precision health or P4 (personalized, predictive, preventive and participatory) health.",

  "understanding-heading": "Understanding the «Cause of Health» with Citizen Science",
  "understanding-text-1": "Switzerland has a long tradition in classical health cohorts (CoLaus, Sapladia, AIDS, Swiss Transplant). However, these cohorts are small (< 10’000 participants) and solely based on examinations in hospitals, thus expensive to maintain.",
  "understanding-text-2": "The development of smartphone-based sensors, the increasing uptake of health related app and wearables, and the rapidly decreasing costs in genome sequencing, give hope for the establishment of much larger digital health cohorts (>100’000), that rely on the active participation of citizens (citizen science)."


  },
  "en": {

  "page-title": "The Cause of Health",

  "health-heading": "What is Health?",
  "health-text-1": "The UN World Health Organization notes in its <a href='' target='_blank'>constitution</a> that “Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity”. Health is hence much more than just a biomedical condition.",
  "health-subheading": "The «Cause of Health»",
  "health-text-2": "The Swiss Cause of Health Cohort initiative is built on the premise that an individual's health is determined by the Health Triangle, a complex interplay between a unique individual (genome), the environment, and the individual’s behaviour in the environment.",
  "health-text-3": "To understand this complexity we need standardized longitudinal sets of health data from millions of people. Such data sets form the basis of precision health or P4 (personalized, predictive, preventive and participatory) health.",

  "understanding-heading": "Understanding the «Cause of Health» with Citizen Science",
  "understanding-text-1": "Switzerland has a long tradition in classical health cohorts (CoLaus, Sapladia, AIDS, Swiss Transplant). However, these cohorts are small (< 10’000 participants) and solely based on examinations in hospitals, thus expensive to maintain.",
  "understanding-text-2": "The development of smartphone-based sensors, the increasing uptake of health related app and wearables, and the rapidly decreasing costs in genome sequencing, give hope for the establishment of much larger digital health cohorts (>100’000), that rely on the active participation of citizens (citizen science)."

  }

  }
</i18n>

<template>
  <div>

    <app-content-section class="overflow-hidden">
      <div class="background-wrapper background-wrapper-move-right scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered">
            <div class="col col-tablet-portrait-10 col-large-6 col-wrapping">
              <div class="extra-padding">
                <img src="/img/graphic-intro.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row row-wrapping">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping scroll-effect">
            <h2 class="heading centered left-aligned-large">{{ $t('health-heading') }}</h2>
            <p v-html="$t('health-text-1')"></p>
            <h2 class="subheading centered left-aligned-large">{{ $t('health-subheading') }}</h2>
            <p v-html="$t('health-text-2')"></p>
            <p v-html="$t('health-text-3')"></p>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section class="overflow-hidden" color="light-greyish">
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered">
            <div class="col col-tablet-portrait-10 col-large-6 col-wrapping">
              <div class="extra-padding">
                <img src="/img/graphic-data-sources.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row row-wrapping">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-5 col-wrapping scroll-effect">
            <h2 class="heading centered left-aligned-large">{{ $t('understanding-heading') }}</h2>
            <p v-html="$t('understanding-text-1')"></p>
            <p v-html="$t('understanding-text-2')"></p>
          </div>
        </div>
      </div>
    </app-content-section>

    <section-feedback email="causes-of-health@citizenscience.ch"></section-feedback>

    <app-footer></app-footer>

  </div>
</template>

<script>

    import {mapState} from 'vuex'

    import ContentSection from '@/components/shared/ContentSection.vue';
    import Footer from '@/components/shared/Footer.vue';
    import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
    import SectionFeedback from "../components/shared/SectionFeedback";

    export default {
        components: {
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
