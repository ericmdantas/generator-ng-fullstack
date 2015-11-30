import {
  it,
  expect,
  describe,
  inject,
  injectAsync,
  TestComponentBuilder
} from 'angular2/testing';

import {TodoCmp} from '../client/dev/todo/todo_cmp';

describe('todo_component', () => {
  describe('creation', () => {
    it('should create the component correctly', inject([TestComponentBuilder], (tcb) => {
      return tcb.createAsync(TodoCmp).then((fixture) => {

      });
    }));
  });
});
