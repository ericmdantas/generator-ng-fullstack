;(function(ng) {
  'use strict';

  ng.module('<%= appName %>')
    .config([
      '$locationProvider',
      function($locationProvider) {
        <% if (!cordova) { %>
        $locationProvider.html5Mode(true);
        <% } else {%>
        $locationProvider.html5Mode(true);
        <% } %>
      }
    ]);
}(window.angular));
