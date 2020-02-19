import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from './store/store.js'

Vue.use(VueI18n);

var language;
if( !store.state.settings.language ) {
    // no language in store

    // check browser
    language = window.navigator.userLanguage || window.navigator.language;

    // trim
    language = language.substr(0,2);

    // check if not valid
    if( !store.state.consts.languages.includes( language ) ) {
        language = store.state.consts.languages[0];
    }

    // language for prerendering default routes
    if( navigator.userAgent === 'ReactSnap' ) {
        language = "en";
    }

    store.dispatch("settings/setLanguage", language );
}

export const i18n = new VueI18n({
  locale: store.state.settings.language,
  silentTranslationWarn: true,
  messages: {

      'en': {

          "site-title": "MitrendS Study | Citizen Science Center Zurich",
          "site-description": "People-controlled data for research on ms",

          'navigation-homepage': {
              'link': 'Home'
          },
          'navigation-take-part': {
              'link': 'Take part'
          },
          'navigation-exercises': {
              'link': 'Exercises'
          },
          'navigation-about': {
              'link': 'About us'
          },
          'navigation-faq': {
              'link': 'FAQ'
          },
          'navigation-terms': {
              'link': 'Privacy Policy & Terms of Use'
          }



      }

  }

})
