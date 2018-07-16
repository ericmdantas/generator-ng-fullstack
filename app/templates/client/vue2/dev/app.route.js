import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoCmp from './todo/components/todo-cmp'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
	routes: [
		{path: '/', component: TodoCmp},
  ]
})
