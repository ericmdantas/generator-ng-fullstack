"use strict";

describe('thing.controller', function()
{
    var _scope;
    var CONTROLLER_NAME = 'ThingsController as thingsCtrl';

    beforeEach(module('myAwesomeApp'));

    beforeEach(inject(function($injector)
    {
        _scope = $injector.get('$rootScope').$new();
    }))

    describe('init', function()
    {
        it('should be initialized correctly', inject(function($controller)
        {
            $controller(CONTROLLER_NAME, {$scope: _scope});
        }));
    })
})
