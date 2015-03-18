"use strict";

angular
  .module('myAwesomeApp')
  .controller('ThingsController', [function()
  {
      var self = this;

      self.thing = {name: 'A'};
  }]);
