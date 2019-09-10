<i18n>
    {

    "de": {

    "registration-create-account": "Create Your CitizenScience.ch Account to Take Part in the Project",
    "registration-take-part": "Tell us more about you",

    "label-firstname": "First Name",
    "label-lastname": "Last Name",
    "label-email": "Email",
    "label-password": "Password",
    "label-password-repeat": "Repeat Password",

    "label-why": "Why do you want to sign up?",
    "placeholder-why": "Tell us about your interest in the project.",
    "label-interests": "What is your specific interest?",
    "label-interests-option-ancestry": "Ancestry",
    "label-interests-option-activity": "Activity",
    "label-interests-option-sleep": "Sleep",
    "label-interests-option-nutrition": "Nutrition",
    "label-interests-option-stress": "Stress",
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

    "message-success": "Thank you for your participation"

    },
    "en": {

    "registration-create-account": "Create Your CitizenScience.ch Account to Take Part in the Project",
    "registration-take-part": "Tell us more about you",

    "label-firstname": "First Name",
    "label-lastname": "Last Name",
    "label-email": "Email",
    "label-password": "Password",
    "label-password-repeat": "Repeat Password",

    "label-why": "Why do you want to sign up?",
    "placeholder-why": "Tell us about your interest in the project.",
    "label-interests": "What is your specific interest?",
    "label-interests-option-ancestry": "Ancestry",
    "label-interests-option-activity": "Activity",
    "label-interests-option-sleep": "Sleep",
    "label-interests-option-nutrition": "Nutrition",
    "label-interests-option-stress": "Stress",
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

    "message-success": "Thank you for your participation"

    }

    }
</i18n>


