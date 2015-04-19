(function () {
    'use strict';

    /**
     * Application Controller
     * @namespace Application
     * @desc Controls all the routing and application wide logic for the application
     */
    angular
        .module('myAwesomeApp')
        .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$router'];

    /* @ngInject */
    function ApplicationController($router) {
        /* jshint validthis: true */
        var vm = this;

        // Models
        vm.paths = [];

        // Initialization
        configureRoutes();

        ////////////

        /**
         * @name configureRoutes
         * @desc Configures the routes for the application
         * @memberOf ApplicationController
         */
        function configureRoutes() {
            // Setup paths
            vm.paths.push({path: '/', component: 'todo'});

            // Set paths on router
            $router.config(vm.paths);
        }
    }
})();
