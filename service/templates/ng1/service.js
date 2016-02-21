;(function(angular) {
  "use strict";

  angular
    .module('myAwesomeApp')
    .service('<%= name %>', ['$q', function($q) {
      this.doSomething = function() {

      };
    }]);

}(window.angular));
