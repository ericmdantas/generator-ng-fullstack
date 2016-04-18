;(function() {
  'use strict';

  window.angular
    .module('myAwesomeApp')
    .config([
      '$provide',
      function($provide) {
        $provide.decorator('SomethingToBeDecorated', [
          '$delegate',
          function($delegate) {
            return $delegate;
          }
        ]);
      }
    ]);
}());
