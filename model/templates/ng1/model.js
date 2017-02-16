;(function(ng) {
  'use strict';

  ng.module('<%= appName %>')
    .factory('<%= name %>', [
      function() {
        class <%= name %> {
          constructor() {
            this.name = '';
            this.birthDate = null;
          }

          isValid() {
            return !!this.name && !!this.birthDate;
          }
        }

        return <%= name %>;
      }
    ]);
}(window.angular));
