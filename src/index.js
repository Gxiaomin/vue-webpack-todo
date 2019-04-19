import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import createRouter from './router/index';

import './assets/styles/global.styl';

Vue.use(VueRouter);

const router = createRouter();

// 导航守卫
router.beforeEach((to, from, next) => {
    console.log('router beforeEach');
    next();
});

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#root');