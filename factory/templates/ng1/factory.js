;(function(ng) {
  'use strict';

  ng.module('myAwesomeApp')
    .factory('<%= name %>', [
      function() {
        var <%= name %> = function() {
          this.something = 123;
        };

        <%= name %>.prototype.isValid = function() {
          return !!this.something;
        };

        return <%= name %>;
      }
    ]);
}(window.angular));
