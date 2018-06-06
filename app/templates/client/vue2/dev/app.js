import TodoCmp from './todo/components/todo-cmp'
import AppRoutes from './app.route'

export default {
    el: '#app',
    router: AppRoutes,
    render: h => h(TodoCmp)
}
