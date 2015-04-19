(function () {
  "use strict";

  /**
   * <%= name %>
   */
  angular
    .module('myAwesomeApp')
    .controller('<%= name %>', <%= name %>);

  <%= name %>.$inject = [];

  /* @ngInject */
  function <%= name %>() {
    /* jshint validthis: true */
    var vm = this;

    // Models
    vm.heading = 'Hello there :D';

    // Method Declarations
    vm.method = method;

    ////////////////

    function method() {
      // Meat & Potatoes here
    }
  }
}());

