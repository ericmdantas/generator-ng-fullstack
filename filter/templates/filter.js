;(function(ng) {
  'use strict';

  ng.module('myAwesomeApp')
    .filter('<%= name %>', [
      function(input) {
        if (!input) {
          return '';
        }

        return input;
      }
    ]);
}(window.angular));
