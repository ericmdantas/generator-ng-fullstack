import mongoose from "mongoose";
import TodoDAO from "../../../../server/api/todo/dao/todo-dao";
import {expect} from "chai";
import {setupMongoose, createTodos} from "../../_helpers/db";

describe("todo.dao", () => {
    before(() => {
        setupMongoose(mongoose);
    });

    afterEach((done) => {
        TodoDAO.remove({}, () => done());
    })

    describe("getAll", () => {
        beforeEach((done) => {
            createTodos()
            .then(() => done())
            .catch(() => done());
        })

        it("should get all todos", (done) => {
            let _onSuccess = todos => {
                expect(todos).to.be.defined;
                expect(todos[0]).to.have.property("todoMessage").and.to.equal("aaaaaaa0");
                expect(todos[0]).to.have.property("createdAt").and.to.be.defined;

                done();
            }

            let _onError = (err) => {
                expect(true).to.be.false; // should not come here
            }

            TodoDAO
              .getAll()
              .then(_onSuccess)
              .catch(_onError);
        })
    })

    describe("createTodo", () => {
        it("should throw an error, object passed is not defined", (done) => {
            let _undefinedTodo = undefined;

            let _onSuccess = () => {
                expect(true).to.be.false; // should not come here;
            }

            let _onError = error => {
                expect(error).to.be.defined;

                done();
            }

            TodoDAO
              .createTodo(_undefinedTodo)
              .then(_onSuccess)
              .catch(_onError);
        })

        it("should create the todo correctly", (done) => {
            let _todo = {todoMessage: "abc"};

            let _onSuccess = todo => {
                expect(todo).to.be.defined;
                expect(todo.todoMessage).to.equal("abc");
                expect(todo.createdAt).to.be.defined;

                done();
            }

            let _onError = () => {
                expect(true).to.be.false;
            }

            TodoDAO
              .createTodo(_todo)
              .then(_onSuccess)
              .catch(_onError);
        })
    })

    describe("deleteTodo", () => {
        beforeEach((done) => {
            createTodos()
              .then(() => done())
              .catch(() => done());
        })

        it("should get an error back, id is not defined", (done) => {
            let _id = null;

            let _onSuccess = () => {
                expect(true).to.be.false;
            }

            let _onError = error => {
                expect(error).to.be.defined;

                done();
            }

            TodoDAO
              .deleteTodo(_id)
              .then(_onSuccess)
              .catch(_onError);
        })

        it("should delete the doc successfully", (done) => {
          let _id = "507c7f79bcf86cd7994f6c10";

          let _onSuccess = () => {
            expect(true).to.be.true;

            done();
          }

          let _onError = () => {
            expect(true).to.be.false;
          }

          TodoDAO
            .deleteTodo(_id)
            .then(_onSuccess)
            .catch(_onError);
        })
    })
})
