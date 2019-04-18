<template>
    <div calss="app">
        <!-- 遮罩层 -->
        <div id="cover"></div>

        <Header></Header>
        <!-- todo主体 -->
        <todo></todo>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './todo/header.vue';
import Footer from './todo/footer.jsx';
import Todo from './todo/todo.vue';

export default {
    components: {
        Header,
        Todo,
        Footer
    }
}
</script>

<style lang="stylus" scoped>
#app {
    position relative
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
