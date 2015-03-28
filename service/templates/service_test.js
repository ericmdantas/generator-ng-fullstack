"use strict";

describe('SomeFactory', function()
{
    var _SomeService;

    beforeEach(module('myAwesomeApp'));

    beforeEach(inject(function($injector)
    {
        _SomeService = $injector.get('SomeService');
    }));

    describe('doSomething', function()
    {
        it('should doSomething', function()
        {
            _SomeService.doSomething();
        })
    })
})
