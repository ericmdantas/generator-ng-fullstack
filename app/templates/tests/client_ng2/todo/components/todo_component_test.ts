import {
  it,
  expect,
  describe,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';

import {
  provide
} from 'angular2/core';

import {
  Observable
} from 'rxjs/Observable';

import {TodoCmp} from '../client/dev/todo/todo_cmp.js';
import {TodoService} from '../client/dev/todo/todo_service.js';

class MockTodoService extends TodoService {
  getAll() {
    return {
      subscribe(cb) {
        return cb();
      }
    }
  }

  add(message: string) {
    return {
      subscribe(cb) {
        return cb(message);
      }
    }
  }

  remove(id: string) {
    return {
      subscribe(cb) {
        return cb(id);
      }
    }
  }
}

describe('todo_component', () => {
  beforeEachProviders(() => [provide(TodoService, {useClass: MockTodoService})]);

  describe('creation', () => {
    it('should create the component correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TodoCmp).then((fixture) => {
        fixture.detectChanges();

        let compiled = fixture.debugElement.nativeElement;

        expect(compiled).toBeDefined();
      });
    }));

    it('should inicialize the cmp correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TodoCmp).then((fixture) => {
        let instance = fixture.debugElement.componentInstance;

        spyOn(instance, '_getAll').and.callFake(() => {});

        fixture.detectChanges();

        expect(instance._getAll).toHaveBeenCalled();
      });
    }));

    it('should call add correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TodoCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        let _todoMsg = 'yo';

        instance.add(_todoMsg);
      });
    }));

    it('should call remove correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TodoCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        let _id = 'abc123';

        instance.remove(_id);
      });
    }));
  });
});
