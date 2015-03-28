"use strict";

describe('SomeController', function()
{
    var _scope;
    var CONTROLLER_NAME = 'SomeController as someCtrl';

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
        }));
    })
})
