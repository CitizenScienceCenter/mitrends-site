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
                Selektieren Sie in dieser WhatsApp Nachricht jeweils einen geschlechtsspezifischen Hass-Ausdruck und fügen Sie ihn zur List hinzu.<br>
                <span class="small"><a href="#" @click.prevent="openWizard">Hilfe anzeigen</a></span>
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
                    <span>
                      Text ist nicht deutsch
                      <inline-hover class="overlay-right-aligned">
                        <svg slot="display-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M504,256c0,137-111,248-248,248S8,393,8,256,119,8,256,8,504,119.08,504,256ZM262.65,90c-54.49,0-89.25,23-116.54,63.76A12,12,0,0,0,148.82,170l34.7,26.31a12,12,0,0,0,16.66-2.13c17.87-22.65,30.12-35.79,57.31-35.79,20.43,0,45.7,13.14,45.7,33,0,15-12.37,22.67-32.54,34C247.13,238.53,216,254.94,216,296v4a12,12,0,0,0,12,12h56a12,12,0,0,0,12-12v-1.33C296,270.2,379.19,269,379.19,192,379.19,134,319,90,262.65,90ZM256,338a46,46,0,1,0,46,46A46.05,46.05,0,0,0,256,338Z"/>
                        </svg>
                        <template slot="hover">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </template>
                      </inline-hover>
                    </span>
                  </label>
                </div>
              </div>

            </div>

            <div class="col col-large-6 col-wrapping scroll-effect scroll-effect-delayed-1">
              <h2 class="heading small centered left-aligned-large" id="projects">Schritt 2: Klassifikation</h2>
              <p>
                Bitte klassifizieren sie die ausgewählten Hass-Ausdrücke:
              </p>


              <p class="no-items" v-if="selections.length == 0" style="opacity: 0.25">
                Noch keine Ausdrücke hinzugefügt.
              </p>
              <transition-group name="item-fade" tag="div" class="items">
                <div class="item" v-for="(selection, index) in selections" :key="'selection_'+index">

                  <div class="string">{{ selection.string }}</div>

                  <button class="button button-secondary button-secondary-naked button-icon button-icon-only" @click="selections.splice(index,1)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M322.72,256,422.79,155.93a31.46,31.46,0,0,0,0-44.48L400.55,89.21a31.46,31.46,0,0,0-44.48,0L256,189.28,155.93,89.21a31.46,31.46,0,0,0-44.48,0L89.21,111.45a31.46,31.46,0,0,0,0,44.48L189.28,256,89.21,356.07a31.46,31.46,0,0,0,0,44.48l22.24,22.24a31.46,31.46,0,0,0,44.48,0L256,322.72,356.07,422.79a31.46,31.46,0,0,0,44.48,0l22.24-22.24a31.46,31.46,0,0,0,0-44.48Z"/>
                    </svg>
                  </button>

                  <div class="categories">

                    <div class="category">
                      <label>Wortherkunft</label>
                      <div class="form-field">
                        <div class="custom-select">
                          <!--
                          <select v-model="region" :class="{'placeholder':!region}">
                          -->
                          <select>
                            <option value="" disabled selected>Label</option>
                            <option value="north-america">Wert</option>
                          </select>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                          </svg>
                        </div>
                      </div>
                      <inline-hover class="overlay-right-aligned">
                        <svg slot="display-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M504,256c0,137-111,248-248,248S8,393,8,256,119,8,256,8,504,119.08,504,256ZM262.65,90c-54.49,0-89.25,23-116.54,63.76A12,12,0,0,0,148.82,170l34.7,26.31a12,12,0,0,0,16.66-2.13c17.87-22.65,30.12-35.79,57.31-35.79,20.43,0,45.7,13.14,45.7,33,0,15-12.37,22.67-32.54,34C247.13,238.53,216,254.94,216,296v4a12,12,0,0,0,12,12h56a12,12,0,0,0,12-12v-1.33C296,270.2,379.19,269,379.19,192,379.19,134,319,90,262.65,90ZM256,338a46,46,0,1,0,46,46A46.05,46.05,0,0,0,256,338Z"/>
                        </svg>
                        <template slot="hover">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </template>
                      </inline-hover>
                    </div>

                    <div class="category">
                      <label>Geschlecht <span class="regular">(Adressat/in)</span></label>
                      <div class="form-field">
                        <div class="custom-select">
                          <!--
                          <select v-model="region" :class="{'placeholder':!region}">
                          -->
                          <select>
                            <option value="" disabled selected>Label</option>
                            <option value="north-america">Wert</option>
                          </select>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                          </svg>
                        </div>
                      </div>
                      <inline-hover class="overlay-right-aligned">
                        <svg slot="display-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M504,256c0,137-111,248-248,248S8,393,8,256,119,8,256,8,504,119.08,504,256ZM262.65,90c-54.49,0-89.25,23-116.54,63.76A12,12,0,0,0,148.82,170l34.7,26.31a12,12,0,0,0,16.66-2.13c17.87-22.65,30.12-35.79,57.31-35.79,20.43,0,45.7,13.14,45.7,33,0,15-12.37,22.67-32.54,34C247.13,238.53,216,254.94,216,296v4a12,12,0,0,0,12,12h56a12,12,0,0,0,12-12v-1.33C296,270.2,379.19,269,379.19,192,379.19,134,319,90,262.65,90ZM256,338a46,46,0,1,0,46,46A46.05,46.05,0,0,0,256,338Z"/>
                        </svg>
                        <template slot="hover">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </template>
                      </inline-hover>
                    </div>

                    <div class="category">
                      <label>Sex. Ausrichtung <span class="regular">(Adressat/in)</span></label>
                      <div class="form-field">
                        <div class="custom-select">
                          <!--
                          <select v-model="region" :class="{'placeholder':!region}">
                          -->
                          <select>
                            <option value="" disabled selected>Label</option>
                            <option value="north-america">Wert</option>
                          </select>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                          </svg>
                        </div>
                      </div>
                      <inline-hover class="overlay-right-aligned">
                        <svg slot="display-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M504,256c0,137-111,248-248,248S8,393,8,256,119,8,256,8,504,119.08,504,256ZM262.65,90c-54.49,0-89.25,23-116.54,63.76A12,12,0,0,0,148.82,170l34.7,26.31a12,12,0,0,0,16.66-2.13c17.87-22.65,30.12-35.79,57.31-35.79,20.43,0,45.7,13.14,45.7,33,0,15-12.37,22.67-32.54,34C247.13,238.53,216,254.94,216,296v4a12,12,0,0,0,12,12h56a12,12,0,0,0,12-12v-1.33C296,270.2,379.19,269,379.19,192,379.19,134,319,90,262.65,90ZM256,338a46,46,0,1,0,46,46A46.05,46.05,0,0,0,256,338Z"/>
                        </svg>
                        <template slot="hover">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </template>
                      </inline-hover>
                    </div>

                  </div>
                </div>
              </transition-group>

            </div>

          </div>
        </div>

        <div class="row row-wrapping row-reverse-large scroll-effect scroll-effect-delayed-2">
          <div class="col col-large-6 col-wrapping">
            <div class="button-group right-aligned">
              <button class="button button-secondary">Überspringen</button>
              <button class="button button-primary">Weiter</button>
            </div>
          </div>
          <div class="col col-large-6 col-wrapping">
            <div class="progress">
              <div class="progress-bar">
                <div class="progress-bar-back">
                  <div class="progress-bar-fill" :style="{width:(100/265*100)+'%'}"></div>
                </div>
              </div>
              <div class="text">
                Nachricht 100 von 265
              </div>
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

    <step-wizard ref="wizard">

      <step-wizard-step>
        <template slot="title">Was sind geschlechtsspezifische Hass-Ausdrücke?</template>
        <content-section slot="content">
          <div class="content-wrapper">
            <div class="row row-wrapping">
              <div class="col col-large-6 col-wrapping">

                <div class="reduced-bottom-margin">
                  <img src="/img/graphic-gender.png" style="width:25%" />
                </div>

                <p class="reduced-bottom-margin">
                  Geschlechtsspezifische Hass-Ausdrücke bezeichnen Ausdrücke die:
                </p>
                <ul>
                  <li>sich auf Menschen beziehen.</li>
                  <li>von Ihnen ohne den Zusammenhang zu beachten als negativ / beleidigend / verletzend / diskriminierend klassifiziert werden.</li>
                  <li>einen Bezug zum Geschlecht oder der sexuellen Orientierung des Menschen haben.</li>
                </ul>

              </div>
              <div class="col col-large-6 col-wrapping">

                <p class="reduced-bottom-margin">
                  <b>Beispiele</b>
                </p>
                <p class="reduced-bottom-margin">
                  Geschlechterspezifisch:
                </p>
                <ul>
                  <li><b>Schwanz: </b>Kann nur für einen Mann verwendet werden.</li>
                  <li><b>Weib: </b>kann nur für Frauen verwendet werden.</li>
                  <li><b>Homo: </b>Direkten Bezug zur sexuellen Orientierung.</li>
                </ul>
                <p class="reduced-bottom-margin">
                  <b>Nicht</b> Geschlechterspezifisch:
                </p>
                <ul>
                  <li><b>Arschloch: </b>ist bei allen Geschlechtern gleich.</li>
                  <li><b>Idiot, Trottel, Sauhund: </b>keinen Bezug zum Geschlecht oder der sexuellen Ausrichtung.</li>
                </ul>

              </div>
            </div>
          </div>
        </content-section>
      </step-wizard-step>

      <step-wizard-step>
        <template slot="title">Selektion von Ausdrücken</template>
        <content-section slot="content">
          <div class="content-wrapper">
            <div class="row row-wrapping">
              <div class="col col-large-6 col-wrapping">
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
              </div>
              <div class="col col-large-6 col-wrapping">
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
                content 2<br/>
              </div>
            </div>
          </div>
        </content-section>
      </step-wizard-step>

      <step-wizard-step>
        <template slot="title">Kategorisierung</template>
        <content-section slot="content">
          <div class="content-wrapper">
            <div class="row row-wrapping">
              <div class="col col-large-6 col-wrapping">
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
              </div>
              <div class="col col-large-6 col-wrapping">
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
                content 3<br/>
              </div>
            </div>
          </div>
        </content-section>
      </step-wizard-step>

    </step-wizard>



  </div>
