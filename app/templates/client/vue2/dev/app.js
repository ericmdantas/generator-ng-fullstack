import TodoCmp from './todo/components/todo-cmp'
import {router} from './app.route'

export default {
    el: '#app',
    router: router,
    render: h => h(TodoCmp)
}
