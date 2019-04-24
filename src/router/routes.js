export default [
  {
    path: '/',
    redirect: '/todo'
  },
  {
    path: '/todo/:id',
    name: 'todo',
    // props属性，可以将路由参数(:id)传入到该路由所加载的组件(Todo)中，然后通过props: ['id]获取
    props: true,
    // // 也可直接设置传入组件内的值
    // porps: { id: '456' },
    // // 或者声明一个方法
    // props: (route) => ({ id: route.query.b}),

    // component: Todo,
    // 异步加载组件：可以提高首屏加载速度
    component: () => import('../views/todo/todo.vue'),
    // 路由的钩子
    beforeEnter (to, from, next) {
      console.log('tode routes before enter')
      next()
    },
    children: [
      {
        path: 'test',
        name: 'test',
        // component: Login
        component: () => import('../views/Login.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // component: Login
    // 异步加载组件
    component: () => import('../views/Login.vue')
  },
  // vuex 测试页面
  {
    path: '/vuex',
    name: 'vuex',
    // component: VuexTest
    component: () => import('../views/vuexTest.vue')
  }
]
