'use strict';

describe('<%= name %>', function() {
  var _<%= name %>;

  beforeEach(module('<%= appName %>'));

  beforeEach(inject(function($filter) {
    _<%= name %> = $filter('<%= name %>');
  }));

  describe('doSomething', function() {
    it('should return an empty string', function() {
      var _input = null;
      expect(_<%= name %>(_input)).toEqual('');
    });

    it('should return the input', function() {
      var _input = 'a';
      expect(_<%= name %>(_input)).toEqual(_input);
    });
  });
});
