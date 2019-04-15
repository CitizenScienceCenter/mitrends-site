<i18n>
  {
  "en": {
  "site-title": "Hate Speech | Citizen Science Center Zurich",
  "site-description": "The Snake Identification Challenge"
  },
  "de": {
  "site-title": "Hate Speech | Citizen Science Center Zurich",
  "site-description": "The Snake Identification Challenge"
  }
  }
</i18n>

<template>
  <div id="app">
    <app-header project-name="Hate<br/>Speech"></app-header>
    <div class="content-area">
      <router-view></router-view>
    </div>
    <g-d-p-r></g-d-p-r>
  </div>
</template>

<script>

import {mapState} from 'vuex';
import Header from './components/shared/Header.vue';
import GDPR from "./components/shared/GDPR";

export default {
  name: 'app',
  components: {
    'app-header': Header,
    GDPR
  },
  metaInfo: function() {
      return {
          // if no subcomponents specify a metaInfo.title, this title will be used
          title: '',
          // all titles will be injected into this template
          titleTemplate: '%s | '+this.$t('site-title'),
          meta: [
              {
                  name: 'description',
                  content: this.$t('site-description')
              },
              {
                  property: 'og:title',
                  content: this.$t('site-title')
              },
              {
                  property: 'og:description',
                  content: this.$t('site-description')
              },
              {
                  property: 'og:type',
                  content: 'website'
              },
              {
                  property: 'og:url',
                  content: 'https://snakes.citizenscience.ch'
              },
              {
                  property: 'og:image',
                  content: 'https://snakes.citizenscience.ch/img/promo.jpg'
              }
          ]
      }
  },
  computed: mapState({
      gdpr: state => state.gdpr.accepted
  }),
  mounted: function() {
      var app = this.$el;
      var cover = new Image();
      cover.onload = function() {
          app.classList.add("show");
      };
      cover.src = '/img/cover.jpg';
  }
}
</script>

<style lang="scss" src="@/styles/shared/main.scss"></style>

<style lang="scss">

  @import '@/styles/theme.scss';
  @import '@/styles/shared/variables.scss';

  #app {
    opacity: 0;
    transition: all $transition-duration-super-long $transition-timing-function;
    &.show {
      opacity: 1;
    }
  }
</style>
