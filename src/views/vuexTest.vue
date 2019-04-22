<template>
    <div class="vuex-wrapper">
        <h2>mutationsUpdateCount: {{count}}</h2>
        <h2>actionsUpdateCount: {{syncCount}}</h2>
        <!-- <h2>textA: {{textA}}</h2>
        <h2>textPlus: {{textPlus}}</h2> -->
        <h2>getters: {{fullName}}</h2>
    </div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations
} from 'vuex';

export default {
    mounted () {
        // // 与actions配合使用，异步修改state中的值
        // this.$store.dispatch('updateCountSync', {
        //     num: 5,
        //     time: 2000
        // })

        // 如果已使用mapActions引入方法，则直接调用
        this.updateCountSync({
            num: 5,
            time: 2000
        });

        // // a模块使用了namespaced: true时，调用
        // this['a/updateText']('123');
        // this['a/add']();

        // this.testActions();

        let i = 1;
        setInterval(() => {
            i++;
            // commit方法，与mutaition配置使用，同步修改state的值
            // 只能接受两个参数：1: mutations的名称，2: 一个对象
            this.$store.commit('updateCount', i);
        }, 1000);
    },

    methods: {
        ...mapActions(['updateCountSync', 'a/add', 'testActions']),
        ...mapMutations(['updateCount', 'a/updateText'])
    },

    computed: {
        // 不同写法
        ...mapState({
            count: state => state.count,
            syncCount: 'syncCount',
            // textA: state => state.a.text
        }),

        ...mapGetters({
            fullName: 'fullName',
            // textPlus: 'a/testPlus'
        })
    }
}
</script>

<style lang="stylus" scoped>
.vuex-wrapper {
    width 500px
    min-height 200px
    padding 20px
    background-color #fff
    margin 0 auto
    box-sizing border-box
    box-shadow 0 0 5px #666
}
</style>
