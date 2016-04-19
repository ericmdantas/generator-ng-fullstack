'use strict';

describe('<%= name %>', function() {
    var _<%= name %>;

    beforeEach(module('<%= appName %>'));

    beforeEach(inject(function($injector) {
      _<%= name %> = $injector.get('<%= name %>');
    }));

    describe('instance', function() {
      it('should have the right prop for the instance', function() {
          var _something = new _<%= name %>();

          expect(_something.something).toEqual(123);
      });
    });

    describe('isValid', function() {
      it('should return true', function() {
          var _something = new _<%= name %>();

          expect(_something.isValid()).toBeTruthy();
      });
    });
});
