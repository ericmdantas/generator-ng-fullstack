;(function() {
  Vue.component('todo-cmp', {
    data() {
      return {
        todoService: new TodoService(),
        title: "vue2do",
        todos: [],
        todoForm: {
          todoMessage: ""
        }
      }
    },
    template: `
      <div class="todo-container">
        <form class="todo-form"
              @submit.prevent="add(todoForm.todoMessage)">

          <h1 class="todo-title">{{title}}</h1>

          <input type="text"
                [class.todo-error]="!todoForm.todoMessage"
                placeholder="What do you have todo?"
                autofocus />

          <button type="submit"
                  :disabled="!todoForm.todoMessage">+</button>
        </form>

        <div class="todo-list">
          <div v-for="todo in todos;"
              class="todo-item"
              @click="remove(todo._id);">
            <p>{{todo.todoMessage}}</p>
          </div>
        </div>
      </div>
    `,
    ready() {
      this.getAll();
    },
    methods: {
      getAll() {
        this.todoService
            .getAll()
            .then((todos) => {
              this.todos = todos;
            });
      },
      add(message) {
        this.todoService
            .add(message)
            .then((todo) => {
              this.todos.push(todo);
              this.todoForm.todoMessage = "";
            });
      },
      remove(id) {
        this.todoService
            .remove(id)
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
