
import Login from '@/views/shared/user/Login';
import Register from '@/views/shared/user/Register';
import Profile from '@/views/shared/user/Profile';
import RequestReset from '@/views/shared/user/RequestReset';
import Reset from '@/views/shared/user/Reset';

// lazy loading routes
const Home = resolve => {
    require.ensure(["@/views/Home.vue"], () => {
        resolve(require("@/views/Home.vue"));
    });
};
const Terms = resolve => {
    require.ensure(["@/views/shared/static/Terms.vue"], () => {
        resolve(require("@/views/shared/static/Terms.vue"));
    });
};

export const routes = [
    {
        path: "/",
        component: Home,
        name: 'Home',
        beforeEnter: null,
        meta: {
            requiresAuth: true,
            i18n: "page-homepage",
            nav: false
        }
    },
    {
        path: "/terms",
        component: Terms,
        meta: {i18n: "page-terms", nav: false}
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {i18n: 'page-login', nav: false}
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {i18n: 'page-register', nav: false}
    },
    {
        path: "/reset",
        name: "ResetRequest",
        component: RequestReset,
        meta: {i18n: 'page-reset', nav: false}
    },
    {
        path: "/reset/:token",
        name: "Reset",
        component: Reset,
        meta: {i18n: 'page-reset', nav: false}
    },
    {
        path: "/profile",
        name: "UserProfile",
        component: Profile,
        meta: {requiresAuth: true, i18n: 'page-profile', nav: false}
    },
    {
        path: "/error",
        name: "Error",
        component: Home.Error,
        meta: {i18n: 'page-profile', nav: false}
    }
];
