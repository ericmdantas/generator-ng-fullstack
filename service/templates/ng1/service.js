;(function(angular) {
  'use strict';

  angular
    .module('myAwesomeApp')
    .service('<%= name %>', [
      '$q',
      function($q) {
        this.doSomething = function() {
          var deferred = $q.defer();

          return deferred.promise;
        };
      }
    ]);
}(window.angular));
