<i18n>
  {

  "en": {

  "page-title": "The Swiss «Cause of Health» Cohort (Swiss COHCOH)",

  "faq-heading": "Frequently Asked Questions",
  "faq-1-question": "How is my data treated?",
  "faq-1-answer":"",
  "faq-2-question": "Do I get compensation?",
  "faq-2-answer":"",
  "faq-3-question": "What are my rights?",
  "faq-3-answer":"",
  "faq-4-question": "How is this project financed?",
  "faq-4-answer":"",
  "faq-5-question": "How can I get in touch with you?",
  "faq-5-answer":"",
  "faq-6-question": "What exercises do I have to do?",
  "faq-6-answer":"",

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
        <div class="row row-centered margin-bottom">

          <div class="col col-tablet-portrait-10 col-large-8 col-xlarge-6 scroll-effect">
            <h2 class="heading centered">{{ $t('faq-heading')}}</h2>
            <expandable>
              <template slot="header">{{ $t('faq-1-question') }}</template>
              <template slot="content">
                <p>
                  {{ $t('faq-1-answer') }}
                </p>
              </template>
            </expandable>
            <expandable>
              <template slot="header">{{ $t('faq-2-question') }}</template>
              <template slot="content">
                <p>
                  {{ $t('faq-2-answer') }}
                </p>
              </template>
            </expandable>
            <expandable>
              <template slot="header">{{ $t('faq-3-question') }}</template>
              <template slot="content">
                <p>
                  {{ $t('faq-3-answer') }}
                </p>
              </template>
            </expandable>
            <expandable>
              <template slot="header">{{ $t('faq-4-question') }}</template>
              <template slot="content">
                <p>
                  {{ $t('faq-4-answer') }}
                </p>
              </template>
            </expandable>
            <expandable>
              <template slot="header">{{ $t('faq-5-question') }}</template>
              <template slot="content">
                <p>
                  {{ $t('faq-5-answer') }}
                </p>
              </template>
            </expandable>
            <expandable>
              <template slot="header">{{ $t('faq-6-question') }}</template>
              <template slot="content">
                <p>
                  {{ $t('faq-6-answer') }}
                </p>
              </template>
            </expandable>
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
    import Expandable from "../components/shared/Expandable";

    export default {
        components: {
          Expandable,
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
