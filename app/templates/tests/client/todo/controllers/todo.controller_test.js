"use strict";

describe('todos.controller', function()
{
    var _scope, _Todo;
    var CONTROLLER_NAME = 'TodosController as todosCtrl';

    beforeEach(module('myAwesomeApp'));

    beforeEach(inject(function($injector)
    {
        _scope = $injector.get('$rootScope').$new();
        _Todo = $injector.get('Todo');
    }))

    describe('init', function()
    {
        it('should be initialized correctly', inject(function($controller)
        {
            $controller(CONTROLLER_NAME, {$scope: _scope});
        }));

        it('should have todo as the instanceof Todo', inject(function($controller)
        {
            $controller(CONTROLLER_NAME, {$scope: _scope});

            expect(_scope.todosCtrl.todo instanceof _Todo).toBeTruthy();
        }))
    })
})
