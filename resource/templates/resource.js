;(function(angular)
{
  "use strict";

  angular
    .module('myAwesomeApp')
    .factory('<%= name %>Resource', ['$resource', function($resource)
    {
      var _url = '/api/<%= name %>/:id';
      var _params = {id: '@id'};
      var _method = {update: {method: 'PUT'}};

      return $resource(_url, _params, _method);
    }]);

}(window.angular));

