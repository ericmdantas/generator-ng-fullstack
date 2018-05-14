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

<style scoped>
    .todo-container {
    font-family: "Roboto";
    position: relative;
    max-width: 900px;
    margin: 30px auto 0;
    padding: 20px 10px 10px 10px;
    box-shadow: 0 -1px 0 #e5e5e5,
                0 0 2px rgba(0,0,0,.12),
                0 2px 4px rgba(0,0,0,.24);
  }

  .todo-container .todo-title {
    padding: 5px;
    background-color: #fff;
    position: absolute;
    font-size: 30px;
    top: -45px;
    left: 0;
    color: steelblue;
  }

  .todo-container .todo-form {
    margin-top: 20px;
  }

  .todo-container input {
    border: none;
    border-bottom: 2px solid #ddd;
    font-size: 17px;
    padding: 5px 3px;
    width: 90%;
    box-sizing: border-box;
  }

  .todo-container input:focus {
    outline: 0;
  }

  .todo-container button {
    border-radius: 100%;
    padding: 10px 14px;
    font-weight: bold;
    color: #fff;
    background-color: steelblue;
    cursor: pointer;
    border: 2px solid #ddd;
    font-size: 15px;
    transition: all .2s;
  }

  .todo-container button:focus,
  .todo-container button:active {
    outline: none;
  }

  .todo-container button:disabled {
    opacity: .7;
    color: steelblue;
    background-color: #fff;
    cursor: not-allowed;
  }

  .todo-container .todo-error {
    border-bottom-color: #E22323;
  }

  .todo-container .todo-item {
    padding: 3px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }

  .todo-container .todo-item:hover {
    background-color: #f1f2f3;
  }
</style>