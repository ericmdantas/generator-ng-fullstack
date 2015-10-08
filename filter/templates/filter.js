;(function(angular) {
  "use strict";

  angular
    .module('myAwesomeApp')
    .filter('<%= name %>', [function(input) {
        if (!input)
          return '';

        return input;
    }]);

}(window.angular));
