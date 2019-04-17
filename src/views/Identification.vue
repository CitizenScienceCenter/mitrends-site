<i18n>
{

  "en": {

  "page-title": "Identification"

  },

  "de": {

  "page-title": "Identifikation"

  }

}
</i18n>

<template>
  <div>

    <app-content-section class="identification">
      <div class="content-wrapper">

        <div class="margin-bottom">
          <div class="row row-wrapping">

            <div class="col col-large-6 col-wrapping scroll-effect">

              <h2 class="heading small centered left-aligned-large" id="projects">Schritt 1: Selektion</h2>
              <p>
                Selektieren Sie in dieser WhatsApp Nachricht jeweils einen geschlechtsspezifischen Hass-Ausdruck und fügen Sie ihn zur List hinzu.
              </p>

              <div class="speech-bubble reduced-bottom-margin" ref="bubble">
                wenn eine bitch bei mir liegt und sowieso nicht fickt, wird sie auf die strasse gesetzt wie pokerchips
              </div>

              <div class="reduced-bottom-margin">
                <div class="button-group right-aligned">
                  <button class="button button-primary" :disabled="!selection" @click="select">Hinzufügen</button>
                </div>
              </div>
              <div class="form-field form-field-block form-field-language-checkbox right-aligned">
                <div class="options">
                  <label>
                    <input type="checkbox">
                    <div class="checkbox">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                      </svg>
                    </div>
                    <span>Text ist nicht deutsch</span>
                  </label>
                </div>
              </div>

            </div>

            <div class="col col-large-6 col-wrapping scroll-effect scroll-effect-delayed-1">
              <h2 class="heading small centered left-aligned-large" id="projects">Schritt 2: Klassifikation</h2>
              <p>
                Bitte klassifizieren sie die ausgewählten Hass-Ausdrücke:
              </p>
              <template v-if="selections.length > 0">
                <div class="item" v-for="(selection, index) in selections" :key="'selection_'+index">
                  {{ selection }}
                </div>
              </template>
              <p v-else style="opacity: 0.25">
                Noch keine Ausdrücke hinzugefügt.
              </p>
            </div>

          </div>
        </div>

        <div class="row row-wrapping scroll-effect scroll-effect-delayed-2">
          <div class="col col-large-6 col-wrapping">
            <p class="small">
              Nachricht 1 von 302
            </p>
          </div>
          <div class="col col-large-6 col-wrapping">
            <div class="button-group right-aligned">
              <button class="button button-secondary button-secondary-naked" @click="openWizard">Anleitung</button>
              <button class="button button-secondary">Überspringen</button>
              <button class="button button-primary">Weiter</button>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered margin-bottom">

          <div class="col col-tablet-portrait-10 col-large-8 col-xlarge-6 scroll-effect">
            <h2 class="heading centered">Fragen & Antworten</h2>
            <expandable>
              <template slot="header">Wozu verpflichte ich mich?</template>
              <template slot="content">
                Wenn Sie uns helfen, geschlechtsspezifische Hass-Ausdrücke zu finden, verpflichten Sie sich grundsätzlich zu gar nichts. Ob Sie einen oder 1000 Ausdrücke suchen für uns, Sie helfen uns und wir sind dankbar.

                Eine kleine Verpflichtung mit Bezug auf den Datenschutz gehen Sie jedoch ein. Die Nachrichten, die wir Ihnen hier zeigen, sind echte Gespräche, die von einem Menschen an einen anderen gerichtet wurden. Wir haben uns zwar bemüht, alle Namen zu verändern und auch andere persönliche Daten zu entfernen. Trotzdem kann es sein, dass Sie anhand der gemachten Aussagen erkennen können, wer eine Nachricht geschrieben hat. Aus diesem Grund müssen Sie Sich dazu verpflichten, alle Informationen, die Sie aus unseren Nachrichten herauslesen können, vertraulich zu behandeln. Sie dürfen also nicht mit Drittpersonen über den Inhalt der Texte sprechen. Sollten Sie Personen, die Texte geschrieben haben oder an die Texte gerichtet sind oder über die in Texten geschrieben wird, in unseren Nachrichten erkennen, dürfen diese Personen nicht auf die Nachricht angesprochen werden.
              </template>
            </expandable>
            <expandable>
              <template slot="header">Was sind geschlechtsspezifische Hass-Ausdrücke?</template>
              <template slot="content">
                Geschlechtsspezifische Hass-Ausdrücke bezeichnen Ausdrücke die:

                sich auf Menschen beziehen.
                von Ihnen ohne den Zusammenhang zu beachten als negativ/beleidigend/verletzend/diskriminierend klassifiziert werden.
                einen Bezug zum Geschlecht oder der sexuellen Orientierung des Menschen haben.
                Beispiele können das klarmachen. Als geschlechtsspezifische Hass-Ausdrücke bezeichnen wir z.B.:

                Schwanz: Kann nur für einen Mann verwendet werden und ist ein geschlechtsspezifischer Körperteil.
                Weib: Ist despektierlich und kann nur für Frauen verwendet werden.
                Homo: Hat einen direkten Bezug zur sexuellen Orientierung.
                Nicht als geschlechtsspezifische Hass-Ausdrücke würden wir bezeichnen:

                Arschloch: Der Ausdruck bezeichnet zwar einen Körperteil, dieser ist aber allen Geschlechtern gleich.
                Idiot, Blödian, Sauhund: Dies sind alles Beschimpfungen, haben aber keinen Bezug zum Geschlecht oder der sexuellen Ausrichtung.
              </template>
            </expandable>
          </div>

        </div>
      </div>
    </app-content-section>

    <section-newsletter-signup></section-newsletter-signup>

    <app-footer></app-footer>

    <step-wizard ref="wizard"></step-wizard>

  </div>
</template>

<script>

import {mapState} from 'vuex'

import ContentSection from '@/components/shared/ContentSection.vue';
import Footer from '@/components/shared/Footer.vue';
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
import Expandable from "@/components/shared/Expandable";
import StepWizard from "@/components/shared/StepWizard";


export default {
  name: 'Home',
  components: {
      StepWizard,
      Expandable,
      SectionNewsletterSignup,
    'app-content-section': ContentSection,
    'app-footer': Footer
  },
  metaInfo: function() {
      return {
          title: this.$t('page-title')
      }
  },
  data() {
      return {
          selection: null,
          selections: []
      }
  },
  computed: {
      ...mapState({
          user: state => state.c3s.user
      })
    },
  mounted() {
      let self = this;
      document.addEventListener('selectionchange', function(event) {
         //console.log('selection change');
         //console.log( event.target );
          self.selection = window.getSelection().toString();
      });
  },
  methods: {
      select() {
        this.selections.push( { 'string':this.selection } );
        window.getSelection().removeAllRanges();
      },
      openWizard() {
          this.$refs.wizard.openWizard();
      }
  }
}

</script>

<style lang="scss">

  @import '@/styles/theme.scss';
  @import '@/styles/shared/variables.scss';

  * {
    user-select: none;
  }

  .speech-bubble {
    user-select: text;
    background-color: #DCF8C6;
    color: $color-primary;
    padding: $spacing-2;
    font-size: $font-size-medium;
    font-weight: 700;
    outline: none;

    &::selection {
      color: white;
      background-color: $color-primary;
    }

    &:active {
      color: $color-primary-shade-20;
    }
    @media (hover: hover) {
      &:hover {
        color: $color-primary-shade-20;
      }
    }
  }

  .form-field.form-field-language-checkbox {
    .options {
      display: inline-block;
      margin: 0;
    }
  }

</style>
