1.7

Added http2/https support for server and fixed some bugs.

- Golang supports Http/2;
- Node is stuck with Https, because of an incompatibility between express and the Http/2 module.

1.6

Huge refactoring making things easier to reuse and maintain. It was also the release responsible for the following improvements:

- Build files were separated to help the user understand and organize it better;
- Build was improved to better support Http/2 enviroments, no more concatenation, cache is killed every build, etc;
- Full Angular2 integration, complete with subgenerators, such as component, directives, pipe, etc.;
- Full client module, which generates: factory, services, models, directive, template, style, controllers/components as well as its tests. You you have to do is call: `$ yo ng-fullstack:module user --feature user`.
