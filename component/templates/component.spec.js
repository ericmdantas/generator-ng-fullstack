"use strict";

describe('<%= name %>Controller', function () {
  var scope;
  var controller = '<%= name %> as <%= nameLowerCase %>';

  beforeEach(module('myAwesomeApp'));

  beforeEach(inject(function () {
    scope = $rootScope.$new();
  }));

  it('should have the correct heading', function () {
    expect(scope.heading).toBeUndefined();

    $controller(controller, {$scope: scope});

    expect(scope.<%= nameLowerCase %>.heading.toEqual('Hello there :D'));
  });
});
