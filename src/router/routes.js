import Login from '../views/Login.vue';
import Todo from '../views/todo/todo.vue';

export default [
    {
        path: '/',
        redirect: '/todo'
    },
    {
        path: '/todo',
        name: 'todo',
        component: Todo
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];
