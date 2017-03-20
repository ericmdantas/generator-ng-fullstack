;(function(ng) {
  "use strict";

  ng.module("<%= appName %>")
    .config([
      "$locationProvider",
      function($locationProvider) {
        $locationProvider
          .html5Mode(true)
          .hashPrefix('*');
      }
    ]);
}(window.angular));
