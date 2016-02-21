/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';

import {TodoCmp} from './todo/components/todo-cmp';

bootstrap(TodoCmp, [HTTP_PROVIDERS]);
