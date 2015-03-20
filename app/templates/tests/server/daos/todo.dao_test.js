"use strict";

var mongoose = require('mongoose');
var Todo = require('../../../server/api/todo/dao/todo.dao');
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
        Todo.remove();
    })

    describe('getAll', function()
    {
        beforeEach(function(done)
        {
            createTodos()
            .then(function()
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

            Todo
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

            Todo
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

            Todo
              .createTodo(_todo)
              .then(_onSuccess)
              .catch(_onError);
        })
    })
})
