'use strict';

describe('<%= name %>', function() {
    var _<%= name %>;

    beforeEach(module('<%= appName %>'));

    beforeEach(inject(function($injector) {
      _<%= name %> = $injector.get('<%= name %>');
    }));

    describe('doSomething', function() {
      it('should doSomething', function() {
          _<%= name %>.doSomething();
      });
    });
});
