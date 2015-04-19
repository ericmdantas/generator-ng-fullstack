(function () {
    "use strict";

    /**
     * <%= name %>
     */
    angular
        .module('myAwesomeApp')
        .factory('<%= name %>Resource', <%= name %>Resource);

    <%= name %>Resource.$inject = ['$resource'];

    /* @ngInject */
    function <%= name %>Resource($resource) {
        var BASE_URL = '/api/<%= name %>';

        var factory = {
            getter: getter
        };
        return factory;

        ////////////

        function getter(id) {
            return $resource(BASE_URL + '/:id', {id: id}, {update: {method: 'PUT'}});
        }
    }
}());

