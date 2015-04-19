(function () {
    "use strict";

    /**
     * Todo Controller
     */
    angular
        .module('myAwesomeApp')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['$log', 'Todo', 'TodoDAO'];

    /* @ngInject */
    function TodoController($log, Todo, TodoDAO) {
        /* jshint validthis: true */
        var vm = this;

        // Models
        vm.TodoDAO = TodoDAO;
        vm.$log = $log;
        vm.todo = new Todo();
        vm.todos = [];

        // Method Declarations
        vm.createTodo = createTodo;
        vm.deleteTodo = deleteTodo;

        ////////////////

        /**
         * @name createTodo
         * @desc Creates a todo
         * @param {Todo} todo Todo to create
         * @memberOf TodoController
         */
        function createTodo(todo) {
            var _onSuccess = function (newTodo) {
                self.todos.push(newTodo);
                self.todo = new Todo();
            };

            TodoDAO.createTodo(todo)
                .then(_onSuccess)
                .catch($log.error);
        }

        /**
         * @name deleteTodo
         * @desc Deletes a todo
         * @param {String} id Id of the todo to delete
         * @memberOf TodoController
         */
        function deleteTodo(id) {
            TodoDAO.deleteTodo(id)
                .then(_getAll)
                .catch($log.error);
        }
    }

    /**
     * Controls the activation of the controller, we fetch all the TODOs here
     * @returns {Array} array of todos
     */
    TodoController.prototype.activate = function () {
        var _this = this;
        var _onSuccess = function (todos) {
            return _this.todos = todos;
        };

        return this.TodoDAO
            .getAll()
            .then(_onSuccess)
            .catch(this.$log.error);
    }
}());
