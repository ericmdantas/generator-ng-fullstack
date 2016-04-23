;(function(ng) {
  'use strict';

  ng.module('<%= appName %>')
    .factory('<%= name %>', [
      function() {
        var <%= name %> = function() {
          this.name = '';
          this.birthDate = null;
        };

        <%= name %>.prototype.isValid = function() {
          return !!this.name && !!this.birthDate;
        };

        return <%= name %>;
      }
    ]);
}(window.angular));
