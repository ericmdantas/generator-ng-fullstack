"use strict";

angular
  .module('myAwesomeApp')
  .service('ThingDAO', ['$q', 'ThingResource', function($q, ThingResource)
  {
      var _getAll = function()
      {
          var _onSuccess = function(things)
          {
              // do something with the response from the server, like extending a model or something

              return things; // this will be returned as a resolved promise
          }

          var _onError = function(error)
          {
              // do something with the error, like making it more readable or something

              return $q.reject(error); // this will be returned as a rejected promise
          }

          return ThingResource
                    .query()
                    .$promise
                    .then(_onSuccess)
                    .catch(_onError);
      }

      this.getAll = _getAll;
  }]);
