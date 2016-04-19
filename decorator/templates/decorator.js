;(function(ng) {
  'use strict';

  ng.angular
    .module('<%= appName %>')
    .config(['$provide', function($provide) {
        $provide.decorator('SomethingToBeDecorated', ['$delegate',function($delegate) {
            return $delegate;
          }
        ]);
      }
    ]);
}(window.angular));
