'use strict';

describe('<%= name %>', function() {
    var _scope, _compile, _element;

    beforeEach(module('<%= appName %>'));

    beforeEach(inject(function($injector) {
        _scope = $injector.get('$rootScope').$new();
        _compile = $injector.get('$compile');

        var _html = '<<%= name %>></<%= name %>>';

        _element = window.angular.element(_html);

        _compile(_element)(_scope);
        _scope.$digest();
    }));

    describe('init', function() {
        it('should have the directive created', function() {
            expect(_element).toBeDefined();
        });
    });
});
