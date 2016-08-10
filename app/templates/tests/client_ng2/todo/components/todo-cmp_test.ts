/// <reference path="../../../../typings/index.d.ts" />

import {
  addProviders,
  TestComponentBuilder,
  async,
  inject
} from '@angular/core/testing';

import {
  Observable
} from 'rxjs/Observable';

<% if (testsSeparated) { %>
  import {TodoCmp} from '../../../../client/dev/todo/components/todo-cmp';
  import {TodoService} from '../../../../client/dev/todo/services/todo-service';
<% } else { %>
  import {TodoCmp} from './todo-cmp';
  import {TodoService} from '../services/todo-service';
<% } %>

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
  beforeEach(() => addProviders([
    {
      provide: TodoService,
      useClass: MockTodoService
    }
  ]));

  describe('creation', () => {
    it('should create the component correctly', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TodoCmp).then((fixture) => {
        fixture.detectChanges();

        let compiled = fixture.debugElement.nativeElement;

        expect(compiled).toBeDefined();
      });
    })));

    it('should inicialize the cmp correctly', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TodoCmp).then((fixture) => {
        let instance = fixture.debugElement.componentInstance;

        spyOn(instance, '_getAll').and.callFake(() => {});

        fixture.detectChanges();

        expect(instance._getAll).toHaveBeenCalled();
      });
    })));

    it('should call add correctly', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TodoCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        let _todoMsg = 'yo';

        instance.add(_todoMsg);
      });
    })));

    it('should call remove correctly', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TodoCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        let _id = 'abc123';

        instance.remove(_id);
      });
    })));
  });
});
