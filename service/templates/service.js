(function () {
    "use strict";

    /**
     * <%= name %>Service
     */
    angular
        .module('myAwesomeApp')
        .service('<%= name %>Service', <%= name %>Service);

    <%= name %>Service.$inject = ['$q'];

    /* @ngInject */
    function <%= name %>Service($q) {
        this.doSomething = function () {

        };
    }
}());

