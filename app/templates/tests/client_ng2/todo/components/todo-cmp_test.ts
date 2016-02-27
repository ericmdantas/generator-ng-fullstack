/// <reference path="../../../../typings/main.d.ts" />

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

import {setBaseTestProviders} from 'angular2/testing';

import {
  TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';

import {TodoCmp} from '../../../../client/dev/todo/components/todo-cmp';
import {TodoService} from '../../../../client/dev/todo/services/todo-service';

class MockTodoService extends TodoService {
  getAll():Observable<any> {
    return new Observable((o) => {
      o.next([]);
    })
  }

  add(message: string):Observable<any> {
    return new Observable((o) => {
      o.next(message);
    });
  }

  remove(id: string):Observable<any> {
    return new Observable((o) => {
      o.next(id);
    });
  }
}

describe('todo_component', () => {
  setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

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
