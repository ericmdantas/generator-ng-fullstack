;(function(ng) {
  'use strict';

  ng
    .module('<%= appName %>')
    .filter('<%= name %>', [
      function(input) {
        if (!input) {
          return '';
        }

        return input;
      }
    ]);
}(window.angular));
