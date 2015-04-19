(function () {
    'use strict';

    var app = angular.module('myAwesomeApp');

    // Configure the application
    app.config(configure);

    configure.$inject = ['$locationProvider'];

    /* @ngInject */
    function configure($locationProvider) {
        $locationProvider.html5Mode(true);
    }
})();
