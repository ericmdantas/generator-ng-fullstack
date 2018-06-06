import VueRouter from 'vue-router'
import TodoCmp from './todo/components/todo-cmp'

export const routes = new VueRouter({
    mode: 'history',
	routes: [
		{path: '/', component: TodoCmp},
  ]
})
