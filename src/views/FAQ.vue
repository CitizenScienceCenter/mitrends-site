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
  "faq-6-answer":""



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
