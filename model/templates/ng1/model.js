;(function(angular) {
  'use strict';

  angular
    .module('myAwesomeApp')
    .factory('<%= name %>', [
      function() {
        var Something = function() {

        };

        return Something;
      }
    ]);
}(window.angular));
