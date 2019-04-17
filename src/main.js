import Vue from 'vue';
import VueRouter from 'vue-router';
import { router } from './router/router.js';
import App from './App.vue';
import store from './store/store.js';
import Vuex from 'vuex';
import { i18n } from './i18n.js';
import c3s from 'vuex-c3s';
import Meta from 'vue-meta';


let swaggerURL = 'https://api.citizenscience.ch/api/v2/swagger.json';
//let swaggerURL = 'http://localhost:8080/api/v2/swagger.json';

Vue.config.productionTip = false;

Vue.use(c3s.plugin, { store, swaggerURL});
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Meta);

store.watch(
    (state) => state.c3s && state.c3s.client,
    (value) => {
        if (value !== null) {
            new Vue({
                store,
                router,
                i18n,
                render: h => h(App),
                beforeCreate: function () {
                }
            }).$mount('#app')
        }
    }
);

/*
new Vue({
  render: h => h(App),
}).$mount('#app')
*/