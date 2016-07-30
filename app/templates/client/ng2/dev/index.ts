import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {TODO_ROUTES_PROVIDER} from './todo/components/todo-route';
import {App} from './app';

bootstrap(App, [
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),

  TODO_ROUTES_PROVIDER
]);
