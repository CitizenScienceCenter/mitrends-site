<i18n>
{

  "en": {

  "cover-heading": "Understanding<br>Multiple Sclerosis",
  "cover-subheading": "Citizen-controlled data<br>for research on MS",
  "cover-button-primary": "Take Part",
  "cover-button-secondary": "About the Study",

  "study-heading": "What Is This Study About?",
  "study-text-1": "Multiple Sclerosis (MS) is an inflammatory disease of the nervous system. In Switzerland, <a href='https://www.multiplesklerose.ch/de/ueber-ms/multiple-sklerose/vorkommen/' target='_blank'>around 15,000 people are affected</a>.",
  "study-text-2": "The purpose of MitrendS is to discover new information about symptoms and physical limitations in patients with Multiple Sclerosis. In the citizen science part of the project, healthy people can participate and collect baseline and comparative data by using a tablet app designed for this purpose.",
  "study-text-3": "The MitrendS study will help researchers to gain a deeper, more differentiated knowledge of the individual progression of the disease and symptoms of MS.",
  "study-button": "About the Study",

  "take-part-heading": "Help Us With Your Contribution",
  "take-part-text": "With your contribution, you power medical research! Three exercises will be performed:",
  "take-part-bullet-1": "The lines exercise",
  "take-part-bullet-2": "The points exercise",
  "take-part-bullet-3": "The symbols exercise",
  "take-part-button": "Take part"

  },

  "de": {

  "cover-heading": "Multiple Sklerose<br>verstehen",
  "cover-subheading": "Bürger generieren Daten für<br>die MS-Forschung",
  "cover-button-primary": "Teilnehmen",
  "cover-button-secondary": "Über die Studie",

  "study-heading": "Ziel der Studie",
  "study-text-1": "Multiple Sklerose (MS) ist eine entzündliche Erkrankung des zentralen Nervensystems. In der Schweiz <a href='https://www.multiplesklerose.ch/de/ueber-ms/multiple-sklerose/vorkommen/' target='_blank'>sind rund 15'000 Personen betroffen</a>.",
  "study-text-2": "Ziel von MitrendS ist, neue Informationen über die Symptome und körperlichen Einschränkungen bei Patientinnen und Patienten mit MS zu entdecken. Durch die Teilnahme am Citizen Science Projekt können gesunde Personen bei der Erhebung von Vergleichsdaten mithelfen. Dies indem sie eine dafür entwickelte MitrendS Citizen Science Tablet-Applikation über eine bestimmte Zeit verwenden.",
  "study-text-3": "Durch Ihre Teilnahme an dieser Studie helfen Sie, ein tieferes, differenziertes Wissen über den individuellen Verkauf der Krankheit und die Symptome von MS zu erlangen.",
  "study-button": "Über die Studie",

  "take-part-heading": "Helfen Sie uns mit Ihrem Engagement",
  "take-part-text": "Mit Ihrem Beitrag unterstützen Sie die medizinische Forschung! Drei Übungen werden durchgeführt:",
  "take-part-bullet-1": "Die Linien-Übung",
  "take-part-bullet-2": "Die Punkte-Übung",
  "take-part-bullet-3": "Die Symbol-Übung",
  "take-part-button": "Teilnehmen"

  }

}
</i18n>

<template>
  <div>

    <app-cover imageUrl="/img/cover.jpg" goal="3" logoUrl="/img/logo-combo.png" logosMitrends>
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
            <!-- <router-link tag="button" to="/take-part" class="button button-primary">{{ $t('cover-button-primary') }}</router-link> -->
            <router-link tag="button" to="/study" class="button button-primary">{{ $t('cover-button-secondary') }}</router-link>
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
                <router-link tag="button" to="/study" class="button button-primary">{{ $t('study-button') }}</router-link>
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
              <!-- <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/take-part" class="button button-primary">{{ $t('take-part-button') }}</router-link>
              </div> -->
            </div>
          </div>

        </div>
      </div>
    </app-content-section>

    <section-contact></section-contact>

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
import SectionContact from "../components/SectionContact";


export default {
  name: 'Home',
  components: {
    SectionContact,
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
