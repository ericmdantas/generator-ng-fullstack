;(function(ng) {
  'use strict';

  ng.module('<%= appName %>')
    .service('<%= name %>', ['$q', function($q) {
        this.doSomething = function() {
          return $q.when({yo: '!'});
        };
      }
    ]);
}(window.angular));
