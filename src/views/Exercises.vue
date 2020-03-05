<i18n>
  {

  "en": {

  "page-title": "Exercises",

  "lines-heading": "The Lines Exercise",
  "lines-text": "Place your index finger of your left or right hand on the START circle and follow the dotted line to the GOAL circle as quickly and exactly as possible. The evaluation of the exercise consists of both the speed and the accuracy with which you follow the line.<br>If you have a tablet pen (stylus or touchpen) and specify it when starting the app for the first time, you will regularly be asked to perform an iteration with the pen.",
  "lines-background-subheading": "Background",
  "lines-background-anatomy-title": "Anatomy",
  "lines-background-anatomy-text": "The movements of the hand are the result of a complex interaction of the processing of information. To make a movement, the following steps are performed: First, the information is recorded and then processed into an intended plan. Based on that, the necessary muscle groups are planned, and the movement is precisely coordinated. Finally, the movement performed is compared and verified with the intended target.",
  "lines-background-context-title": "Context",
  "lines-background-context-text": "The steps mentioned are required in this exercise. Different neurological problems can lead to a decrease in patients’ ability to follow the line. This allows to identify certain neurological problems.",

  "points-heading": "The Points Exercise",
  "points-text": "Place your thumb, index- and middle finger on the blue points. You must touch all three points simultaneously. When the three fingers are placed properly, the points will light up. Then, the three points have to be moved into the black circles. Once the blue points have correctly been placed in the circles, the blue points reappear on a different starting position and the exercise restarts. Repeat this procedure until 60 seconds are over.",
  "points-background-subheading": "Background",
  "points-background-text": "This exercise uses the most important fingers of the hand. The gripping movement requires targeted and individual movements of thumb, index- and middle finger.",

  "symbols-heading": "The Symbols Exercise",
  "symbols-text": "In this exercise, you can see a sequence of symbols which you have to assign to a corresponding number. If speech recognition is enabled, the number can be called out loud. Alternatively, the corresponding number can be selected by typing. The exercise takes a total of 90 seconds. The amount of correctly assigned numbers to the symbols is evaluated.",
  "symbols-background-subheading": "Background",
  "symbols-background-text": "This exercise is the digital development of a routine clinical examination which examines attention and concentration."


  },
  "de": {

  "page-title": "Übungen",

  "lines-heading": "Die Linien-Übung",
  "lines-text": "Setzen Sie den Zeigefinger der entsprechenden Hand in die Mitte des Start-Kreises auf und folgen Sie möglichst schnell und genau der gestrichelten Linie. Die Auswertung der Übung setzt sich sowohl aus der Geschwindigkeit als auch aus der Genauigkeit zusammen, mit der Sie der Linie folgen.<br>Falls Sie über einen Tablet Stift (auch Stylus oder Touchpen) verfügen und diesen beim erstmaligen Start der App angeben, werden Sie regelmässig gebeten, einen Durchlauf mit dem Stift durchzuführen.",
  "lines-background-subheading": "Hintergrund",
  "lines-background-anatomy-title": "Anatomie",
  "lines-background-anatomy-text": "Die Bewegungen der Hand erfolgen aus einer komplexen Verarbeitungsabfolge. Um eine Bewegung durchzuführen, werden folgende Schritte umgesetzt: Als erstes werden die Informationen aufgenommen und anschliessend zu einem gewünschten Ziel verarbeitet. Aufgrund dieses Ziels werden die nötigen Muskelgruppen geplant, woraufhin die Bewegung präzise koordiniert wird. Abschliessend wird die durchgeführte Bewegung mit dem gewünschten Ziel verglichen und überprüft.",
  "lines-background-context-title": "Zusammenhang",
  "lines-background-context-text": "Die erwähnten Schritte werden in dieser Übung gefordert. Unterschiedliche neurologische Probleme können zur Folge haben, dass bei Patienten die Fähigkeit abnimmt, der Linie zu folgen. So können von uns allfällige Rückschlüsse auf bestimmte Defizite gemacht werden.",

  "points-heading": "Die Punkte-Übung",
  "points-text": "Wählen Sie mit Ihrem Daumen, Zeige- und Mittelfinger die blauen Punkte an. Es müssen alle drei Punkte gleichzeitig berührt werden. Sind die Punkte korrekt ausgewählt, leuchten diese auf. Anschliessend müssen die drei Punkte in drei schwarze Ringe geschoben werden. Sobald die blauen Punkte korrekt in den Ringen abgelegt wurden, springen die Punkte auf eine veränderte Ausgangsposition zurück und die Übung beginnt von vorne. Der Vorgang soll oft wie möglich innerhalb von 60 Sekunden wiederholt werden.",
  "points-background-subheading": "Hintergrund",
  "points-background-text": "Bei der Punkte-Übung werden die wichtigsten Finger der Hände verwendet. So sind für die Greifbewegungen der Hand gezielte und individuelle Bewegungen des Daumens, des Zeige- und Mittelfingers nötig.",

  "symbols-heading": "Die Symbol-Übung",
  "symbols-text": "In dieser Übung sehen Sie eine Abfolge von Figuren, die Sie anhand der Legende einer Nummer zuordnen sollen. Die Nummer kann, insofern die Spracherkennung aktiviert ist, laut genannt werden. Alternativ kann die entsprechende Nummer durch Tippen gewählt werden. Die Übung dauert insgesamt 90 Sekunden. Die Anzahl an korrekt den Symbolen zugeordneten Zahlen wird ausgewertet.",
  "symbols-background-subheading": "Hintergrund",
  "symbols-background-text": "Bei dieser Übung handelt es sich um die digitale Weiterentwicklung einer klinischen Routineuntersuchung, welche die Aufmerksamkeit und Konzentration untersucht."

  }

  }
