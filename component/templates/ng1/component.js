; (function (ng) {
  'use strict';

  const TEMPLATE = `
     <div>
       <h1>Hello, {{$ctrl.user.name}}</h1>
     </div>!</p>
  `;

  ng.module('<%= appName %>', [])
    .component('<%= name %>', {
      template: TEMPLATE,
      controller: [function () {
        this.user = {
          name: 'world'
        };
      }]
    });
}(window.angular));
