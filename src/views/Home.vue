<i18n>
{

  "de": {

  "cover-heading": "Let's Discover <br/>the Cause of Health",
  "cover-subheading": "Be Part of a Revolutionary <br/>Digital Health Community",
  "cover-button-primary": "Take Part",
  "cover-button-secondary": "Learn more",

  "cause-of-health-heading": "What is the Cause of Health?",
  "cause-of-health-text-1": "In fact we do not know since medical research has mainly focused on curing disease. We mostly wait to turn ill before we start to collect data.",
  "cause-of-health-text-2": "Health and wellbeing are different in each individual and depends on the genome, the environment and behavior of each individual (Health Triangle). In order to understand the causes of health we need large sets of health-relevant data from a large number of people.",
  "cause-of-health-button": "Learn more",

  "cohcoh-heading": "The Swiss «Cause of Health» Cohort (CoHCo)",
  "cohcoh-text-1": "The “Swiss Cause of Health Cohort” is initiated by swiss scientists, who make their personal data available to pave the way for superior personalized medicine in Switzerland. A secure database with unique governance structure (non-profit citizen-controlled <a href='https://www.midata.coop' target='_blank'>MIDATA cooperative<a/>) allows individuals to control their own data.",
  "cohcoh-text-2": "The cohort is open for everyone to join, and scalable within Europe.",
  "cohcoh-button": "Learn more",

  "participate-heading": "Who can Participate?",
  "participate-text-1": "Researchers from the ETH Zurich and the University of Zurich recognized and promoted the concept of sharing personal data for research. They initiate and participate in the “Swiss Cause of Health Cohort”, and encourage everybody in Switzerland to do the same.",
  "participate-text-2": "Are you interested? Fill the form to be updated on the advancements of the CohCoh projects.",
  "participate-button": "Take part"

  },
  "en": {

  "cover-heading": "Let's Discover <br/>the Cause of Health",
  "cover-subheading": "Be Part of a Revolutionary <br/>Digital Health Community",
  "cover-button-primary": "Take Part",
  "cover-button-secondary": "Learn more",

  "cause-of-health-heading": "What is the Cause of Health?",
  "cause-of-health-text-1": "In fact we do not know since medical research has mainly focused on curing disease. We mostly wait to turn ill before we start to collect data.",
  "cause-of-health-text-2": "Health and wellbeing are different in each individual and depends on the genome, the environment and behavior of each individual (Health Triangle). In order to understand the causes of health we need large sets of health-relevant data from a large number of people.",
  "cause-of-health-button": "Learn more",

  "cohcoh-heading": "The Swiss «Cause of Health» Cohort (CoHCo)",
  "cohcoh-text-1": "The “Swiss Cause of Health Cohort” is initiated by swiss scientists, who make their personal data available to pave the way for superior personalized medicine in Switzerland. A secure database with unique governance structure (non-profit citizen-controlled <a href='https://www.midata.coop' target='_blank'>MIDATA cooperative</a>) allows individuals to control their own data.",
  "cohcoh-text-2": "The cohort is open for everyone to join, and scalable within Europe.",
  "cohcoh-button": "Learn more",

  "participate-heading": "Who can Participate?",
  "participate-text-1": "Researchers from the ETH Zurich and the University of Zurich recognized and promoted the concept of sharing personal data for research. They initiate and participate in the “Swiss Cause of Health Cohort”, and encourage everybody in Switzerland to do the same.",
  "participate-text-2": "Are you interested? Fill the form to be updated on the advancements of the CohCoh projects.",
  "participate-button": "Take part"

  }

}
</i18n>

