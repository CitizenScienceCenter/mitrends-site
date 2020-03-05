<i18n>
    {

    "en": {

    "contact-heading": "Contact us",
    "contact-text": "<b>Neuroimmunology and MS Research</b><br>Department of Neurology<br>University Hospital Zurich<br>Frauenklinikstrasse 26, 8091 Zürich",
    "contact-website": "nims-zh.ch",
    "contact-email": "nims@usz.ch"

    },

    "de": {

    "contact-heading": "Kontakt",
    "contact-text": "<b>Neuroimmunologie und MS Forschung (nims)</b><br>Klinik für Neurologie<br>Universitätsspital Zürich<br>Frauenklinikstrasse 26, 8091 Zürich",
    "contact-website": "nims-zh.ch",
    "contact-email": "nims@usz.ch"

    }

    }
</i18n>

<template>
    <app-content-section color="greyish">
        <div class="content-wrapper">
            <div class="row row-centered row-middle row-reverse-large">

                <div class="col col-large-5 scroll-effect">
                    <div>
                        <h2 class="heading centered">{{ $t('contact-heading') }}</h2>
                        <p v-html="$t('contact-text')" class="centered reduced-bottom-margin"></p>
                        <div class="button-group centered">
                            <a href="https://nims-zh.ch" target="_blank" class="button button-primary button-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                                {{ $t('contact-website') }}
                            </a>
                            <a href="mailto:nims@usz.ch" target="_blank" class="button button-primary button-icon">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <path d="M502.3,190.8c3.9-3.1,9.7-0.2,9.7,4.7V400c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V195.6c0-5,5.7-7.8,9.7-4.7
                    c22.4,17.4,52.1,39.5,154.1,113.6c21.1,15.4,56.7,47.8,92.2,47.6c35.7,0.3,72-32.8,92.3-47.6C450.3,230.4,479.9,208.2,502.3,190.8z
                     M256,320c23.2,0.4,56.6-29.2,73.4-41.4c132.7-96.3,142.8-104.7,173.4-128.7c5.8-4.5,9.2-11.5,9.2-18.9v-19c0-26.5-21.5-48-48-48H48
                    C21.5,64,0,85.5,0,112v19c0,7.4,3.4,14.3,9.2,18.9c30.6,23.9,40.7,32.4,173.4,128.7C199.4,290.8,232.8,320.4,256,320L256,320z"/>
                  </svg>
                                {{ $t('contact-email') }}
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </app-content-section>
</template>

<script>

    import ContentSection from '@/components/shared/ContentSection.vue';

    export default {
        name: "SectionContact",
        components: {
            'app-content-section': ContentSection
        }
    }
</script>

<style lang="scss">


</style>
