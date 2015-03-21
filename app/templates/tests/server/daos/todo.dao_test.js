"use strict";

var mongoose = require('mongoose');
var TodoDAO = require('../../../server/api/todo/dao/todo.dao');
var expect = require('chai').expect;
var setupMongoose = require('../helpers/db').setupMongoose;
var createTodos = require('../helpers/db').createTodos;

describe('todo.dao', function()
{
    before(function()
    {
        setupMongoose(mongoose);
    });

    afterEach(function()
    {
        TodoDAO.remove();
    })

    describe('getAll', function()
    {
        beforeEach(function(done)
        {
            createTodos()
            .then(function()
            {
                done();
            }, function()
            {
              done();
            });

        })

        it('should get all todos', function(done)
        {
            var _onSuccess = function(todos)
            {
                expect(todos).to.be.defined;
                expect(todos[0]).to.have.property('todoMessage').and.to.equal('a0');
                expect(todos[0]).to.have.property('createdAt').and.to.be.defined;

                done();
            }

            var _onError = function()
            {
                expect(true).to.be.false; // should not come here;
            }

            TodoDAO
              .getAll()
              .then(_onSuccess)
              .catch(_onError);
        })
    })

    describe('createTodo', function()
    {
        it('should throw an error, object passed is not defined', function(done)
        {
            var _undefinedTodo = undefined;

            var _onSuccess = function()
            {
                expect(true).to.be.false; // should not come here;
            }

            var _onError = function(error)
            {
                expect(error).to.be.defined;

                done();
            }

            TodoDAO
              .createTodo(_undefinedTodo)
              .then(_onSuccess)
              .catch(_onError);
        })

        it('should create the todo correctly', function(done)
        {
            var _todo = {todoMessage: 'abc'};

            var _onSuccess = function(todo)
            {
                expect(todo).to.be.defined;
                expect(todo.todoMessage).to.equal('abc');
                expect(todo.createdAt).to.be.defined;

                done();
            }

            var _onError = function()
            {
                expect(true).to.be.false;
            }

            TodoDAO
              .createTodo(_todo)
              .then(_onSuccess)
              .catch(_onError);
        })
    })

    describe('deleteTodo', function()
    {
        beforeEach(function(done)
        {
            createTodos()
              .then(function()
              {
                  done();
              }, function()
              {
                done();
              });
        })

        it('should get an error back, id is not defined', function(done)
        {
            var _id = null;

            var _onSuccess = function()
            {
                expect(true).to.be.false;
            }

            var _onError = function(error)
            {
                expect(error).to.be.defined;

                done();
            }

            TodoDAO
              .deleteTodo(_id)
              .then(_onSuccess)
              .catch(_onError);
        })

        it('should delete the doc successfully', function(done)
        {
          var _id = '507c7f79bcf86cd7994f6c10';

          var _onSuccess = function()
          {
            expect(true).to.be.true;

            done();
          }

          var _onError = function()
          {
            expect(true).to.be.false;
          }

          TodoDAO
            .deleteTodo(_id)
            .then(_onSuccess)
            .catch(_onError);
        })
    })
})
