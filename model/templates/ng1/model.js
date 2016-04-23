;(function(ng) {
  'use strict';

  ng
    .module('<%= appName %>')
    .factory('<%= name %>', [
      function() {
        var <%= name %> = function() {
          var self = this;

          self.name = undefined;
          self.birthdate = undefined;

          return self;
        };

        <%= name %>.prototype.isValid = function() {
          return !!this.name && !!this.birthdate;
        };

        return <%= name %>;
      }
    ]);
}(window.angular));
