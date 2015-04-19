(function () {
    "use strict";

    /**
     * <%= name %>Service
     */
    angular
        .module('myAwesomeApp')
        .service('<%= name %>Service', <%= name %>Service);

    <%= name %>Service.$inject = [];

    /* @ngInject */
    function <%= name %>Service() {
        this.doSomething = function () {

        };
    }
}());

