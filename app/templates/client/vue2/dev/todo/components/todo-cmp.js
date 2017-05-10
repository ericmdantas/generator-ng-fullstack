;(function() {
  Vue.component("todo-cmp", {
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
  });
}());
