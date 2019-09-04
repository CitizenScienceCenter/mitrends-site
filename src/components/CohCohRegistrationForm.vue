<i18n>
    {

    "en": {

    "label-firstname": "First Name",
    "label-lastname": "Last Name",
    "label-email": "Email",
    "label-password": "Password",
    "label-password-repeat": "Repeat Password",

    "label-why": "Why do you want to sign up?",
    "placeholder-why": "Tell us about your interest in the project.",
    "label-interests": "What is your specific interest?",
    "label-interests-option-1": "Ancestry",
    "label-interests-option-2": "Activity",
    "label-interests-option-3": "Sleep",
    "label-interests-option-4": "Nutrition",
    "label-interests-option-5": "Stress",
    "label-other-interests": "Other interests and ideas",
    "placeholder-other-interests": "What’s on your mind?",

    "button-register": "Register",

    "error-email-empty": "Enter an email address.",
    "error-email-inuse": "Email already in use. Please login.",
    "error-email-format": "No valid email address",
    "error-username-inuse": "Username already in use.",
    "error-password-length": "Password needs to be at least 8 characters long.",
    "error-password-match": "Passwords don't match.",

    "error-server": "Server error occured",

    "notifications-label": "Notifications",
    "notifications-option-1": "I want to receive information about the Citizen Science Center Zurich.",
    "notifications-option-2": "I want to receive information about this project."

    },

    "de": {


    }

    }
</i18n>


<template>

    <div>
        <form @submit.prevent="register">

            <div class="margin-bottom">

                <div class="row row-centered row-wrapping">

                    <div class="col col-wrapping col-large-6">
                        <div class="form-field form-field-block">
                            <label for="reg-firstname">{{ $t("label-firstname") }}</label>
                            <input type="email" id="reg-firstname" autocomplete="new-password" />
                        </div>
                    </div>

                    <div class="col col-wrapping col-large-6">
                        <div class="form-field form-field-block">
                            <label for="reg-lastname">{{ $t("label-lastname") }}</label>
                            <input type="email" id="reg-lastname" autocomplete="new-password" />
                        </div>
                    </div>

                    <div class="col col-wrapping col-large-6">
                        <div class="form-field form-field-block">
                            <label for="reg-email">{{ $t("label-email") }}</label>
                            <input v-model="email" type="email" id="reg-email" name="reg-email" autocomplete="new-password" />
                            <span class="message error" v-if="errors.emailEmpty">{{ $t("error-email-empty") }}</span>
                            <span class="message error" v-if="errors.emailFormat">{{ $t("error-email-format") }}</span>
                            <span class="message error" v-if="errors.emailInUse">{{ $t("error-email-inuse") }}</span>
                        </div>
                    </div>

                    <div class="col col-wrapping col-large-6">
                        <div class="form-field form-field-block">
                            <label for="reg-username">Username</label>
                            <input v-model="username" id="reg-username" name="reg-email" autocomplete="new-password" />
                            <span class="message error" v-if="errors.usernameInUse">{{ $t("error-username-inuse") }}</span>
                        </div>
                    </div>

                    <div class="col col-wrapping col-large-6">
                        <div class="form-field form-field-block">
                            <label for="reg-password">{{ $t("label-password") }}</label>
                            <input v-model="password" type="password" id="reg-password" name="reg-password" autocomplete="new-password" />
                            <span class="message error" v-if="errors.passwordLength">{{ $t("error-password-length") }}</span>
                        </div>
                    </div>

                    <div class="col col-wrapping col-large-6">
                        <div class="form-field form-field-block">
                            <label for="reg-password-2">{{ $t("label-password-repeat") }}</label>
                            <input v-model="confPassword" type="password" id="reg-password-2" name="reg-password-2" autocomplete="new-password" />
                            <span class="message error" v-if="errors.passwordMatch">{{ $t("error-password-match") }}</span>
                        </div>
                    </div>

                </div>

            </div>


            <div class="row row-centered">
                <div class="col col-large-8">

                    <div class="form-field form-field-block">
                        <label>{{ $t("label-why") }}</label>
                        <growing-textarea :placeholder="$t('placeholder-why')"></growing-textarea>
                    </div>

                    <div class="form-field form-field-block">
                        <label for="notification-options">{{ $t("label-interests") }}</label>
                        <div class="options" id="notification-options">

                            <div class="row">
                                <div class="col col-6 col-large-4">

                                    <label>
                                        <input type="checkbox" v-model="checkbox1">
                                        <div class="checkbox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                            </svg>
                                        </div>
                                        <span>{{ $t("label-interests-option-1") }}</span>
                                    </label>

                                </div>
                                <div class="col col-6 col-large-4">

                                    <label v-if="projectId">
                                        <input type="checkbox" v-model="checkbox2">
                                        <div class="checkbox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                            </svg>
                                        </div>
                                        <span>{{ $t("label-interests-option-2") }}</span>
                                    </label>

                                </div>
                                <div class="col col-6 col-large-4">

                                    <label v-if="projectId">
                                        <input type="checkbox" v-model="checkbox3">
                                        <div class="checkbox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                            </svg>
                                        </div>
                                        <span>{{ $t("label-interests-option-3") }}</span>
                                    </label>

                                </div>
                                <div class="col col-6 col-large-4">

                                    <label v-if="projectId">
                                        <input type="checkbox" v-model="checkbox4">
                                        <div class="checkbox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                            </svg>
                                        </div>
                                        <span>{{ $t("label-interests-option-4") }}</span>
                                    </label>

                                </div>
                                <div class="col col-6 col-large-4">

                                    <label v-if="projectId">
                                        <input type="checkbox" v-model="checkbox5">
                                        <div class="checkbox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                            </svg>
                                        </div>
                                        <span>{{ $t("label-interests-option-5") }}</span>
                                    </label>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="form-field form-field-block">
                        <label>{{ $t("label-other-interests") }}</label>
                        <growing-textarea :placeholder="$t('placeholder-other-interests')"></growing-textarea>
                    </div>

                    <div class="button-group right-aligned">
                        <button :disabled="loading || !email || !password || errors.emailEmpty || errors.emailInUse || errors.passwordLength || errors.passwordMatch || errors.usernameInUse" type="submit" class="button button-primary">{{ $t("button-register") }}</button>
                    </div>

                    <div class="form-message form-message-error" v-if="errors.server">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M322.72,256,422.79,155.93a31.46,31.46,0,0,0,0-44.48L400.55,89.21a31.46,31.46,0,0,0-44.48,0L256,189.28,155.93,89.21a31.46,31.46,0,0,0-44.48,0L89.21,111.45a31.46,31.46,0,0,0,0,44.48L189.28,256,89.21,356.07a31.46,31.46,0,0,0,0,44.48l22.24,22.24a31.46,31.46,0,0,0,44.48,0L256,322.72,356.07,422.79a31.46,31.46,0,0,0,44.48,0l22.24-22.24a31.46,31.46,0,0,0,0-44.48Z"></path>
                            </svg>
                        </div>
                        <span class="text">{{ $t("error-server") }}</span>
                    </div>

                </div>
            </div>

        </form>
    </div>

