"use strict";

describe('Todo', function()
{
    var _Todo;

    beforeEach(module('myAwesomeApp'));

    beforeEach(inject(function($injector)
    {
        _Todo = $injector.get('Todo');
    }));

    describe('instance', function()
    {
        it('should have the right prop for the instance', function()
        {
            var _todo = new _Todo();

            expect(_todo.something2do).toEqual('Walk the dog');
        });
    })

    describe('isValid', function()
    {
        it('should return false, invalid something2do', function()
        {
          var _todo = new _Todo();
          _todo.something2do = '';

          expect(_todo.isValid()).toBeFalsy();
        })

        it('should return true, new instance is valid', function()
        {
            var _todo = new _Todo();

            expect(_todo.isValid()).toBeTruthy();
        })
    })
})
