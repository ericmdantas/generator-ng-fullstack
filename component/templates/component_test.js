"use strict";

describe('<%= name %>Controller', function()
{
    var _scope;
    var CONTROLLER_NAME = '<%= name %>Controller as <%= nameLowerCase %>Ctrl';

    beforeEach(module('myAwesomeApp'));

    beforeEach(inject(function($injector)
    {
        _scope = $injector.get('$rootScope').$new();
    }))

    describe('init', function()
    {
        it('should create the controller correctly', inject(function($controller)
        {
            $controller(CONTROLLER_NAME, {$scope: _scope});

            expect(_scope.<%= nameLowerCase %>.greeting).toEqual('Hello there :D');
        }));
    })
})
