"use strict";

angular
  .module('myAwesomeApp')
  .service('TodoDAO', ['$q', 'TodoResource', function($q, TodoResource)
  {
      var _getAll = function()
      {
          var _onSuccess = function(todos)
          {
              // do something with the response from the server, like extending a model or something

              return todos; // this will be returned as a resolved promise
          }

          var _onError = function(error)
          {
              // do something with the error, like making it more readable or something

              return $q.reject(error); // this will be returned as a rejected promise
          }

          return TodoResource
                    .query()
                    .$promise
                    .then(_onSuccess)
                    .catch(_onError);
      }

      this.getAll = _getAll;
  }]);
