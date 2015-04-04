"use strict";

describe('RouterController', function()
{
    var _scope, _router;
    var CONTROLLER_NAME = 'RouterController as routerCrtl';

    beforeEach(module('myAwesomeApp'));

    beforeEach(inject(function($injector)
    {
      _scope = $injector.get('$rootScope').$new();
      _router = $injector.get('$router');
    }))

    describe('creation', function()
    {
        it('should create the controller correctly', inject(function($controller)
        {
            $controller(CONTROLLER_NAME, {$scope: _scope});
        }));

        it('should call config with the right params', inject(function($controller)
        {
            spyOn(_router, 'config').and.callFake(angular.noop);

            $controller(CONTROLLER_NAME, {$scope: _scope});

            expect(_router.config).toHaveBeenCalledWith([{path: '', component: 'todo'}]);
        }))
    })
})
