<template>
    <div id="app">
        <!-- 遮罩层 -->
        <div id="cover"></div>
        <Header></Header>
        <router-link to="/todo/123">todo</router-link>
        <router-link to="/login">login</router-link>
        <!-- todo主体 -->
        <transition name="fade">
            <router-view/>
        </transition>

        <Footer></Footer>
    </div>
</template>

<script>
import Header from './views/header.vue';
import Footer from './views/footer.jsx';

export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="stylus" scoped>
#app {
    position absolute
    left 0
    right 0
    top 0
    bottom 0
}
// 遮罩层
#cover {
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    background-color #999999
    opacity .9
    z-index -1
}
</style>
