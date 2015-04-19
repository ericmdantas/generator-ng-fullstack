(function () {
    "use strict";

    /**
     * Decorator
     */
    angular
        .module('myAwesomeApp')
        .config('decorator');

    decorator.$inject = ['$provide'];

    /* @ngInject */
    function decorator($provide) {
        $provide.decorator('SomethingToBeDecorated', function ($delegate) {
            return $delegate;
        });
    }
}());


