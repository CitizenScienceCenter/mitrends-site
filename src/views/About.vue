<i18n>
  {

  "en": {

  "page-title": "About us",

  "team-heading": "Team",

  "bfh-subheading": "Institute for Medical Informatics I4MI",

  "eth-subheading-1": "Biomedical Informatics Lab",
  "eth-subheading-2": "Institute of Translational Medicine",
  "eth-subheading-3": "Institute of Molecular System Biology",

  "midata-subheading": "MIDATA Cooperative",

  "sdsc-subheading": "Swiss Data Science Center",

  "usz-subheading": "Neurology and MS Research (nims)",

  "sponsors-heading": "Sponsors",
  "sponsors-text": "The MitrendS app is provided by the MIDATA Cooperative. The following national initiatives have contributed to the development of the app:",
  "sponsors-bullet-1": "PHRT - <a href='https://www.sfa-phrt.ch/projects' target='_blank'>Personalized Health and Related Technologies</a>",
  "sponsors-bullet-2": "SDSC - <a href='https://datascience.ch/' target='_blank'>Swiss Data Science Center</a>",
  "sponsors-bullet-3": "<a href='https://www.multiplesclerosis.uzh.ch/en.html' target='_blank'>Clinical Research Program Multiple Sclerosis</a>"

  },
  "de": {

  "page-title": "Über uns",

  "team-heading": "Team",

  "bfh-subheading": "Institut für Medizininformatik I4MI",

  "eth-subheading-1": "Biomedical Informatics Lab",
  "eth-subheading-2": "Institute of Translational Medicine",
  "eth-subheading-3": "Institute of Molecular System Biology",

  "midata-subheading": "MIDATA Genossenschaft",

  "sdsc-subheading": "Swiss Data Science Center",

  "usz-subheading": "Neurology and MS Research (nims)",

  "sponsors-heading": "Sponsoren",
  "sponsors-text": "Die MitrendS-App wird von der MIDATA-Genossenschaft bereitgestellt. Die folgenden nationalen Initiativen haben zur Entwicklung der App beigetragen:",
  "sponsors-bullet-1": "PHRT - <a href='https://www.sfa-phrt.ch/projects' target='_blank'>Personalized Health and Related Technologies</a>",
  "sponsors-bullet-2": "SDSC - <a href='https://datascience.ch/' target='_blank'>Swiss Data Science Center</a>",
  "sponsors-bullet-3": "<a href='https://www.multiplesclerosis.uzh.ch/en.html' target='_blank'>Clinical Research Program Multiple Sclerosis</a>"

  }

  }
</i18n>

<template>

  <!--
  i18n before...

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
  "partners-button": "Our Partners",
  -->
  <div>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-reverse-large">

          <div class="col scroll-effect">
            <div>
              <div class="content-subsection">
                <h2 class="heading centered">{{ $t('team-heading') }}</h2>
              </div>

              <div class="content-subsection">
                <div class="row row-wrapping">
                  <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-before-3 col-large-3">
                    <div class="extra-padding-large-h">
                      <img src="/img/logo-bfh.png" />
                    </div>
                  </div>
                  <div class="col col-wrapping col-large-6">
                    <h3 v-html="$t('bfh-subheading')" class="subheading reduced-bottom-margin"></h3>
                    <ul class="reduced-bottom-margin">
                      <li>Prof. Serge Bignens</li>
                      <li>Olivier Descloux</li>
                      <li>Joshua Drewlow</li>
                      <li>Gabriel Hess</li>
                      <li>Stefan Iseli</li>
                      <li>Carole Kaiser</li>
                      <li>Alexander Kreutz</li>
                      <li>Daniel Lawniczak</li>
                      <li>Lea Meier</li>
                      <li>François von Kaenel</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="content-subsection">
                <div class="row row-wrapping">
                  <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-before-3 col-large-3">
                    <div class="extra-padding-large-h">
                      <img src="/img/logo-eth.png" />
                    </div>
                  </div>
                  <div class="col col-wrapping col-large-6">
                    <h3 v-html="$t('eth-subheading-1')" class="subheading reduced-bottom-margin"></h3>
                    <ul class="reduced-bottom-margin">
                      <li>Dr. sc. Martina Baumann</li>
                      <li>Prof. Cristóbal Esteban</li>
                      <li>Prof. Dr. Gunnar Rätsch</li>
                    </ul>
                    <h3 v-html="$t('eth-subheading-2')" class="subheading reduced-bottom-margin"></h3>
                    <ul class="reduced-bottom-margin">
                      <li>Dr. Felix Gille</li>
                      <li>Prof. Dr. Effy Vaneya</li>
                    </ul>
                    <h3 v-html="$t('eth-subheading-3')" class="subheading reduced-bottom-margin"></h3>
                    <ul class="reduced-bottom-margin">
                      <li>Prof. Dr. Ernst Hafen</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="content-subsection">
                <div class="row row-wrapping">
                  <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-before-3 col-large-3">
                    <div class="extra-padding-large-h">
                      <img src="/img/logo-midata.png" />
                    </div>
                  </div>
                  <div class="col col-wrapping col-large-6">
                    <h3 v-html="$t('midata-subheading')" class="subheading reduced-bottom-margin"></h3>
                    <ul class="reduced-bottom-margin">
                      <li>Stefano Napolitano</li>
                      <li>Dr. Dominik Steiger</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="content-subsection">
                <div class="row row-wrapping">
                  <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-before-3 col-large-3">
                    <div class="extra-padding-large-h">
                      <img src="/img/logo-sdsc.png" />
                    </div>
                  </div>
                  <div class="col col-wrapping col-large-6">
                    <h3 v-html="$t('sdsc-subheading')" class="subheading reduced-bottom-margin"></h3>
                    <ul class="reduced-bottom-margin">
                      <li>Dr. Fernando Perez Cruz</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="content-subsection">
                <div class="row row-wrapping">
                  <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-before-3 col-large-3">
                    <div class="extra-padding-large-h">
                      <img src="/img/logo-usz.png" />
                    </div>
                  </div>
                  <div class="col col-wrapping col-large-6">
                    <h3 v-html="$t('usz-subheading')" class="subheading reduced-bottom-margin"></h3>
                    <ul class="reduced-bottom-margin">
                      <li>Helen Hayward-Könnecke</li>
                      <li>Dr. med. Marc Hilty</li>
                      <li>Prof. Dr. med. Andreas Lutterotti</li>
                      <li>Prof. Dr. med. Roland Martin</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!--
              <div class="row row-wrapping">
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
                <div class="col col-wrapping col-large-6">
                  <h3 v-html="$t('sponsors-subheading')" class="subheading"></h3>
                  <p class="reduced-bottom-margin" v-html="$t('sponsors-text')"></p>
                  <ul>
                    <li v-html="$t('sponsors-bullet-1')" ></li>
                    <li v-html="$t('sponsors-bullet-2')" ></li>
                    <li v-html="$t('sponsors-bullet-3')" ></li>
                  </ul>
                </div>
              </div>
              -->

            </div>
          </div>

        </div>
      </div>
    </app-content-section>

    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered">

          <div class="col col-large-6 scroll-effect">
            <h2 class="heading centered">{{ $t('sponsors-heading') }}</h2>
            <p class="reduced-bottom-margin" v-html="$t('sponsors-text')"></p>
            <ul>
              <li v-html="$t('sponsors-bullet-1')" ></li>
              <li v-html="$t('sponsors-bullet-2')" ></li>
              <li v-html="$t('sponsors-bullet-3')" ></li>
            </ul>
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
