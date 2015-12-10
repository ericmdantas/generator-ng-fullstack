import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';

import {TodoCmp} from './todo/todo_cmp.js';

bootstrap(TodoCmp, [HTTP_PROVIDERS]);
