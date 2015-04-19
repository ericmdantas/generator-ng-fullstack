(function () {
    "use strict";

    /**
     * <%= name %>
     */
    angular
        .module('myAwesomeApp')
        .factory('<%= name %>', <%= name %>);

    <%= name %>.$inject = [];

    /* @ngInject */
    function <%= name %>() {
        var factory = {};
        return factory;

        ////////////

    }
}());

