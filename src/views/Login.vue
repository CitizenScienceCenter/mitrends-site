<i18n>
  {

  "en": {

  "page-title": "Login / Register",

  "heading-login": "Login",
  "login-text": "Please Login with your existing <i>CitizenScience.ch</i> Account:"

  },

  "de": {

  "page-title": "Anmelden / Registrieren",

  "heading-login": "Anmelden",
  "login-text": "Please Login with your existing <i>CitizenScience.ch</i> Account:"

  }

  }
</i18n>

<template>
  <div>
    <app-content-section>
      <div class="content-wrapper">

        <div class="row row-centered">

          <div class="col col-tablet-portrait-10 col-large-5 col-xlarge-4">
            <h2 class="heading">{{ $t('heading-login') }}</h2>
            <p v-html="$t('login-text')"></p>
            <login-form></login-form>
          </div>

        </div>

      </div>
    </app-content-section>

    <app-footer :platform="platform"></app-footer>

  </div>
</template>

<script>
  import LoginForm from '@/components/shared/LoginForm.vue'
  import RegisterForm from '@/components/shared/RegisterForm.vue'
  import ContentSection from '@/components/shared/ContentSection.vue'
  import Footer from '@/components/shared/Footer.vue'

  export default {
  name: "Login",
      props: {
          platform: {
              type: Boolean,
              default: false
          }
      },
  components :{
    LoginForm,
      RegisterForm,
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
      }
};
</script>
