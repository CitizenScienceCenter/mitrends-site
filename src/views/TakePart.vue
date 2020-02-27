<i18n>
  {

  "en": {

  "page-title": "Take Part",

  "participating-heading": "Participating in the Study",
  "participating-text": "Who can participate?",
  "participating-bullet-1": "Age 18 years or older",
  "participating-bullet-2": "Swiss resident",
  "participating-bullet-3": "Own and be able to use an Android or Apple tablet",
  "participating-bullet-4": "Own a <a href='https://www.midata.coop/' target='_blank'>MIDATA</a> account or be willing to create one",
  "participating-bullet-5": "Agree to follow the study protocol",
  "participating-bullet-6": "Willing to share the data collected while using MitrendS in an anonymized form with the study team",
  "protocol-heading": "Study Protocol",
  "protocol-text": "You should make sure that you are able to participate in the study for a minimum period of 9 days. During that time, there will be exercises on five days. The exercises will take you approximately 5 minutes each day. In between, there is a four-day break with no exercises.",

  "app-heading": "Use the MitrendS App",
  "app-text": "The MitrendS Citizen Science app is a tablet app. It cannot be installed on smartphones. MitrendS was not designed as a smartphone app because the exercises require bigger screen sizes.",
  "app-text-2": "Download the MitrendS Citizen Science tablet app here:",

  "exercises-heading": "The Exercises",
  "exercises-text": "As part of the study, three exercises will be performed:",
  "exercises-bullet-1": "The lines exercise",
  "exercises-bullet-2": "The points exercise",
  "exercises-bullet-3": "The symbols exercise",
  "exercises-button": "About the Exercises",

  "procedure-heading": "Procedure",
  "procedure-1-title": "<b>Day 1</b>",
  "procedure-1-text": "Use your MIDATA credentials to log-in to the MitrendS Citizen Science app. In case you are new to MIDATA, you can register an account directly via the app. When you use the app for the first time, you need to accept the <a href='https://ch.midata.coop/#/portal/terms/mitrends-cs-terms-of-use--1.0?lang=en' target='_blank'>terms of use</a> of the app and consent to the use of your data in anonymized form in the study.",
  "procedure-1-bullet-1": "Fill in an initial questionnaire.",
  "procedure-1-bullet-2": "Perform the series of exercises.",
  "procedure-2-title": "<b>Day 2 and 3</b>",
  "procedure-2-bullet-1": "Perform the complete series of exercises (as many times as you want).",
  "procedure-3-title": "<b>Days 4 to 7</b>",
  "procedure-3-bullet-1": "Take a break, no exercises",
  "procedure-4-title": "<b>Day 8 and 9</b>",
  "procedure-4-bullet-1": "Perform the complete series of exercises at least once a day.",
  "procedure-subtext": "After that, there are no more scheduled exercises, but you are always free to do the exercises on your own. Your data will continue to be securely stored in your MIDATA account and will be shared anonymously with the study.",

  "benefits-heading": "Benefits",
  "benefits-text-1": "Your research participation will not bring you immediate personal benefits, however, in your MIDATA account you will find all the raw data collected during the exercises and some basic measurement of your results. You will have the chance to download and share those data through the MIDATA platform.",
  "benefits-text-2": "The results of the study may help to improve the understanding and targeted treatment of patients with Multiple Sclerosis in the future and are a step towards individualized medicine. We will keep you informed via email about new findings and relevant updates about the project.",
  "benefits-text-3": "<b>With your contribution, you power medical research. Thank you!</b>"

  },
  "de": {

  }

  }
</i18n>

<template>
  <div>


    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div class="extra-padding-h">
              <img src="/img/graphic-participate.png"/>
            </div>
          </div>

          <div class="col col-large-5 col-large-after-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('participating-heading') }}</h2>
              <p class="reduced-bottom-margin" v-html="$t('participating-text')"></p>
              <ul>
                <li v-html="$t('participating-bullet-1')"></li>
                <li v-html="$t('participating-bullet-2')"></li>
                <li v-html="$t('participating-bullet-3')"></li>
                <li v-html="$t('participating-bullet-4')"></li>
                <li v-html="$t('participating-bullet-5')"></li>
                <li v-html="$t('participating-bullet-6')"></li>
              </ul>
              <h3 class="subheading" v-html="$t('protocol-heading')"></h3>
              <p v-html="$t('protocol-text')"></p>
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
                <img src="/img/image-tablet-symbols.png"/>
              </div>
            </div>
          </div>

          <div class="col col-large-5 col-large-before-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('app-heading') }}</h2>
              <p v-html="$t('app-text')" class="reduced-bottom-margin"></p>
              <p v-html="$t('app-text-2')" class="reduced-bottom-margin"></p>
              <div class="button-group centered left-aligned-large">
                <a href="https://apps.apple.com/ch/app/mitrends-citizen-science/id1446748510?l=en" target="_blank" style="display: inline-block; height: 56px">
                  <img src="/img/app-store-button.png" style="height: 100%; margin: 8px" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=ch.bfh.i4mi.mitrends.citizenscience&hl=en" target="_blank" style="display: inline-block; height: 56px">
                  <img src="/img/play-store-button.png" style="height: 100%; margin: 8px" />
                </a>
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
              <img src="/img/graphic-exercises.png" />
            </div>
          </div>

          <div class="col col-large-5 col-large-after-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('exercises-heading') }}</h2>
              <p v-html="$t('exercises-text')"></p>
              <ul>
                <li v-html="$t('exercises-bullet-1')" ></li>
                <li v-html="$t('exercises-bullet-2')" ></li>
                <li v-html="$t('exercises-bullet-3')" ></li>
              </ul>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/exercises" class="button button-primary">{{ $t('exercises-button') }}</router-link>
              </div>
            </div>
          </div>

          <div class="col col-large-6 col-wrapping scroll-effect">
            <div>
              <h3 class="subheading centered">{{ $t('procedure-heading') }}</h3>
              <p v-html="$t('procedure-1-title')" class="reduced-bottom-margin"></p>
              <p v-html="$t('procedure-1-text')" class="reduced-bottom-margin"></p>
              <ul>
                <li v-html="$t('procedure-1-bullet-1')" ></li>
                <li v-html="$t('procedure-1-bullet-2')" ></li>
              </ul>
              <p v-html="$t('procedure-2-title')" class="reduced-bottom-margin"></p>
              <ul>
                <li v-html="$t('procedure-2-bullet-1')" ></li>
              </ul>
              <p v-html="$t('procedure-3-title')" class="reduced-bottom-margin"></p>
              <ul>
                <li v-html="$t('procedure-3-bullet-1')" ></li>
              </ul>
              <p v-html="$t('procedure-4-title')" class="reduced-bottom-margin"></p>
              <ul>
                <li v-html="$t('procedure-4-bullet-1')" ></li>
              </ul>
              <p v-html="$t('procedure-subtext')"></p>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section class="overflow-hidden" color="light-greyish">
      <div class="background-wrapper background-wrapper-move-right scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered">
            <div class="col col-tablet-portrait-10 col-large-6 col-wrapping">
              <div class="extra-padding-h">
                <img src="/img/graphic-benefit.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row row-wrapping">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping scroll-effect">
            <h2 class="heading centered left-aligned-large">{{ $t('benefits-heading') }}</h2>
            <p v-html="$t('benefits-text-1')"></p>
            <p v-html="$t('benefits-text-2')"></p>
            <p v-html="$t('benefits-text-3')"></p>
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
    import SectionContact from "../components/SectionContact";

    export default {
        components: {
          SectionContact,
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
