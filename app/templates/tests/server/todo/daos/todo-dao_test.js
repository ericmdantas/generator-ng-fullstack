var mongoose = require('mongoose');
var TodoDAO = require('../../../../server/api/todo/dao/todo.dao');
var expect = require('chai').expect;
var setupMongoose = require('../../_helpers/db').setupMongoose;
var createTodos = require('../../_helpers/db').createTodos;

describe('todo.dao', () => {
    before(() => {
        setupMongoose(mongoose);
    });

    afterEach(() => {
        TodoDAO.remove();
    })

    describe('getAll', () => {
        beforeEach((done) => {
            createTodos()
            .then(() => done())
            .catch(() => done());
        })

        it('should get all todos', (done) => {
            var _onSuccess = todos => {
                expect(todos).to.be.defined;
                expect(todos[0]).to.have.property('todoMessage').and.to.equal('a0');
                expect(todos[0]).to.have.property('createdAt').and.to.be.defined;

                done();
            }

            var _onError = () => {
                expect(true).to.be.false; // should not come here;
            }

            TodoDAO
              .getAll()
              .then(_onSuccess)
              .catch(_onError);
        })
    })

    describe('createTodo', () => {
        it('should throw an error, object passed is not defined', (done) => {
            var _undefinedTodo = undefined;

            var _onSuccess = () => {
                expect(true).to.be.false; // should not come here;
            }

            var _onError = error => {
                expect(error).to.be.defined;

                done();
            }

            TodoDAO
              .createTodo(_undefinedTodo)
              .then(_onSuccess)
              .catch(_onError);
        })

        it('should create the todo correctly', (done) => {
            var _todo = {todoMessage: 'abc'};

            var _onSuccess = todo => {
                expect(todo).to.be.defined;
                expect(todo.todoMessage).to.equal('abc');
                expect(todo.createdAt).to.be.defined;

                done();
            }

            var _onError = () => {
                expect(true).to.be.false;
            }

            TodoDAO
              .createTodo(_todo)
              .then(_onSuccess)
              .catch(_onError);
        })
    })

    describe('deleteTodo', () => {
        beforeEach((done) => {
            createTodos()
              .then(() => done())
              .catch(() => done());
        })

        it('should get an error back, id is not defined', (done) => {
            var _id = null;

            var _onSuccess = () => {
                expect(true).to.be.false;
            }

            var _onError = error => {
                expect(error).to.be.defined;

                done();
            }

            TodoDAO
              .deleteTodo(_id)
              .then(_onSuccess)
              .catch(_onError);
        })

        it('should delete the doc successfully', (done) => {
          var _id = '507c7f79bcf86cd7994f6c10';

          var _onSuccess = () => {
            expect(true).to.be.true;

            done();
          }

          var _onError = () => {
            expect(true).to.be.false;
          }

          TodoDAO
            .deleteTodo(_id)
            .then(_onSuccess)
            .catch(_onError);
        })
    })
})
