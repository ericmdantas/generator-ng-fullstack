(function () {
    "use strict";

    angular
        .module('myAwesomeApp')
        .factory('TodoResource', TodoResource);

    TodoResource.$inject = ['$resource'];

    /* @ngInject */
    function TodoResource($resource) {
        var _url = '/api/todos/:id';
        var _params = {};
        var _methods = {};

        return $resource(_url, _params, _methods);
    }
}());
