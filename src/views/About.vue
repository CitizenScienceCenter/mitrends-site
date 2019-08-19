<i18n>
{

  "de": {

  "page-title": "Über das Projekt",

  "page-heading": "Über das Projekt",

  "paragraph-1": "In den letzten Jahren ist das Interesse an der Geschlechtergerechtigkeit und allen Arten von Belästigungen im Zusammenhang mit Geschlechterunterschieden gestiegen. Geschlechtsspezifische Beschimpfungen im öffentlichen Raum, insbesondere auf Medien wie Facebook oder Twitter, sind oft Themen in der Forschung und in der Presse. Doch wie wird dieses Thema im privaten Raum behandelt? Und gibt es Unterschiede zwischen Menschen, die Deutsch, Italienisch oder Französisch sprechen? Wie oft sind geschlechtsspezifische Beschimpfungen ernst gemeint und wie oft werden sie ironisch geäussert?",
  "paragraph-2": "Diesen und andern Fragen möchten wir in einem dreistufigen Projekt nachgehen. In einem ersten Schritt sollen in unseren WhatsApp Texten geschlechterspezifische Ausdrücke gefunden werden. Der zweite und dritte Schritt werden parallel erfolgen. Einerseits sollen die gefundenen Ausdrücke im Hinblick auf ihre tatsächliche Konnotation (also wie sie gemeint und wahrgenommen werden) bewertet werden. Parallel dazu werden die Ausdrücke in einem Projekt der <b><a href='https://alliancef.ch' target='_blank'>Alliance-F</a></b> verwendet, um Hass im Internet zu finden. Ziel dieses Projektes ist es, Citizen Scientists die Tools zur Verfügung zu stellen, um Hass zu finden und deeskalierend zu kontern.",

  "subheading-1": "Was wir bisher herausgefunden haben",
  "paragraph-3": "In einer ersten Vorstudie haben wir nach Ausdrücken gesucht, die uns selbst eingefallen sind, wir haben also nicht systematisch gesucht. Als Resultat konnten wir zeigen, dass geschlechtsspezifische Hass-Ausdrücke entgegen der Erwartung oft von Frauen verwendet werden, z.B. auch das Wort Bitch (oft nicht abwertend gemeint in freundschaftlichen Beziehungen). Andererseits sind Frauen in diesen untersuchten Daten zurückhaltend im Kommentieren der sexuellen Orientierung von Männern. Wie erwartet beziehen sich Hass-Ausdrücke oft auf die weibliche Anatomie. Wir konnten jedoch auch zeigen, dass die Hass-Ausdrücke eigentlich nie an den/die Gesprächspartner/in gerichtet sind. Sie sind also keine direkten Beleidigungen, sondern werden gebraucht, um über Dritte zu reden.",

  "subheading-2": "Warum wir Ihre Hilfe brauchen",
  "paragraph-4": "In unserer ersten kleinen Datensammlung waren die meisten Hass-Ausdrücke freundschaftlich gemeint, die wenigsten waren wirklich als Ausdruck des Hasses gebraucht. Diese bisher untersuchte Datenmenge ist aber nicht gross genug, um eine verbindliche Aussage machen zu können. Wir brauchen Ihre Hilfe, um letztendlich alle 750'000 Nachrichten auszuwerten. Natürlich sollen Sie nicht alle Messages lesen. Wir werden stattdessen die Hassausdrücke, die Sie in den ersten 1000 oder 2000 Messages finden, in der Gesamtmenge suchen und damit weiterarbeiten. Zur Klassifizierung der geschlechtsspezifischen Hass-Ausdrücke verwenden wir im Projekt die Kategorien “abwertend”, “klar nicht abwertend” und “unklar”. Die Beurteilung der geschlechtsspezifischen Hass-Ausdrücke in Bezug auf diese Kategorien ist anspruchsvoll, denn sie kann oft nicht innerhalb der einzelnen WhatsApp Nachricht entschieden werden, sondern erfordert auch die Lektüre der vorangehenden und der folgenden Nachricht(en). Nicht zuletzt deshalb ist es schwierig, diese Aufgabe zu automatisieren. Ein anderes Problem ist die Polysemie, also der Umstand, dass ein Wort verschiedene Bedeutungen haben kann. So wird z.B. das Wort figa im Italienischen als Bezeichnung für eine Frucht, aber auch für weibliche Körperteile verwendet. Auch hier haben Computer Schwierigkeiten, die Bedeutung dieser Wörter im Zusammenhang zu erkennen. Deshalb sind wir auf Ihre Mithilfe angewiesen.",
  "paragraph-5": "Die verwendeten Daten stammen aus dem Projekt Whats up, Switzerland? und wurden uns 2014 von der Schweizer Bevölkerung zur Verfügung gestellt. Die Daten wurden durch uns anonymisiert, d.h. alle Namen und sonstigen persönlichen Informationen wurden nach bestem Wissen und Gewissen entfernt, um die Identität der Daten-SpenderInnen zu schützen."

  }

}
</i18n>

<template>
  <div>

    <app-content-section class="overflow-hidden">
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-tablet-portrait-10 col-large-7 col-large-after-1 col-wrapping col-large-no-bottom-margin">
              <img src="/img/graphic-intro.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row row-reverse-large">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-after-1 col-wrapping scroll-effect">
            <h2 class="heading centered left-aligned-large">{{ $t('page-heading') }}</h2>
            <p v-html="$t('paragraph-1')"></p>
            <p v-html="$t('paragraph-2')"></p>
            <h3 class="subheading">{{ $t('subheading-1') }}</h3>
            <p v-html="$t('paragraph-3')"></p>
            <h3 class="subheading">{{ $t('subheading-2') }}</h3>
            <p v-html="$t('paragraph-4')"></p>
            <p v-html="$t('paragraph-5')"></p>
          </div>

        </div>
      </div>
    </app-content-section>

    <section-feedback email="hatespeech@citizenscience.ch"></section-feedback>

    <section-newsletter-signup></section-newsletter-signup>

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
  name: 'Home',
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
