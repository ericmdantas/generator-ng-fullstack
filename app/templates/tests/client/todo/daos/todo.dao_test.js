"use strict";

describe('todo.dao', function()
{
    var _rootScope, _scope, _httpBackend, _TodoDAO;
    var URL_GET_ALL = '/api/todos';

    beforeEach(module('myAwesomeApp'));

    beforeEach(inject(function($injector)
    {
        _rootScope = $injector.get('$rootScope');
        _scope = _rootScope.$new();
        _httpBackend = $injector.get('$httpBackend');
        _TodoDAO = $injector.get('TodoDAO');
    }))

    describe('getAll', function()
    {
        describe('error', function()
        {
          it('should try to get todos from the server, but the server return an error', function()
          {
            var _response = {someError: ':('};

            _httpBackend.expectGET(URL_GET_ALL).respond(400, _response);

            var _onSuccess = function()
            {
              expect(true).toBeFalsy(); // should not come here
            }

            var _onError = function(error)
            {
              expect(error).toBeDefined();
              expect(error.data.someError).toEqual(_response.someError);
            }

            _TodoDAO
              .getAll()
              .then(_onSuccess)
              .catch(_onError)

            _httpBackend.flush();
          })
        })

        describe('success', function()
        {
            it('should try get todos from the server, server returns OK', function()
            {
              var _response = [{an: 'array', of: 'todos'}];

              _httpBackend.expectGET(URL_GET_ALL).respond(200, _response);

              var _onSuccess = function(todos)
              {
                  expect(angular.equals(_response.an, todos.an));
                  expect(angular.equals(_response.of, todos.of));
              }

              var _onError = function()
              {
                expect(true).toBeFalsy(); // should not come here
              }

              _TodoDAO
                .getAll()
                .then(_onSuccess)
                .catch(_onError)

              _httpBackend.flush();
            })
        })
    })
});
