<template>
  <div class="todo-container">
    <form class="todo-form"
          @submit.prevent="add(todoForm.todo)">

      <h1 class="todo-title">{{title}}</h1>

      <input type="text"
              v-model="todoForm.todo.todoMessage"
              v-bind:class="{'todo-error': !todoForm.todo.todoMessage}"
              placeholder="What do you have todo?"
              autofocus />

      <button type="submit"
              :disabled="!todoForm.todo.todoMessage.length">+</button>
    </form>

    <div class="todo-list">
      <div v-for="todo in todos"
          class="todo-item"
          @click="remove(todo._id);">
        <p>{{todo.todoMessage}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import "../styles/todo.css"
  import todoService from "../services/todo-service"

  export default {
    data() {
      return {
        title: "vue2do",
        todos: [],
        todoForm: {
          todo: {
            todoMessage: ""
          }
        }
      }
    },
    template: `
      
    `,
    mounted() {
      this.getAll();
    },
    methods: {
      getAll() {
        this.$http.get("/api/todos")
            .then((todos) => {
               return todos.json();
            })
            .then((todos) => {
              this.todos = todos;
            });
      },
      add(message) {
        this.$http.post("/api/todos", message)
            .then((todo) => {
              return todo.json();
            })
            .then((todo) => {
              this.todos.push(todo);
              this.todoForm.todo.todoMessage = "";
            });
      },
      remove(id) {
        this.$http.delete("/api/todos/" + id)
            .then(() => {
              this.todos.forEach((todo, index) => {
                if (todo._id === id) {
                  this.todos.splice(index, 1);
                }
              });
            });
      }
    } 
  }
</script>