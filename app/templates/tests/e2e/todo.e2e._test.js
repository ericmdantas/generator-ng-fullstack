"use strict";

describe('todo.e2e', function() {
    var SUBMIT_TODO_BUTTON = '#submit-todo-button';
    var TODO_MODEL = 'todosCtrl.todo.todoMessage';
    var CLOSE_TODO = '.todo-done';

    beforeEach(function() {
        browser.get('/');
    })

    describe('creation', function() {
        it('should have the submit button disabled', function() {
            expect($(SUBMIT_TODO_BUTTON).isEnabled()).toBeFalsy();
        })

        it('should have the right title', function() {
            expect(browser.getTitle()).toEqual('Stuff Todo!');
        })
    })

    describe('addition', function() {
        it('should add a new todo - enter', function() {
            element(by.model(TODO_MODEL)).sendKeys('This was added by Protractor :D (at '+String(new Date())+')');

            element(by.model(TODO_MODEL)).sendKeys(protractor.Key.ENTER);

            var _count = element.all(by.repeater('t in todosCtrl.todos')).count();

            expect(_count).toBeGreaterThan(0);
        })

        it('should add a new todo - click', function() {
          element(by.model(TODO_MODEL)).sendKeys('Added by Protractor :D (at '+String(new Date())+')');

          $(SUBMIT_TODO_BUTTON)
            .click()
            .then(function() {
                element.all(by.repeater('t in todosCtrl.todos'))
                  .count()
                  .then(function(count) {
                      expect(count).toBeGreaterThan(0);
                  });
            });
        })
    })

    describe('deletion', function() {
        it('should delete a todo', function() {
            var _firstCount = element.all(by.repeater('t in todosCtrl.todos')).count();

            $$(CLOSE_TODO)
              .get(0)
              .click(function() {
                  var _secondCount = element.all(by.repeater('t in todosCtrl.todos')).count();

                  expect(_secondCount).toBeLessThan(_firstCount);
              });
        })
    })
})
