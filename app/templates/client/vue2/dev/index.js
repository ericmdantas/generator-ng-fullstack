import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import TodoCmp from './todo/components/todo-cmp.vue'

Vue.use(VueResource)

new Vue({
  el: '#app',
  router: new VueRouter(
    {path: '/', component: TodoCmp}
  ),
  render: h => h(TodoCmp)
})