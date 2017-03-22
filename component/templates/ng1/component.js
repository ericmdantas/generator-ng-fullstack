; (function (ng) {
  'use strict';

  ng.module('<%= appName %>')
    .component('<%= name %>', {
      templateUrl: '<%= feature %>/templates/<%= name %>.html',
      controller: [function () {
        this.user = {
          name: 'world'
        };
      }]
    });
}(window.angular));
