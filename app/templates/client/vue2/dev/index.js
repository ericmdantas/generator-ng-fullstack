import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoCmp from './todo/components/todo-cmp.vue'

new Vue({
  el: '#app',
  router: new VueRouter(
    {
      mode: 'history',
      routes: [
        {path: '/', component: TodoCmp}
      ]
    }
  ),
  render: h => h(TodoCmp)
})