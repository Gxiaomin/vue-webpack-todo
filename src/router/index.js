
import VueRouter from 'vue-router';
import routes from './routes';

export default () => {
    return new VueRouter({
        routes,
        mode: 'history',
        // 基路径：渲染出来的路径名为： /base/todo
        // base: '/base/',
        // 与router-link配合使用
        linkActiveClass: 'active-link',
        linkExactActiveClass: 'exact-active-link',
        /* // 切换路由时，页面是否需要滚动行为
        scrollBehavior (to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition;
            } else {
                return {x: 0, y: 0};
            }
        }, */

        /* // 转换路由上的参数
        parseQuery (query) {},
        stringifyQuery (obj) {} */

        // 如果使用mode:history, 并不是所有浏览器都支持history模式，此时该属性为true,则会自动转为“hash”模式
        fallback: true
    });
};
