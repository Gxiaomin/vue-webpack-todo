<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下来要做什么"
      @keyup.enter="addTodo"
    />

    <item
      v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
      @del="deleteTodo"
    ></item>

    <tabs
      :filter="filter"
      :todos="todos"
      @toggle="toggleFilter"
      @clearAllCompleted="clearAllCompleted"
    ></tabs>

    <router-view />
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'

let id = 0

export default {
  // 路由的钩子（在钩子中，没调用next()之前，该组件还没有被渲染，
  // 是无法获取到上下文的(this)，此时不能改变或调用该组件内的属性或方法）
  // 若要获取上下文，可以在next()中传入一个方法
  beforeRouteEnter (to, from, next) {
    console.log('todo before enter')
    next(vm => {
      // vm：为上下文
      console.log('todo before enter this.id:' + vm.id)
    })
  },
  // 同一路由，不同参数时才会被处罚
  beforeRouteUpdate (to, from, next) {
    console.log('todo before update')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('todo before leave')
    next()
  },
  // 通过路由配置的 props: true 传入的参数
  props: ['id'],

  components: {
    Item,
    Tabs
  },

  data () {
    return {
      todos: [],

      filter: 'all'
    }
  },

  mounted () {
    // console.log(this.id);
  },

  methods: {
    // 添加代办事项
    addTodo (e) {
      if (e.target.value === '') return
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
    },

    // 删除
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },

    toggleFilter (state) {
      this.filter = state
    },

    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  },

  computed: {
    filteredTodos: function () {
      if (this.filter === 'all') {
        return this.todos
      }

      const completed = this.filter === 'completed'
      return this.todos.filter(todo => todo.completed === completed)
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;

  .add-input {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: none;
    color: inherit;
    box-sizing: border-box;
    font-smoothing: antialiased;
    padding: 16px 16px 16px 60px;
    outline: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }
}
</style>
