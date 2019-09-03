<i18n>
{

  "de": {

  "cover-heading": "Let's Discover<br/>the Cause of Health",
  "cover-subheading": "Be Part of a Revolutionary<br/>Digital Health Community.",
  "cover-button-primary": "Take Part",
  "cover-button-secondary": "Learn more",

  "intro-heading": "... The Cause of Health?",
  "intro-text-1": "In fact, we know very little! We know more about the causes of diseases than about the cause of health, as we mostly wait to turn ill before we start to record data.",
  "intro-text-2": "The health of an individual is determined by the “Health Triangle”, the complex interaction between a unique individual (genome), the environment, and the individual’s behaviour in the environment.",
  "intro-button": "Learn more",

  "identification-heading": "Ihre Hilfe ist gefragt",
  "identification-text": "Um unsere Ziele zu erreichen, bitten wir um Ihre Hilfe. In einem ersten Schritt (Identifikation) geht es darum, möglichst viele Texte anzuschauen und nach möglichen geschlechtsspezifischen Hassausdrücken zu suchen. Wenn uns möglichst viele Leute dabei helfen, sollte diese Suche einigermassen schnell zu Resultaten führen. Damit nicht alle 750'000 Botschaften gelesen werden müssen, werden wir danach die gefundenen Hassausdrücke auch in den noch nicht gelesenen Botschaften suchen. So sollten wir zu einer stattlichen Anzahl von Belegen kommen.",
  "identification-button": "Zur Identifikation",

  "sources-heading": "Woher stammen die Texte?",
  "sources-text": "Die WhatsApp Gespräche, die hier Verwendung finden, wurden uns 2014 von der Schweizer Bevölkerung zur Verfügung gestellt.",
  "sources-button": "Mehr erfahren"

  },
  "en": {

  "cover-heading": "Let's Discover the Cause of Health",
  "cover-subheading": "Be Part of a Revolutionary Digital Health Community.",
  "cover-button-primary": "Take Part",
  "cover-button-secondary": "Learn more",

  "intro-heading": "... The Cause of Health?",
  "intro-text-1": "In fact, we know very little! We know more about the causes of diseases than about the cause of health, as we mostly wait to turn ill before we start to record data.",
  "intro-text-2": "The health of an individual is determined by the “Health Triangle”, the complex interaction between a unique individual (genome), the environment, and the individual’s behaviour in the environment.",
  "intro-button": "Learn more",

  "identification-heading": "Ihre Hilfe ist gefragt",
  "identification-text": "Um unsere Ziele zu erreichen, bitten wir um Ihre Hilfe. In einem ersten Schritt (Identifikation) geht es darum, möglichst viele Texte anzuschauen und nach möglichen geschlechtsspezifischen Hassausdrücken zu suchen. Wenn uns möglichst viele Leute dabei helfen, sollte diese Suche einigermassen schnell zu Resultaten führen. Damit nicht alle 750'000 Botschaften gelesen werden müssen, werden wir danach die gefundenen Hassausdrücke auch in den noch nicht gelesenen Botschaften suchen. So sollten wir zu einer stattlichen Anzahl von Belegen kommen.",
  "identification-button": "Zur Identifikation",

  "sources-heading": "Woher stammen die Texte?",
  "sources-text": "Die WhatsApp Gespräche, die hier Verwendung finden, wurden uns 2014 von der Schweizer Bevölkerung zur Verfügung gestellt.",
  "sources-button": "Mehr erfahren"

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
              <h2 class="heading centered left-aligned-large">{{ $t('intro-heading') }}</h2>
              <p v-html="$t('intro-text-1')" class="reduced-bottom-margin"></p>
              <p v-html="$t('intro-text-2')" class="reduced-bottom-margin"></p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/cause-of-health" class="button button-secondary">{{ $t('intro-button') }}</router-link>
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
              <h2 class="heading centered left-aligned-large">{{ $t('identification-heading') }}</h2>
              <p v-html="$t('identification-text')"></p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/identification" class="button button-primary">{{ $t('identification-button') }}</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div class="extra-padding-h">
              <img src="/img/people-with-phones.jpg" style="border-radius:50%"/>
            </div>
          </div>

          <div class="col col-large-5 col-large-after-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('sources-heading') }}</h2>
              <p v-html="$t('sources-text')"></p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/sources" class="button button-secondary">{{ $t('sources-button') }}</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>

    <section-feedback color="light-greyish" email="causes-of-health@citizenscience.ch"></section-feedback>

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
