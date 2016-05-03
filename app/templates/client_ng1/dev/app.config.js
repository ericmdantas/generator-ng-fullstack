;(function(ng) {
  'use strict';

  ng.module('<%= appName %>')
    .config([
      '$locationProvider',
      function($locationProvider) {
        // in case you're using cordova, use false instead
        $locationProvider.html5Mode(true);
      }
    ]);
}(window.angular));
