<i18n>
{

  "en": {

  "page-title": "Hate Speech | Citizen Science Center Zurich",

  "cover-heading": "Geschlechter- spezifische Hassausdrücke",
  "cover-subheading": "Identifizieren und klassifizieren anhand von Whatsapp Texten"

  },

  "de": {

  "page-title": "Hate Speech | Citizen Science Center Zürich",

  "cover-heading": "Geschlechter- spezifische Hassausdrücke",
  "cover-subheading": "Identifizieren und klassifizieren anhand von Whatsapp Texten"

  }

}
</i18n>

<template>
  <div>

    <app-cover imageUrl="/img/cover.jpg">
      <div class="row row-centered">
        <div class="col col-large-8">
          <h2 class="cover-heading scroll-effect" v-html="$t('cover-heading')"></h2>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-8">
          <p class="cover-subheading scroll-effect scroll-effect-delayed-1">{{ $t('cover-subheading') }}</p>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-8">
          <div class="button-group centered scroll-effect scroll-effect-delayed-2">
            <!--
            <button class="button button-primary" v-scroll-to="'#projects'">{{ $t('cover-button-projects') }}</button>
            <button class="button button-primary" v-scroll-to="'#start-project'">{{ $t('cover-button-your-project') }}</button>
            -->

          </div>
        </div>
      </div>
    </app-cover>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-large-10">
            <h2 class="heading centered" id="projects">{{ $t('section-projects-heading') }}</h2>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-footer></app-footer>

  </div>
</template>

<script>

import {mapState} from 'vuex'

import Cover from '@/components/shared/Cover.vue';
import ContentSection from '@/components/shared/ContentSection.vue';
import Footer from '@/components/shared/Footer.vue';


export default {
  name: 'Home',
  components: {
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-footer': Footer
  },
  metaInfo: function() {
      return {
          title: this.$t('page-title'),
          titleTemplate: null
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
