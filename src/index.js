import Vue from 'vue';
import VueRouter from 'vue-router';
import createRouter from './router/index';
import Vuex from 'vuex';
import App from './app.vue';

import createStore from './store/index';

import './assets/styles/global.styl';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = createRouter();
const store = createStore();

// 导航守卫
router.beforeEach((to, from, next) => {
    console.log('router beforeEach');
    next();
});

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#root');