var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var todo_js_1 = require('components/todo.js');
angular2_1.bootstrap(todo_js_1.Todo, [http_1.HTTP_PROVIDERS]);