</template>

<script>
    import {mapState} from "vuex"
    import GrowingTextarea from "./shared/GrowingTextarea";

    export default {
        name: "RegisterForm",
        components: {GrowingTextarea},
        data() {
            return {
                email: "",
                username: '',
                password: "",
                confPassword: "",
                checkbox1: true,
                checkbox2: true,
                userSaved: false,
                errors: {
                    emailEmpty: false,
                    emailFormat: false,
                    emailInUse: false,
                    usernameInUse: false,
                    match: false,
                    passwordLength: false,
                    server: false
                },
                emailCheckTimeout: undefined,
                usernameCheckTimeout: undefined
            };
        },
        computed: mapState({
            loading: state => state.settings.loading,
            projectId: state => state.consts.projectId
        }),
        watch: {
            email() {
                this.username = this.email.split('@')[0];

                this.errors.email = false;
                clearTimeout( this.emailCheckTimeout );
                var self = this;
                this.emailCheckTimeout = setTimeout( function() {
                    self.checkEmailFormat();
                    self.checkEmail();
                }, 500);
            },
            username() {
                this.errors.usernameInUse = false;
                clearTimeout( this.usernameCheckTimeout );
                var self = this;
                this.usernameCheckTimeout = setTimeout( function() {
                    self.checkUsername();
                }, 500);
            },
            password() {
                if( this.password.length < 8 ) {
                    this.errors.passwordLength = true;
                }
                else {
                    this.errors.passwordLength = false;
                }
            },
            confPassword() {
                if( this.confPassword !== this.password ) {
                    this.errors.passwordMatch = true;
                }
                else {
                    this.errors.passwordMatch = false;
                }
            }
        },
        methods: {
            checkUsername() {
                let query = {
                    'select': {
                        'fields': [
                            '*'
                        ],
                        'tables': [
                            'users'
                        ]
                    },
                    'where': [
                        {
                            "field": 'username',
                            'op': 'e',
                            'val': this.username
                        }
                    ]
                };
                this.$store.dispatch('c3s/submission/getSubmissions', [query, 1] ).then(res => {
                    if( res.body.length > 0 ) {
                        // email already registered
                        this.errors.usernameInUse = true;
                    }

                    //this.$store.commit('c3s/user/SET_ANON', true);
                });
            },
            checkEmailFormat() {
                var re = /\S+@\S+\.\S+/;
                if( re.test(this.email) ) {
                    this.errors.emailFormat = false;
                }
                else {
                    this.errors.emailFormat = true;
                }
            },
            checkEmail() {
                let query = {
                    'select': {
                        'fields': [
                            '*'
                        ],
                        'tables': [
                            'users'
                        ]
                    },
                    'where': [
                        {
                            "field": 'email',
                            'op': 'e',
                            'val': this.email
                        }
                    ]
                };
                this.$store.dispatch('c3s/submission/getSubmissions', [query, 1] ).then(res => {
                    if( res.body.length > 0 ) {
                        // email already registered
                        this.errors.emailInUse = true;
                    }
                });
            },
            register() {
                this.errors.server = false;
                this.errors.username = false;

                const user = {
                    email: this.email,
                    username: this.username,
                    pwd: this.password,
                    info: {
                        'anonymous': false,
                        'center-notifications': this.checkbox1
                    }
                };

                if( this.projectId && this.checkbox2 ) {
                    user.info['project-notifications'] = [ this.projectId ];
                }

                this.$store.dispatch('c3s/user/register', user).then(r => {

                    if (r.ok === true) {
                        this.$router.push('/');
                    }
                    else {
                        this.errors.server = true;
                    }
                });
            }
        }
    };
</script>

<style lang="scss">


    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';

    .error {
        color: $color-error;
    }

</style>