</i18n>

<template>
  <div>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-reverse-large row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div>
              <div>
                <img src="/img/image-tablet-lines.png"/>
              </div>
            </div>
          </div>

          <div class="col col-large-5 col-large-before-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('lines-heading') }}</h2>
              <p v-html="$t('lines-text')"></p>
              <h3 class="subheading" v-html="$t('lines-background-subheading')"></h3>
              <p class="reduced-bottom-margin"><b>{{ $t('lines-background-anatomy-title') }}</b></p>
              <p v-html="$t('lines-background-anatomy-text')" class="reduced-bottom-margin"></p>
              <p class="reduced-bottom-margin"><b>{{ $t('lines-background-context-title') }}</b></p>
              <p v-html="$t('lines-background-context-text')" class="reduced-bottom-margin"></p>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div class="extra-padding-h">
              <img src="/img/image-tablet-points.png"/>
            </div>
          </div>

          <div class="col col-large-5 col-large-after-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('points-heading') }}</h2>
              <p v-html="$t('points-text')"></p>
              <h3 class="subheading" v-html="$t('points-background-subheading')"></h3>
              <p class="reduced-bottom-margin">{{ $t('points-background-text') }}</p>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-reverse-large row-wrapping">

          <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
            <div>
              <div>
                <img src="/img/image-tablet-symbols.png"/>
              </div>
            </div>
          </div>

          <div class="col col-large-5 col-large-before-1 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('symbols-heading') }}</h2>
              <p v-html="$t('symbols-text')"></p>
              <h3 class="subheading" v-html="$t('symbols-background-subheading')"></h3>
              <p class="reduced-bottom-margin">{{ $t('symbols-background-text') }}</p>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>


    <section-contact></section-contact>

    <app-footer></app-footer>

  </div>
</template>

<script>

    import {mapState} from 'vuex'

    import ContentSection from '@/components/shared/ContentSection.vue';
    import Footer from '@/components/shared/Footer.vue';
    import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
    import SectionFeedback from "../components/shared/SectionFeedback";
    import SectionContact from "../components/SectionContact";

    export default {
        components: {
          SectionContact,
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
