<i18n>
  {

  "en": {

  "page-title": "The Swiss «Cause of Health» Cohort (Swiss COHCOH)",

  "ms-heading": "What is Multiple Sclerosis?",
  "ms-text": "Multiple sclerosis (MS) is a chronic disease of the central nervous system. The protective and insulating cells of the nerves of the brain and spinal cord are attached and destroyed by the body’s own immune system. This results in an individual constellation of symptoms for each patient. The exact mechanisms that lead to MS are still being investigated. However it is a complex interplay of infectious, environmental and genetic influences. Although new drugs are able to stop the progression of the disease to a large extent, the body’s immune system is slowed down. A cure for MS does not yet exist. In addition to the development of targeted drugs, the development of new measuring methods for the more accurate recording of individual symptoms is also important. This is the goal of the MitrendS study.",

  "study-heading": "The Study",
  "study-button": "MitrendS Citizen Science Project",
  "study-text-1": "MitrendS is an app developed by physicians and IT specialists to specifically examine certain neurological symptoms, such as hand functions. MitrendS is used in a study in the <a href='http://nims-zh.ch/index.html' target='_blank'>Department of Neuroimmunology and MS Research (nims)</a> of the University Hospital Zurich.",
  "study-text-2": "The purpose of this study is to discover new information about symptoms and physical limitations in patients with multiple sclerosis (MS). Using a new tablet app developed for this purpose, regular exercises are carried out which offer a new method for recording and documenting progress. In the Citizen Science project, healthy people can help to collect comparative data by using a tablet app designed for this purpose.",
  "study-text-3": "The long term goal is to use the obtained data for a better and more precise record of the individual disease progression and neurological deficits. Based on this data, individually adapted therapies and close monitoring of their effectiveness will be made possible in the future.",
  "study-text-4": "By participating in this study, you will help us to gain a deeper, more differentiated knowledge of the individual progression of the disease and symptoms of MS.",
  "study-text-5": "If new findings become evident during the study, you will be informed by e-mail via the MIDATA platform.",

  "data-heading": "Data Usage",
  "data-text-1": "The data is stored on the corresponding user account of the MIDATA platform. Thus, the data remains completely in the possession and under the control of the user. The MIDATA cooperative is a completely independent platform and supports data-driven research through patient empowerment and “Citizen Science” approaches. The MIDATA platform provides a personal and secure environment to merge the data collected by MitrendS with health-related data from hospitals and physicians. This data is used for results evaluation and research. The user decides to whom the access to the data is granted. They can share their data anonymously in order to participate in appropriate studies or make it available to their attending physicians. In the case of MitrendS, the participants receive evaluations of the exercise performance directly via the MIDATA platform.",
  "data-text-2": "For further information about MIDATA and its structure visit:",
  "data-button": "MIDATA Website",

  "team-heading": "Team and Partners",
  "team-button": "MIDATA MitrendS Website",
  "coordination-subheading": "Coordination",
  "coordination-bullet-1": "Prof. Dr. Ernst Hafen, ETH Zürich, Institut für Molekulare Systembiologie",
  "coordination-bullet-2": "Stefano Napolitano, MIDATA",
  "partners-subheading": "Partners",
  "partners-text": "Find a complete list of our partners on our website",
  "partners-button": "Our Partners",

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

    <app-content-section class="overflow-hidden">
      <div class="background-wrapper background-wrapper-move-right scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered">
            <div class="col col-tablet-portrait-10 col-large-6 col-wrapping">
              <div class="extra-padding-h">
                <img src="/img/graphic-ms.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row row-wrapping">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping scroll-effect">
            <h2 class="heading centered left-aligned-large">{{ $t('ms-heading') }}</h2>
            <p v-html="$t('ms-text')"></p>
          </div>
        </div>
      </div>
    </app-content-section>


    <app-content-section class="overflow-hidden" color="light-greyish">
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered">
            <div class="col col-tablet-portrait-10 col-large-6 col-wrapping">
              <div class="">
                <img src="/img/graphic-study.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row row-wrapping">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-5 col-wrapping scroll-effect">
            <h2 class="heading centered left-aligned-large">{{ $t('study-heading') }}</h2>
            <div class="margin-bottom">
              <div class="button-group centered left-aligned-large">
                <a href="" target="_blank" class="button button-primary button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                  {{ $t('study-button') }}
                </a>
              </div>
            </div>
            <p v-html="$t('study-text-1')"></p>
            <p v-html="$t('study-text-2')"></p>
            <p v-html="$t('study-text-3')"></p>
            <p v-html="$t('study-text-4')"></p>
            <p v-html="$t('study-text-5')"></p>
          </div>
        </div>
      </div>
    </app-content-section>


    <app-content-section class="overflow-hidden">
      <div class="background-wrapper background-wrapper-move-right scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered">
            <div class="col col-tablet-portrait-10 col-large-6 col-wrapping">
              <div class="extra-padding-h">
                <img src="/img/graphic-midata.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row row-wrapping">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping scroll-effect">
            <h2 class="heading centered left-aligned-large">{{ $t('data-heading') }}</h2>
            <p v-html="$t('data-text-1')"></p>
            <p v-html="$t('data-text-2')"></p>
            <div class="button-group centered left-aligned-large">
              <a href="" target="_blank" class="button button-primary button-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                {{ $t('data-button') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-reverse-large">

          <div class="col col-large-5 scroll-effect">
            <div>
              <h2 class="heading centered">{{ $t('team-heading') }}</h2>
              <div class="margin-bottom">
                <div class="button-group centered">
                  <a href="" target="_blank" class="button button-primary button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                    {{ $t('team-button') }}
                  </a>
                </div>
              </div>
              <h3 v-html="$t('coordination-subheading')" class="subheading centered"></h3>
              <ul>
                <li v-html="$t('coordination-bullet-1')" ></li>
                <li v-html="$t('coordination-bullet-2')" ></li>
              </ul>
              <h3 v-html="$t('partners-subheading')" class="subheading centered"></h3>
              <p v-html="$t('partners-text')" class="centered"></p>
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
