(function () {
    "use strict";

    /**
     * <%= nameController %>
     */
    angular
        .module('myAwesomeApp')
        .controller('<%= name %>Controller', <%= name %>Controller);

    <%= name %>Controller.$inject = [];

    /* @ngInject */
    function <%= name %>Controller() {
        /* jshint validthis: true */
        var vm = this;

        // Models

        // Method Declarations

        ////////////////

    }
}());

