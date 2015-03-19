"use strict";

angular
  .module('myAwesomeApp')
  .controller('TodosController', ['Todo', 'TodoDAO', function(Todo, TodoDAO)
  {
      var self = this;

      self.todo = new Todo();
  }]);