<template>

    <div v-if="!isAlreadyRegistred">

        <h3 v-if="!user.currentUser || user.isAnon" class="subheading centered" v-html="$t('registration-create-account')"></h3>
        <h3 v-else class="subheading centered" v-html="$t('registration-take-part')"></h3>

        <form @submit.prevent="register">

            <div class="margin-bottom">

                <div class="row row-centered row-wrapping">

                    <div class="col col-wrapping col-large-6">
                        <div class="form-field form-field-block">
                            <label for="reg-firstname">{{ $t("label-firstname") }}</label>
                            <input v-model="firstname" id="reg-firstname" />
                        </div>
                    </div>

                    <div class="col col-wrapping col-large-6">
                        <div class="form-field form-field-block">
                            <label for="reg-lastname">{{ $t("label-lastname") }}</label>
                            <input v-model="lastname" id="reg-lastname" />
                        </div>
                    </div>

                    <template v-if="!user.currentUser || user.isAnon">
                    <div class="col col-wrapping col-large-6">
                        <div class="form-field form-field-block">
                            <label for="reg-email">{{ $t("label-email") }}</label>
                            <input v-model="email" type="email" id="reg-email" name="reg-email" autocomplete="new-password" />
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
                    </template>

                </div>

            </div>


            <div class="row row-centered">
                <div class="col col-large-8">

                    <div class="form-field form-field-block">
                        <label>{{ $t("label-why") }}</label>
                        <growing-textarea v-model="why" :placeholder="$t('placeholder-why')"></growing-textarea>
                    </div>

                    <div class="form-field form-field-block">
                        <label for="notification-options">{{ $t("label-interests") }}</label>
                        <div class="options" id="notification-options">

                            <div class="row">
                                <div class="col col-6 col-large-4">

                                    <label>
                                        <input type="checkbox" v-model="checkboxAncestry">
                                        <div class="checkbox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                            </svg>
                                        </div>
                                        <span>{{ $t("label-interests-option-ancestry") }}</span>
                                    </label>

                                </div>
                                <div class="col col-6 col-large-4">

                                    <label>
                                        <input type="checkbox" v-model="checkboxActivity">
                                        <div class="checkbox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                            </svg>
                                        </div>
                                        <span>{{ $t("label-interests-option-activity") }}</span>
                                    </label>

                                </div>
                                <div class="col col-6 col-large-4">

                                    <label>
                                        <input type="checkbox" v-model="checkboxSleep">
                                        <div class="checkbox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                            </svg>
                                        </div>
                                        <span>{{ $t("label-interests-option-sleep") }}</span>
                                    </label>

                                </div>
                                <div class="col col-6 col-large-4">

                                    <label>
                                        <input type="checkbox" v-model="checkboxNutrition">
                                        <div class="checkbox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                            </svg>
                                        </div>
                                        <span>{{ $t("label-interests-option-nutrition") }}</span>
                                    </label>

                                </div>
                                <div class="col col-6 col-large-4">

                                    <label>
                                        <input type="checkbox" v-model="checkboxStress">
                                        <div class="checkbox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                            </svg>
                                        </div>
                                        <span>{{ $t("label-interests-option-stress") }}</span>
                                    </label>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="form-field form-field-block">
                        <label>{{ $t("label-other-interests") }}</label>
                        <growing-textarea v-model="otherInterests" :placeholder="$t('placeholder-other-interests')"></growing-textarea>
                    </div>

                    <template v-if="!user.currentUser || user.isAnon">
                    <div class="form-field form-field-block">
                        <label for="notification-options">{{ $t("notifications-label") }}</label>
                        <div class="options" id="notification-options">

                            <label>
                                <input type="checkbox" v-model="centerNotification">
                                <div class="checkbox">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                </div>
                                <span>{{ $t("notifications-option-1") }}</span>
                            </label>

                        </div>
                    </div>
                    </template>

                    <div class="button-group right-aligned">
                        <button v-if="user.isAnon" :disabled="!firstname || !lastname || !email || !password || errors.emailInUse || errors.emailInUse || errors.usernameInUse || errors.passwordLength || errors.passwordMatch" type="submit" class="button button-primary">{{ $t("button-register") }}</button>
                        <button v-else :disabled="!firstname || !lastname" type="submit" class="button button-primary">{{ $t("button-register") }}</button>
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
    <div v-else>
        <div class="form-message form-message-centered form-message-success">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
            </div>
            <span class="text">{{ $t("message-success") }}</span>
        </div>
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
                firstname: "",
                lastname: "",
                email: "",
                username: '',
                password: "",
                confPassword: "",

                why: '',

                checkboxAncestry: false,
                checkboxActivity: false,
                checkboxSleep: false,
                checkboxNutrition: false,
                checkboxStress: false,

                otherInterests: '',

                centerNotification: false,

                errors: {
                    emailFormat: false,
                    emailInUse: false,
                    usernameInUse: false,
                    passwordMatch: false,
                    passwordLength: false,
                    server: false
                },

                emailCheckTimeout: undefined,
                usernameCheckTimeout: undefined
            };
        },
        computed: {
            ...mapState({
                projectId: state => state.consts.projectId,

                user: state => state.c3s.user
            }),
            newUserInfo() {
                return {
                    'anonymous': false,
                    'firstname': this.firstname,
                    'lastname': this.lastname,
                    'center-notifications': this.centerNotification,
                    'project-notifications': [
                        this.projectId
                    ],
                    'project-information': {
                        [this.projectId]: {
                            'why': this.why,
                            'interests': {
                                'ancestry': this.checkboxAncestry,
                                'activity': this.checkboxActivity,
                                'sleep': this.checkboxSleep,
                                'nutrition': this.checkboxNutrition,
                                'stress': this.checkboxStress,
                            },
                            'other-interests': this.otherInterests
                        }
                    }
                };
            },
            existingUserInfo() {
                return {
                    'anonymous': false,
                    'firstname': this.firstname,
                    'lastname': this.lastname,
                    'project-notifications': [
                        this.projectId
                    ],
                    'project-information': {
                        [this.projectId]: {
                            'why': this.why,
                            'interests': {
                                'ancestry': this.checkboxAncestry,
                                'activity': this.checkboxActivity,
                                'sleep': this.checkboxSleep,
                                'nutrition': this.checkboxNutrition,
                                'stress': this.checkboxStress,
                            },
                            'other-interests': this.otherInterests
                        }
                    }
                };
            },
            isAlreadyRegistred() {
                if( this.user.currentUser.info && this.user.currentUser.info['project-information'] && this.user.currentUser.info['project-information'][this.projectId] ) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
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

                if( this.confPassword !== this.password ) {
                    this.errors.passwordMatch = true;
                }
                else {
                    this.errors.passwordMatch = false;
                }
            },
            confPassword() {
                if( this.confPassword !== this.password ) {
                    this.errors.passwordMatch = true;
                }
                else {
                    this.errors.passwordMatch = false;
                }
            },
            user() {
                console.log('user changed');
                console.log( this.user );
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
                    if( res.body && res.body.length > 0 ) {
                        // email already registered
                        this.errors.usernameInUse = true;
                    }
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

                console.log('register');

                if( !this.user.currentUser || this.user.isAnon ) {

                    // register a new user

                    const user = {
                        email: this.email,
                        username: this.username,
                        pwd: this.password,
                        info: this.newUserInfo
                    };

                    console.log( 'user is Anon' );
                    this.$store.dispatch('c3s/user/register', user).then(r => {
                        if (r.ok === true) {
                            console.log('registration successful');
                            //this.$router.push('/');
                        }
                        else {
                            this.errors.server = true;
                        }
                    });

                }
                else {

                    console.log( 'user is not Anon' );

                    // update an existing user
                    const info = JSON.parse(JSON.stringify(this.user.currentUser.info));

                    info['firstname'] = this.existingUserInfo['firstname'];
                    info['lastname'] = this.existingUserInfo['lastname'];


                    if( !Array.isArray( info['project-notifications'] ) ) {
                        // for snake notification users (where value "true")
                        info['project-notifications'] = ['b04bc186-1e0e-4fd3-87b8-a25262c1c79f'];
                    }

                    // add notification
                    if( !info['project-notifications'].includes( this.projectId ) ) {
                        info['project-notifications'].push( this.projectId );
                    }

                    // add information
                    if( !info['project-information'] ) {
                        info['project-information'] = {};
                    }
                    info['project-information'][this.projectId] = this.existingUserInfo['project-information'][this.projectId];


                    this.$store.dispatch('c3s/user/updateUser', [ this.user.currentUser.id, {'info':info} ] ).then(r => {
                        console.log('user updated');
                    });


                }
            }
        }
    };
</script>

<style lang="scss">


    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';


</style>
