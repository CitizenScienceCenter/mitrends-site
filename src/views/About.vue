<i18n>
  {

  "en": {

  "page-title": "About",

  "ms-heading": "What is Multiple Sclerosis?",
  "ms-text": "Multiple Sclerosis (MS) is a chronic disease of the central nervous system. The protective and insulating cells of the nerves of the brain and spinal cord are attacked and destroyed by the body’s immune system. This results in an individual constellation of symptoms for each patient. The exact mechanisms that lead to MS are still being investigated. At the moment we know that it is a complex interaction of multiple sources. Infectious as well as genetic and environmental influences contribute to the development of the disease.  Although new drugs are able to stop the progression of the disease to a large extent, it involves slowing down the body’s immune system, which leads to side effects such as increased susceptibility to sickness.  A cure for MS does not yet exist. In addition to the development of targeted drugs, the development of new measurement methods for the more accurate recording of individual symptoms is also important. This is the goal of the MitrendS study.",

  "study-heading": "The Study",
  "study-text-1": "MitrendS is an app developed by physicians and IT specialists to specifically examine certain neurological symptoms, such as hand functions. MitrendS is used in a study in the <a href='http://nims-zh.ch/index.html' target='_blank'>Department of Neuroimmunology and MS Research (nims)</a> of the University Hospital Zurich.",
  "study-text-2": "The purpose of this study is to discover new information about symptoms and physical limitations in patients with Multiple Sclerosis (MS). Using a new tablet app developed for this purpose, regular exercises are carried out which offer a new method for recording and documenting progress. In the citizen science project, healthy people can help to collect comparative data by using a tablet app designed for this purpose.",
  "study-text-3": "The long term goal is to use the obtained data for a better and more precise record of individual disease progression and neurological deficits. Based on this data, individually adapted therapies and close monitoring of their effectiveness will be made possible in the future.",
  "study-text-4": "By participating in this citizen science project, you will help us to gain a deeper, more differentiated knowledge of the individual progression of the disease and symptoms of MS.",
  "study-text-5": "To learn more about the study, visit our website:",
  "study-button": "MitrendS.ch",

  "data-heading": "Data Usage",
  "data-text-1": "The data is stored on individual user accounts on the MIDATA platform. Thus, the data remains completely in the possession and under the control of the users. The non-profit MIDATA cooperative runs a platform which supports data-driven research through patient empowerment and citizen science approaches. The MIDATA platform provides a personal and secure environment to merge the data collected by various mobile applications (i.e., MitrendS) with health-related data from hospitals and physicians. This data is used for results evaluation and research. Users have complete control about data sharing. Any type of data sharing requires their consent.",
  "data-text-2": "For further information about MIDATA and its structure, visit:",
  "data-button": "midata.coop",

  "team-heading": "Team and Partners",
  "team-button": "MIDATA MitrendS Website",
  "coordination-subheading": "Coordination",
  "coordination-bullet-1": "Prof. Dr. Ernst Hafen, ETH Zürich, <a href='https://imsb.ethz.ch/research/hafen.html' target='_blank'>Institut für Molekulare Systembiologie</a>",
  "coordination-bullet-2": "Stefano Napolitano, <a href='https://www.midata.coop/organisation/' target='_blank'>MIDATA</a>",
  "multiplesclerosis-subheading": "Multiple Sclerosis",
  "multiplesclerosis-bullet-1": "Prof. Dr. med. Roland Martin, <a href='http://nims-zh.ch/index.html' target='_blank'>Neuroimmunology and MS Research Zürich</a>",
  "multiplesclerosis-bullet-2": "Prof. Dr. med. Andreas Lutterotti, <a href='http://nims-zh.ch/index.html' target='_blank'>Neuroimmunology and MS Research Zürich</a>",
  "multiplesclerosis-bullet-3": "Dr. Marc Hilty, <a href='http://nims-zh.ch/index.html' target='_blank'>Neuroimmunology and MS Research Zürich</a>",
  "mitrends-subheading": "MitrendS App",
  "mitrends-bullet-1": "Prof. Serge Bignens, <a href='https://www.bfh.ch/en/research/research-areas/institute-medical-informatics-i4mi/' target='_blank'>Institute for Medical Informatics I4MI</a>",
  "mitrends-bullet-2": "François von Kaenel, <a href='https://www.bfh.ch/en/research/research-areas/institute-medical-informatics-i4mi/' target='_blank'>Institute for Medical Informatics I4MI</a>",
  "mitrends-bullet-3": "Carole Kaiser, <a href='https://www.bfh.ch/en/research/research-areas/institute-medical-informatics-i4mi/' target='_blank'>Institute for Medical Informatics I4MI</a>",
  "analysis-subheading": "Data Analysis",
  "analysis-bullet-1": "Prof. Dr. Gunnar Rätsch, <a href='https://bmi.inf.ethz.ch/' target='_blank'>Biomedical Informatics Lab</a>",
  "analysis-bullet-2": "Dr. Cristóbal Esteban, <a href='https://bmi.inf.ethz.ch/' target='_blank'>Biomedical Informatics Lab</a>",
  "analysis-bullet-3": "Dr. Fernando Perez Cruz, <a href='https://datascience.ch/' target='_blank'>Swiss Data Science Center</a>",
  "ethics-subheading": "Ethics",
  "ethics-bullet-1": "Prof. Dr. Effy Vayena, Chair of <a href='https://bioethics.ethz.ch/' target='_blank'>Bioethics ETH Zurich</a>",
  "partners-subheading": "Partners",
  "partners-text": "Find a complete list of our partners on our website",
  "partners-button": "Our Partners"

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
            <div class="col col-tablet-portrait-10 col-large-5 col-large-after-1 col-wrapping">
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
            <div class="col col-tablet-portrait-10 col-large-5 col-large-before-1 col-wrapping">
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
            <p v-html="$t('study-text-1')"></p>
            <p v-html="$t('study-text-2')"></p>
            <p v-html="$t('study-text-3')"></p>
            <p v-html="$t('study-text-4')"></p>
            <p v-html="$t('study-text-5')"></p>
            <div class="margin-bottom">
              <div class="button-group centered left-aligned-large">
                <a href="https://mitrends.ch/" target="_blank" class="button button-primary button-icon button-normal-case">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                  {{ $t('study-button') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>


    <app-content-section class="overflow-hidden">
      <div class="background-wrapper background-wrapper-move-right scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered">
            <div class="col col-tablet-portrait-10 col-large-5 col-large-after-1 col-wrapping">
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
              <a href="https://midata.coop" target="_blank" class="button button-primary button-icon button-normal-case">
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

          <div class="col col-large-10 scroll-effect">
            <div>
              <h2 class="heading centered">{{ $t('team-heading') }}</h2>
              <div class="content-subsection">
                <div class="button-group centered">
                  <a href="https://midata.coop/offer/mitrends/" target="_blank" class="button button-primary button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                    {{ $t('team-button') }}
                  </a>
                </div>
              </div>
              <div class="row row-wrapping row-centered">
                <div class="col col-wrapping col-large-6">
                  <h3 v-html="$t('coordination-subheading')" class="subheading"></h3>
                  <ul>
                    <li v-html="$t('coordination-bullet-1')" ></li>
                    <li v-html="$t('coordination-bullet-2')" ></li>
                  </ul>
                </div>
                <div class="col col-wrapping col-large-6">
                  <h3 v-html="$t('multiplesclerosis-subheading')" class="subheading"></h3>
                  <ul>
                    <li v-html="$t('multiplesclerosis-bullet-1')" ></li>
                    <li v-html="$t('multiplesclerosis-bullet-2')" ></li>
                    <li v-html="$t('multiplesclerosis-bullet-3')" ></li>
                  </ul>
                </div>
                <div class="col col-wrapping col-large-6">
                  <h3 v-html="$t('mitrends-subheading')" class="subheading"></h3>
                  <ul>
                    <li v-html="$t('mitrends-bullet-1')" ></li>
                    <li v-html="$t('mitrends-bullet-2')" ></li>
                    <li v-html="$t('mitrends-bullet-3')" ></li>
                  </ul>
                </div>
                <div class="col col-wrapping col-large-6">
                  <h3 v-html="$t('analysis-subheading')" class="subheading"></h3>
                  <ul>
                    <li v-html="$t('analysis-bullet-1')" ></li>
                    <li v-html="$t('analysis-bullet-2')" ></li>
                    <li v-html="$t('analysis-bullet-3')" ></li>
                  </ul>
                </div>
                <div class="col col-wrapping col-large-6">
                  <h3 v-html="$t('ethics-subheading')" class="subheading"></h3>
                  <ul>
                    <li v-html="$t('ethics-bullet-1')" ></li>
                  </ul>
                </div>
                <div class="col col-wrapping col-large-6">
                  <h3 v-html="$t('partners-subheading')" class="subheading"></h3>
                  <p v-html="$t('partners-text')" class="reduced-bottom-margin"></p>
                  <div class="button-group">
                    <a href="https://mitrends.ch/#partners" target="_blank" class="button button-primary button-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                      {{ $t('partners-button') }}
                    </a>
                  </div>
                </div>
              </div>

            </div>
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
