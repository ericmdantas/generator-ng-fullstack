import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {TodoCmp} from './todo/components/todo-cmp';

bootstrap(TodoCmp, [HTTP_PROVIDERS]);
