;(function(ng) {
  'use strict';

  ng.module('myAwesomeApp')
    .service('<%= name %>', ['$q', function($q) {
        this.doSomething = function() {
          return $q.when({yo: '!'});
        };
      }
    ]);
}(window.angular));
