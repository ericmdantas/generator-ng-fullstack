## [1.10](https://github.com/ericmdantas/generator-ng-fullstack/releases/tag/v1.10.0)

### New Stuff

#### Fullstack

- Implemented option to generate clean project, no TODO boilerplate


## [1.9](https://github.com/ericmdantas/generator-ng-fullstack/releases/tag/v1.9.0)

### New Stuff

#### Tools

- Created [ngf](https://github.com/ericmdantas/ngf), a simple alias for `ng-fullstack` to make your app development even faster

#### Client

- Added Less and Sass support for the client side
- Added Aurelia as a client framework
- Added Vue as a client framework
- Added compilation/uglify step with Babili
- Added possibility to create components for Angular 1.x (@bernardbr)


#### Server

- Added Koa web framework for Node servers
- Added HTTP/2 implementation for Node.js servers (both Express and Koa)
- Added Gin web framework for Go servers
- Added Nodemon as a module to restart the Node server when the files change


#### Fullstack

- Added an option to choose a different git server, other than github
- Added option to work with tests and source code side by side


### Breaking change

- When in dev, always use `npm run dev` to start both server and client
- When installing the deps, if you're using typescript, you'll have to run `typings install` manually; the `preinstall` and `postinstall` script hooks were removed
- Golang's Echo was updated to `v3` - so, some stuff changed

#### Internal

- Did a lot of code refactoring
- Changed the folders structure

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
