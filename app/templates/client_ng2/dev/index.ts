import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';

import {TodoCmp} from './todo/components/todo_cmp';

bootstrap(TodoCmp, [HTTP_PROVIDERS]);
