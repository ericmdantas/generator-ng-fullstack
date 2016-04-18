;(function(ng) {
  'use strict';

  ng.module('myAwesomeApp')
    .directive('<%= name %>', [
      function() {
        var _link = function(scope, element, attrs) {
          console.log(scope);
          console.log(element);
          console.log(attrs);
        };

        var _restrict = 'A';
        var _scope = {};
        var _replace = true;

        return {
          restrict: _restrict,
          replace: _replace,
          link: _link,
          scope: _scope
        };
      }
    ]);
}(window.angular));
