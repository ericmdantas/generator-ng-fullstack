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
    it('should be valid if name and birth date is setted', function() {
      var m = new _<%= name %>();
      m.name = 'Felipe Smith';
      m.birthDate = new Date();

      expect(m.isValid()).toBe(true);
    });

    it('should be not valid if name or birth date is not setted', function () {
      var m1 = new _<%= name %>();
      expect(m1.isValid()).toBe(false);

      var m2 = new _<%= name %>();
      m2.birthDate = new Date();
      expect(m2.isValid()).toBe(false);

      var m3 = new _<%= name %>();
      m3.name = 'Felipe Smith';
      expect(m3.isValid()).toBe(false);
    })
  })
});
