"use strict";

angular
  .module('myAwesomeApp')
  .factory('SomeFactory', ['$resource', function($resource)
  {
      var _url = '/api/something/here/:id';
      var _params = {id: '@id'};
      var _method = {update: {method: 'PUT'}};

      return $resource(_url, _params, _method);
  }]);
