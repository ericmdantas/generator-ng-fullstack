(function () {
    "use strict";

    /**
     * <%= name %>
     */
    angular
        .module('myAwesomeApp')
        .directive('<%= name %>', <%= name %>);


    function <%= name %>() {
        var directive = {
            link: link,
            restrict: 'EA'
        };

        function link(scope, controller, attrs) {

        }

        return directive;
    }
}());

