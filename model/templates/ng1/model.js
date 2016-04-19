;(function(ng) {
  'use strict';

  ng.module('<%= appName %>')
    .factory('<%= name %>', [function() {
        var Something = function() {

        };

        return Something;
      }
    ]);
}(window.angular));
