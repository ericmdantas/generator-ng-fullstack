"use strict";

angular
  .module('myAwesomeApp')
  .directive('someDirective', [function()
  {
    var _link = function(scope, element, attrs)
    {

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
  }]);
