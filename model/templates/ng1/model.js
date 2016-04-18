;(function(ng) {
  'use strict';

  ng.module('myAwesomeApp')
    .factory('<%= name %>', [function() {
        var Something = function() {

        };

        return Something;
      }
    ]);
}(window.angular));
