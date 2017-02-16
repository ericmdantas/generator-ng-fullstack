;(function(ng) {
  'use strict';

  ng.module('<%= appName %>')
    .factory('<%= name %>', [
      function() {
        class <%= name %> {
          constructor() {
            this.something = 123;
          }
          
          isValid() {
            return !!this.something;
          }
        }

        return <%= name %>;
      }
    ]);
}(window.angular));
