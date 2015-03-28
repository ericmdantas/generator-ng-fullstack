"use strict";

describe('SomeDirective', function()
{
    var _scope, _compile, _element;

    beforeEach(module('myAwesomeApp'));

    beforeEach(inject(function($injector)
    {
        _scope = $injector.get('$rootScope').$new();
        _compile = $injector.get('$compile');

        var _html = '<some-dir></some-dir>';

        _element = angular.element(_html);

        _compile(_element)(_scope);
        _scope.$digest();
    }))

    describe('init', function()
    {
        it('should have the directive created', function()
        {
            expect(_element).toBeDefined();
        })
    })
})