</template>

<script>

import {mapState} from 'vuex'

import Footer from '@/components/shared/Footer.vue';
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
import Expandable from "@/components/shared/Expandable";
import StepWizard from "@/components/shared/StepWizard";
import StepWizardStep from "@/components/shared/StepWizardStep";
import ContentSection from "@/components/shared/ContentSection";
import InlineHover from "@/components/shared/InlineHover";


export default {
  name: 'Home',
  components: {
      InlineHover,
      ContentSection,
      StepWizardStep,
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

<style lang="scss" scoped>

  @import '@/styles/theme.scss';
  @import '@/styles/shared/variables.scss';

  * {
    user-select: none;
  }

  .identification {

    .speech-bubble {
      user-select: text;
      background-color: #DCF8C6;
      color: $color-primary;
      padding: $spacing-1 $spacing-2;
      font-size: $font-size-medium;
      font-weight: 700;
      outline: none;
      position: relative;
      border-radius: $border-radius;
      border-top-left-radius: 0;

      //box-shadow: 0px 2px 8px -4px rgba($color-black, 1);
      filter: drop-shadow( 0px 2px 2px rgba($color-primary-shade-40, 0.4));

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: -16px;
        width: 0;
        height: 0;
        border-top: 16px solid $color-whatsapp-message;
        border-left:  16px solid transparent;
      }

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

    .item-fade-enter-active, .item-fade-leave-active {
      transition: all $transition-duration-long $transition-timing-function;
    }
    .item-fade-enter, .item-fade-leave-to {
      opacity: 0;
      transform: translateY( - $spacing-2 );
    }
    .no-items {
      position: absolute;
    }
    .item {

      border-radius: $border-radius;
      margin-bottom: $spacing-1;
      position: relative;
      box-shadow: 0px 2px 12px -4px rgba($color-black, 0.2);

      .string {
        font-weight: 700;
        color: $color-primary-shade-20;
        padding: calc( ( 40px - 1rem * 1.5 ) / 2 ) $spacing-2;
      }
      .button {
        position: absolute;
        top: 0;
        right: 0;
      }

      .categories {
        padding: $spacing-1;
        padding-top: 0;
        .category {
          background-color: white;
          display: flex;
          flex-direction: row;
          padding: $spacing-1;
          align-items: center;

          &:first-child {
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
          }
          &:last-child {
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
          }

          label {
            flex: 1;
            width: 50%;
          }
          .form-field {
            flex: 1;
            margin-bottom: 0;
          }
          .inline-hover {
            margin-left: $spacing-1;
          }
        }
      }
    }

    .progress {
      font-size: 0;
      text-align: center;
      .progress-bar {
        height: 40px;
        width: 48px;
        padding-top: calc( 40px / 2 - #{$spacing-1} / 2 );
        margin-right: $spacing-2;
        display: inline-block;
        .progress-bar-back {
          width: 100%;
          height: $spacing-1;
          border-radius: $border-radius;
          overflow: hidden;
          background-color: $color-secondary-tint-90;
          .progress-bar-fill {
            height: 100%;
            width: 50%;
            background-color: $color-secondary;
            transition: width $transition-duration-long $transition-timing-function;
          }
        }
      }
      .text {
        display: inline-block;
        line-height: 40px;
        font-size: $font-size-small;
      }
    }

  }

  @media only screen and (min-width: $viewport-tablet-portrait) {

    .identification {

      .speech-bubble {
        &:after {
          left: -24px;
          border-top-width: 24px;
          border-left-width: 24px;
        }
      }

      .item {
        .string {
          padding: calc( ( 48px - 1rem * 1.5 ) / 2 ) $spacing-2;
        }
      }

      .progress {
        .progress-bar {
          height: 48px;
          width: 64px;
          padding-top: calc( 48px / 2 - #{$spacing-1} / 2 );
          margin-right: $spacing-3;
        }
        .text {
          line-height: 48px;
        }
      }

    }

  }


  @media only screen and (min-width: $viewport-large) {

    .identification {

      .progress {
        text-align: left;
      }

    }

  }


</style>
