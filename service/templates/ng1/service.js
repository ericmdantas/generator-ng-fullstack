;(function(ng) {
  'use strict';

  ng
    .module('<%= appName %>')
    .service('<%= name %>', [
      '$q',
      function($q) {
        var self = this;

        self.doSomething = function() {
          return $q.when({
            yo: '!'
          });
        };

        return self;
      }
    ]);
}(window.angular));
