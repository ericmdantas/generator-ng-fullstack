"use strict";

angular
  .module('myAwesomeApp')
  .factory('ThingResource', ['$resource', function($resource)
  {
    var _url = '/api/things/:id';
    var _params = {};
    var _methods = {};

    return $resource(_url, _params, _methods);
  }]);

