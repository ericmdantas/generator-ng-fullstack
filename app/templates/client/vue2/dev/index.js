import Vue from 'vue'
import TodoCmp from './todo/components/todo-cmp.vue'

new Vue({
  el: '#app',
  render: h => h(TodoCmp)
})