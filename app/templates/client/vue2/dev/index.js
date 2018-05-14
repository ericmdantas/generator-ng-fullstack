import Vue from 'vue'
import Todo from './todo/components/todo.vue'

new Vue({
  el: '#app',
  render: h => h(Todo)
})