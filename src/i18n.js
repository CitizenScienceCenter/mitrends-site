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

          "site-title": "Cause of Health | Citizen Science Center Zurich",
          "site-description": "Be Part of a Revolutionary Digital Health Community.",

          'navigation-homepage': {
              'link': 'Home'
          },
          'navigation-registration': {
              'link': 'Take part'
          },
          'navigation-cause-of-health': {
              'link': 'Causes of Health'
          },
          'navigation-swiss-cohcoh': {
              'link': 'The Swiss COH Cohort'
          },
          'navigation-forum': {
              'link': 'Forum'
          },
          'navigation-terms': {
              'link': 'Privacy Policy & Terms of Use'
          },
          'navigation-login': {
              'link': 'Anmelden'
          },
          'navigation-register': {
              'link': 'Registrieren'
          },
          'navigation-logout': {
              'link': 'Logout'
          },
          'navigation-reset': {
              'link': 'Passwort zurücksetzen'
          },
          'navigation-profile': {
              'link': 'Profil'
          }

      },

      'de': {

          "site-title": "Cause of Health | Citizen Science Center Zurich",
          "site-description": "Be Part of a Revolutionary Digital Health Community.",

          'navigation-homepage': {
              'link': 'Home'
          },
          'navigation-registration': {
              'link': 'Mitmachen'
          },
          'navigation-cause-of-health': {
              'link': 'Der «Cause of Health»'
          },
          'navigation-swiss-cohcoh': {
              'link': 'Die Swiss COH Kohorte'
          },
          'navigation-forum': {
              'link': 'Forum'
          },
          'navigation-terms': {
              'link': 'Privacy Policy & Terms of Use'
          },
          'navigation-login': {
              'link': 'Anmelden'
          },
          'navigation-register': {
              'link': 'Registrieren'
          },
          'navigation-logout': {
              'link': 'Logout'
          },
          'navigation-reset': {
              'link': 'Passwort zurücksetzen'
          },
          'navigation-profile': {
              'link': 'Profil'
          }

      }
  }

})