<template>
  <div>

    <app-cover imageUrl="/img/cover.jpg" goal="3" logoUrl="/img/logo-midata.svg">
      <div class="row row-centered">
        <div class="col col-large-8">
          <h2 class="cover-heading scroll-effect" v-html="$t('cover-heading')"></h2>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-8">
          <p class="cover-subheading scroll-effect scroll-effect-delayed-1" v-html="$t('cover-subheading')"></p>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-8">
          <div class="button-group centered scroll-effect scroll-effect-delayed-2">
            <router-link tag="button" to="/registration" class="button button-primary">{{ $t('cover-button-primary') }}</router-link>
            <router-link tag="button" to="/cause-of-health" class="button button-secondary button-secondary-inverted">{{ $t('cover-button-secondary') }}</router-link>
          </div>
        </div>
      </div>
    </app-cover>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div class="extra-padding-h">
              <img src="/img/graphic-intro.png" />
            </div>
          </div>

          <div class="col col-large-5 col-large-after-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('cause-of-health-heading') }}</h2>
              <p v-html="$t('cause-of-health-text-1')" class="reduced-bottom-margin"></p>
              <p v-html="$t('cause-of-health-text-2')" class="reduced-bottom-margin"></p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/cause-of-health" class="button button-secondary">{{ $t('cause-of-health-button') }}</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-reverse-large row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div>
              <div class="extra-padding-large-h">
                <img src="/img/graphic-cohcoh.png"/>
              </div>
            </div>
          </div>

          <div class="col col-large-5 col-large-before-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('cohcoh-heading') }}</h2>
              <p v-html="$t('cohcoh-text-1')" class="reduced-bottom-margin"></p>
              <p v-html="$t('cohcoh-text-2')" class="reduced-bottom-margin"></p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/swiss-cohcoh" class="button button-secondary">{{ $t('cohcoh-button') }}</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>

    <!--
    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div class="extra-padding-h">
              <img src="/img/image-participate.jpg" style="border-radius:50%"/>
            </div>
          </div>

          <div class="col col-large-5 col-large-after-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('participate-heading') }}</h2>
              <p v-html="$t('participate-text-1')" class="reduced-bottom-margin"></p>
              <p v-html="$t('participate-text-2')" class="reduced-bottom-margin"></p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/registration" class="button button-primary">{{ $t('participate-button') }}</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>
    -->

    <app-content-section class="overflow-hidden">
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered">
            <div class="col col-tablet-portrait-10 col-large-6 col-wrapping">
              <div class="extra-padding">
                <img src="/img/image-participate.jpg" style="border-radius: 50%" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row row-wrapping">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-5 col-wrapping scroll-effect">
            <h2 class="heading centered left-aligned-large">{{ $t('participate-heading') }}</h2>
            <p v-html="$t('participate-text-1')" class="reduced-bottom-margin"></p>
            <p v-html="$t('participate-text-2')" class="reduced-bottom-margin"></p>
            <div class="button-group centered left-aligned-large">
              <router-link tag="button" to="/registration" class="button button-primary">{{ $t('participate-button') }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>


    <section-feedback color="light-greyish" email="cohco@citizenscience.ch"></section-feedback>

    <section-s-d-g goal="3" color="greyish">
      This project supports Goal 3 of the UN SDGs: Ensure healthy lives and promote well-being for all at all ages, by accelerating and innovating in health research and development.
    </section-s-d-g>

    <section-newsletter-signup></section-newsletter-signup>

    <app-footer></app-footer>

  </div>
</template>

<script>

import {mapState} from 'vuex'

import Cover from '@/components/shared/Cover.vue';
import ContentSection from '@/components/shared/ContentSection.vue';
import Footer from '@/components/shared/Footer.vue';
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
import SectionSDG from "../components/shared/SectionSDG";
import SectionFeedback from "../components/shared/SectionFeedback";


export default {
  name: 'Home',
  components: {
      SectionFeedback,
      SectionSDG,
      SectionNewsletterSignup,
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-footer': Footer
  },
  metaInfo: function() {
      return {
          title: this.$t('site-title'),
          titleTemplate: null,
          meta: [
              {
                  property: 'og:title',
                  content: this.$t('site-title')
              }
          ]
      }
  },
  computed: {
      ...mapState({
          //user: state => state.c3s.user
      })
  }
}

</script>

<style lang="scss">


</style>
