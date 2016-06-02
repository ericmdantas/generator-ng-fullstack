## [1.9](https://github.com/ericmdantas/generator-ng-fullstack/releases/tag/v1.9.0)

Stuff for 1.9. Coming soon.

## [1.8](https://github.com/ericmdantas/generator-ng-fullstack/releases/tag/v1.8.0)

Better separation of concerns:

- Option to have a separated static server such as: Nginx, Apache, IIS, etc;
- Cordova friendly app - available for client only app with Angular 1;
- Single command to run server and client (with watcher);
- Do not serve files from the root.

### Breaking change

Since the files are not being served from the root anymore, getting dependencies for Angular 2 applications had to change. Both in components and in index.html. Before you had to come down all the way from the root.

Before: `node_modules/angular2/somewhere...`;

After: `./angular2/somewhere...`.

The same goes for the way components pick up `templateUrl` and `styleUrls`:

Before: `client/dev/todo/templates/todo.html`;

After: `todo/templates/todo.html`;


## [1.7](https://github.com/ericmdantas/generator-ng-fullstack/releases/tag/v1.7.0)

Added http2/https support for server and fixed some bugs.

- Golang supports Http/2;
- Node is stuck with Https, because of an incompatibility between express and the Http/2 module.

##[1.6](https://github.com/ericmdantas/generator-ng-fullstack/releases/tag/v1.6.0)

Huge refactoring making things easier to reuse and maintain. It was also the release responsible for the following improvements:

- Build files were separated to help the user understand and organize it better;
- Build was improved to better support Http/2 enviroments, no more concatenation, cache is killed every build, etc;
- Full Angular2 integration, complete with subgenerators, such as component, directives, pipe, etc.;
- Full client module, which generates: factory, services, models, directive, template, style, controllers/components as well as its tests. You you have to do is call: `$ yo ng-fullstack:module user --feature user`.
