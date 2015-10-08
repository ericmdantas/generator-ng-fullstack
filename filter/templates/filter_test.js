"use strict";

describe('<%= name %>Service', function() {
  var _<%= name %>;

  beforeEach(module('myAwesomeApp'));

  beforeEach(inject(function($filter) {
    _<%= name %> = $filter('<%= name %>');
  }));

  describe('doSomething', function() {
    it('should return an empty string', function() {
      var _input = null;
      expect(_<%= name %>(_input)).toEqual('');
    })

    it('should return the input', function() {
      var _input = 'a';
      expect(_<%= name %>(_input)).toEqual(_input);
    })
  })
})
