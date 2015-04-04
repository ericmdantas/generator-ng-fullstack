"use strict";

angular
  .module('myAwesomeApp')
  .controller('<%= name %>Controller', [function()
  {
    var self = this;

    self.greeting = 'Hello there :D';
  }]);
