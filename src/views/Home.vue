<i18n>
{

  "en": {

  "cover-heading": "Understanding<br>Multiple Sclerosis",
  "cover-subheading": "People-controlled data<br>for research on MS",
  "cover-button-primary": "Take Part",
  "cover-button-secondary": "Learn more",

  "study-heading": "What is this Study About?",
  "study-text-1": "Multiple Sclerosis (MS) is an inflammatory disease of the nervous system. In Switzerland, <a href='https://www.multiplesklerose.ch/de/ueber-ms/multiple-sklerose/vorkommen/' target='_blank'>around 15,000 people are affected</a>.",
  "study-text-2": "The purpose of MitrendS is to discover new information about symptoms and physical limitations in patients with multiple sclerosis. In the Citizen Science project, healthy people can help to collect comparative data by using a tablet app designed for this purpose.",
  "study-text-3": "By participating in this study, you will help to gain a deeper, more differentiated knowledge of the individual progression of the disease and symptoms of MS.",
  "study-button": "More About the Study",

  "take-part-heading": "Help us With Your Contribution",
  "take-part-text": "With your contribution, you power medical research! Three exercises will be performed:",
  "take-part-bullet-1": "The lines exercise",
  "take-part-bullet-2": "The points exercise",
  "take-part-bullet-3": "The symbols exercise",
  "take-part-button": "Take part",

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

    <app-cover imageUrl="/img/cover.jpg" goal="3" logoUrl="/img/logo-mitrends.svg">
      <div class="row row-centered">
        <div class="col col-large-8">
          <h2 class="cover-heading scroll-effect" v-html="$t('cover-heading')"></h2>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-6">
          <p class="cover-subheading scroll-effect scroll-effect-delayed-1" v-html="$t('cover-subheading')"></p>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-8">
          <div class="button-group centered scroll-effect scroll-effect-delayed-2">
            <router-link tag="button" to="/take-part" class="button button-primary">{{ $t('cover-button-primary') }}</router-link>
            <router-link tag="button" to="/about" class="button button-secondary button-secondary-inverted">{{ $t('cover-button-secondary') }}</router-link>
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
              <div>
                <img src="/img/image-tablet.png"/>
              </div>
            </div>
          </div>

          <div class="col col-large-5 col-large-before-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('take-part-heading') }}</h2>
              <p v-html="$t('take-part-text')" class="reduced-bottom-margin"></p>
              <ul>
                <li v-html="$t('take-part-bullet-1')" ></li>
                <li v-html="$t('take-part-bullet-2')" ></li>
                <li v-html="$t('take-part-bullet-3')" ></li>
              </ul>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/take-part" class="button button-primary">{{ $t('take-part-button') }}</router-link>
              </div>
            </div>
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

    <section-s-d-g goal="3" color="more-greyish">
      This project supports Goal 3 of the UN SDGs: Ensure healthy lives and promote well-being for all at all ages, by accelerating and innovating in health research and development.
    </section-s-d-g>


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
