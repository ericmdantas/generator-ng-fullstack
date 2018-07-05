import VueRouter from 'vue-router'
import TodoCmp from './todo/components/todo-cmp'

export const router = new VueRouter({
    mode: 'history',
	routes: [
		{path: '/', component: TodoCmp},
  ]
})
