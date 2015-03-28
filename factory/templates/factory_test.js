"use strict";

describe('SomeFactory', function()
{
    var _SomeFactory;

    beforeEach(module('myAwesomeApp'));

    beforeEach(inject(function($injector)
    {
        _SomeFactory = $injector.get('SomeFactory');
    }));

    describe('instance', function()
    {
        it('should have the right prop for the instance', function()
        {
            var _something = new _SomeFactory();

            expect(_something.something).toEqual(123);
        })
    })

    describe('isValid', function()
    {
        it('should return true', function()
        {
            var _something = new _SomeFactory();

            expect(_something.isValid()).toBeTruthy();
        })
    })
})
