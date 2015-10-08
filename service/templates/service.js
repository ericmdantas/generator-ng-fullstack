;(function(angular) {
  "use strict";

  angular
    .module('myAwesomeApp')
    .service('<%= name %>Service', ['$q', function($q) {
      this.doSomething = function() {

      };

    }]);

}(window.angular));
