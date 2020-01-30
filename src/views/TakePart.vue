<i18n>
  {

  "en": {

  "page-title": "The Cause of Health",

  "participating-heading": "Participating in the Study",
  "participating-text": "You can participate in this study, if you are over 18 years old and live in Switzerland. You should also be willing to follow the study protocol for the two-week period. In this period, you will do the exercises on five days, approximately xy minutes each day. In between there is a four-day break with no exercises.",

  "app-heading": "Use the MitrendS App",
  "app-text": "This is a tablet app, you can only use it with a tablet computer. The reason for that is that in order to do the exercises, you need a big enough screen. Mobile phones can therefore not be used.",
  "app-text-2": "Download the MitrendS tablet app here:",
  "app-button": "Download the App",

  "exercises-heading": "The Exercises",
  "exercises-text": "As part of the study, three exercises will be performed:",
  "exercises-bullet-1": "The lines exercise",
  "exercises-bullet-2": "The points exercise",
  "exercises-bullet-3": "The symbols exercise",

  "procedure-heading": "Procedure",
  "procedure-1-text": "<b>Day 1</b>",
  "procedure-1-bullet-1": "Register via MitrendS app. You hereby give your consent to MIDATA to evaluate your data.",
  "procedure-1-bullet-2": "Fill in an initial questionnaire.",
  "procedure-1-bullet-3": "Perform the series of exercises.",
  "procedure-2-text": "<b>Day 2 and 3</b>",
  "procedure-2-bullet-1": "Perform the complete series of exercises (as many times as you want).",
  "procedure-3-text": "<b>Days 4 to 7</b>",
  "procedure-3-bullet-1": "Take a break, no exercises",
  "procedure-4-text": "<b>Day 8 and 9</b>",
  "procedure-4-bullet-1": "Perform the complete series of exercises at least once a day.",
  "procedure-subtext": "After that there are no more scheduled exercises, but you are free to do the exercise on your own. Your data will continue to be stored in your MIDATA account and will be available for us for evaluation.",

  "benefits-heading": "Benefits",
  "benefits-text-1": "At the end of the study, after the inclusion of all test persons and the final evaluation, you will receive an evaluation of your hand function exercises in comparison to other participants via your MIDATA account.",
  "benefits-text-2": "The results of the study project may help to improve the understanding and targeted treatment of patients with multiple sclerosis in the future and to better understand the progression of the disease.",
  "benefits-text-3": "<b>With your contribution, you power medical research. Thank you!</b>",

  "contact-heading": "Contact us",
  "contact-text": "The Swiss «Causes of Health« Cohort (Swiss CohCoh)<br>ETH Zürich<br>Rämistrasse 101, 8092 Zürich<br>044 567 89 10",
  "contact-email": "email.address@ethz.ch"

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
            <div class="extra-padding-h-big">
              <img src="/img/graphic-calendar.png" />
            </div>
          </div>

          <div class="col col-large-5 col-large-after-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('participating-heading') }}</h2>
              <p v-html="$t('participating-text')"></p>
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
                <img src="/img/image-tablet-2.png"/>
              </div>
            </div>
          </div>

          <div class="col col-large-5 col-large-before-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('app-heading') }}</h2>
              <p v-html="$t('app-text')" class="reduced-bottom-margin"></p>
              <p v-html="$t('app-text-2')" class="reduced-bottom-margin"></p>
              <div class="button-group centered left-aligned-large">
                <a href="/take-part" target="_blank" class="button button-primary button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                  {{ $t('app-button') }}</a>
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
            </div>
          </div>

          <div class="col col-large-6 col-wrapping scroll-effect">
            <div>
              <h3 class="subheading centered">{{ $t('procedure-heading') }}</h3>
              <p v-html="$t('procedure-1-text')" class="reduced-bottom-margin"></p>
              <ul>
                <li v-html="$t('procedure-1-bullet-1')" ></li>
                <li v-html="$t('procedure-1-bullet-2')" ></li>
                <li v-html="$t('procedure-1-bullet-3')" ></li>
              </ul>
              <p v-html="$t('procedure-2-text')" class="reduced-bottom-margin"></p>
              <ul>
                <li v-html="$t('procedure-2-bullet-1')" ></li>
              </ul>
              <p v-html="$t('procedure-3-text')" class="reduced-bottom-margin"></p>
              <ul>
                <li v-html="$t('procedure-3-bullet-1')" ></li>
              </ul>
              <p v-html="$t('procedure-4-text')" class="reduced-bottom-margin"></p>
              <ul>
                <li v-html="$t('procedure-4-bullet-1')" ></li>
              </ul>
              <p v-html="$t('procedure-subtext')"></p>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>

    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-wrapping row-reverse-large">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div class="extra-padding-h-big">
              <img src="/img/graphic-benefit.png" />
            </div>
          </div>

          <div class="col col-large-5 col-large-before-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('benefits-heading') }}</h2>
              <p v-html="$t('benefits-text-1')"></p>
              <p v-html="$t('benefits-text-2')"></p>
              <p v-html="$t('benefits-text-3')"></p>
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
