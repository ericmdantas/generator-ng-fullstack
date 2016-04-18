;(function(ng) {
  'use strict';

  ng.angular
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
}(window.angular));
