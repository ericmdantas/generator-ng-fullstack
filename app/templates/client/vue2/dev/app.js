import TodoCmp from './todo/components/todo-cmp'
import {router} from './app.route'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default {
    el: '#app',
    router: router,
    render: h => h(TodoCmp)
}
