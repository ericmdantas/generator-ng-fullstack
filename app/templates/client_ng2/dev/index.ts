/// <reference path="typings/tsd.d.ts" />

import {bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Todo} from 'components/todo.js';

bootstrap(Todo, [HTTP_PROVIDERS]);
