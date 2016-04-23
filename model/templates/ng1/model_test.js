'use strict';

describe('<%= name %>', function() {
  var _<%= name %>;

  beforeEach(module('<%= appName %>'));

  beforeEach(inject(function($injector) {
    _<%= name %> = $injector.get('<%= name %>');
  }));

  describe('creation', function() {
    it('return a function', function() {
      expect(typeof _<%= name %>).toBe('function');
    });
  });

  describe('isValid', function() {
    it('should be valid if name and birthdate is setted', function() {
      _<%= name %>.name = 'Felipe Smith';
      _<%= name %>.birthdate = new Date();

      expect(_<%= name %>.isValid()).toBe(true);
    });
  })
});
