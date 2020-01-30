<i18n>
  {

  "en": {

  "page-title": "The Swiss «Cause of Health» Cohort (Swiss COHCOH)"

  },
  "de": {

  }

  }
</i18n>

<template>
  <div>

    <app-content-section class="overflow-hidden">
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered">
            <div class="col col-tablet-portrait-10 col-large-6 col-wrapping">
              <div class="extra-padding">
                <img src="/img/graphic-cohcoh.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row row-wrapping">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-5 col-wrapping scroll-effect">
            <h2 class="heading centered left-aligned-large">{{ $t('cohcoh-heading') }}</h2>
            <p v-html="$t('cohcoh-text-1')"></p>
            <p v-html="$t('cohcoh-list-intro')" class="reduced-bottom-margin"></p>
            <ul>
              <li v-html="$t('cohcoh-list-item-1')"></li>
              <li v-html="$t('cohcoh-list-item-2')"></li>
              <li v-html="$t('cohcoh-list-item-3')"></li>
              <li v-html="$t('cohcoh-list-item-4')"></li>
              <li v-html="$t('cohcoh-list-item-5')"></li>
            </ul>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section class="overflow-hidden" color="light-greyish">
      <div class="background-wrapper background-wrapper-move-right scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered">
            <div class="col col-tablet-portrait-10 col-large-6 col-wrapping">
              <div class="extra-padding">
                <img src="/img/image-participate.jpg" style="border-radius: 50%" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row row-wrapping">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping scroll-effect">
            <h2 class="heading centered left-aligned-large">{{ $t('participate-heading') }}</h2>
            <p v-html="$t('participate-text')"></p>
            <div class="button-group centered left-aligned-large">
              <router-link tag="button" to="/registration" class="button button-primary">{{ $t('participate-button') }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>



    <app-content-section>
      <div class="content-wrapper">

        <div class="content-subsection">
          <div class="row row-centered">
            <div class="col col-large-6 scroll-effect">
              <h2 class="heading centered" id="projects">{{ $t('examples-heading') }}</h2>
              <p v-html="$t('examples-text')"></p>
            </div>
          </div>
        </div>

        <div class="content-subsection">
          <div class="row row-centered row-wrapping row-middle">

            <div class="col col-wrapping col-4 col-large-3 col-large-before-1 scroll-effect">
              <img src="/img/graphic-genetic-landscape.png" />
            </div>
            <div class="col col-wrapping col-large-6 col-large-after-2 scroll-effect">
              <h3 class="subheading centered left-aligned-large">{{ $t('example-1-heading') }}</h3>
              <p v-html="$t('example-1-text')"></p>
            </div>

            <div class="col col-wrapping col-4 col-large-3 col-large-before-1 scroll-effect">
              <img src="/img/graphic-nutrition.png" />
            </div>
            <div class="col col-wrapping col-large-6 col-large-after-2 scroll-effect">
              <h3 class="subheading centered left-aligned-large">{{ $t('example-2-heading') }}</h3>
              <p v-html="$t('example-2-text')"></p>
            </div>

            <div class="col col-wrapping col-4 col-large-3 col-large-before-1 scroll-effect">
              <img src="/img/graphic-activity.png" />
            </div>
            <div class="col col-wrapping col-large-6 col-large-after-2 scroll-effect">
              <h3 class="subheading centered left-aligned-large">{{ $t('example-3-heading') }}</h3>
              <p v-html="$t('example-3-text')"></p>
            </div>

          </div>
        </div>

        <div class="content-subsection">
          <div class="row row-centered">
            <div class="col col-large-6 scroll-effect">
              <p v-html="$t('examples-text-2')"></p>
            </div>
          </div>
        </div>

      </div>
    </app-content-section>

    <section-feedback email="cohcoh@citizenscience.ch" color="light-greyish"></section-feedback>

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
