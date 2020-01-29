<i18n>
{

  "en": {

  "cover-heading": "Understanding<br>Multiple Sclerosis",
  "cover-subheading": "Take Part in our Exercises",
  "cover-button-primary": "Take Part",
  "cover-button-secondary": "Learn more",

  "study-heading": "What is this Study About?",
  "study-text-1": "Multiple Sclerosis (MS) is an inflammatory disease of the nervous system. In Switzerland, <a href='https://www.multiplesklerose.ch/de/ueber-ms/multiple-sklerose/vorkommen/' target='_blank'>around 15,000 people are affected</a>.",
  "study-text-2": "The purpose of MitrendS is to discover new information about symptoms and physical limitations in patients with multiple sclerosis. In the Citizen Science project, healthy people can help to collect comparative data by using a tablet app designed for this purpose.",
  "study-text-3": "By participating in this study, you will help to gain a deeper, more differentiated knowledge of the individual progression of the disease and symptoms of MS.",
  "study-button": "More About the Study"


  },

  "de": {



  }

}
</i18n>

<template>
  <div>

    <app-cover imageUrl="/img/cover.jpg" goal="3" logoUrl="/img/logo-mitrends.svg">
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
              <img src="/img/graphic-study.png" />
            </div>
          </div>

          <div class="col col-large-5 col-large-after-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('study-heading') }}</h2>
              <p v-html="$t('study-text-1')" class="reduced-bottom-margin"></p>
              <p v-html="$t('study-text-2')" class="reduced-bottom-margin"></p>
              <p v-html="$t('study-text-3')" class="reduced-bottom-margin"></p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/about" class="button button-secondary">{{ $t('study-button') }}</router-link>
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
                <img src="/img/image-tablet.png"/>
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


    <section-feedback color="light-greyish" email="cohcoh@citizenscience.ch"></section-feedback>

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
