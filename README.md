![logo](https://github.com/georgeedwards/generator-ng-fullstack/raw/master/logo.png)


`ng-fullstack` is a yeoman generator that allows you to rapidly get started with prototyping web applications with the newest technologies available. It allows you to choose between a `client app`, a `server app` or a `fullstack app`. All of them simple to extend and powerful to use.

### Website

Check the stack and try it online [https://ng-fullstack.surge.sh](https://ng-fullstack.surge.sh).


### Getting Started

If you already have Node/Go setup, all you have to do is run:

```shell
$ npm install -g generator-ng-fullstack
```

Or, if you want to run the latest (in development) version:

```shell
$ npm install -g generator-ng-fullstack@next
```

Then, to create a new app, simpy run:

```shell
$ yo ng-fullstack
```

A few questions will be shown, make sure you answer them and, there you go! Now you have the [boilerplate app working](https://github.com/ericmdantas/generator-ng-fullstack/wiki/Getting-Started#result).

Since some parts of the stack might be new to you, the boilerplate app is a simple TodoApp using the best approaches, separations of concerns and responsabilities - so you can see how it all works together as well as study the chosen stack.
For more info, checkout the [Todo App](https://github.com/ericmdantas/generator-ng-fullstack/wiki/ToDo-Walkthrough) in the wiki.

Check the [getting started](https://github.com/ericmdantas/generator-ng-fullstack/wiki/Getting-Started) session in the wiki for more info.


### Development

| Branch | Status | Coverage | Version |
|:------:|:------:|:--------:|:-------:|
| `master` | [![Build Status](https://secure.travis-ci.org/ericmdantas/generator-ng-fullstack.png?branch=master)](https://travis-ci.org/ericmdantas/generator-ng-fullstack) | [![Coverage Status](https://coveralls.io/repos/github/ericmdantas/generator-ng-fullstack/badge.svg?branch=master)](https://coveralls.io/github/ericmdantas/generator-ng-fullstack?branch=master) | [![npm version](https://badge.fury.io/js/generator-ng-fullstack.svg)](https://badge.fury.io/js/generator-ng-fullstack) |  
| `next`    | [![Build Status](https://secure.travis-ci.org/ericmdantas/generator-ng-fullstack.png?branch=v1.9)](https://travis-ci.org/ericmdantas/generator-ng-fullstack) | [![Coverage Status](https://coveralls.io/repos/github/ericmdantas/generator-ng-fullstack/badge.svg?branch=master)](https://coveralls.io/github/ericmdantas/generator-ng-fullstack?branch=v1.9) | --- |


### Wiki

In the wiki you'll find: [the sub-generators](https://github.com/ericmdantas/generator-ng-fullstack/wiki/Sub-Generators), [FAQ](https://github.com/ericmdantas/generator-ng-fullstack/wiki/FAQ), [Troubleshooting](https://github.com/ericmdantas/generator-ng-fullstack/wiki/Troubleshooting), [walkthroughs](https://github.com/ericmdantas/generator-ng-fullstack/wiki/Todo-Walkthrough), [tips for deployment](https://github.com/ericmdantas/generator-ng-fullstack/wiki/Deploying-to-Heroku) and [much more](https://github.com/ericmdantas/generator-ng-fullstack/wiki).


### Chat

Do you have a doubt, want to talk about something cool or just want to chat? Join us on the [gitter chat](https://gitter.im/ericmdantas/generator-ng-fullstack) :smile:.


### Contributing

Pull requests, helping others solving issues, improving the Wiki, among other tasks, are all valid, and more than welcome, contributions - don't hesitate.

When doing a Pull Request, make sure you target the `dev` branch, `master` is supposed to be an *stable* branch - the changes are merged only at the end of a version.  

As for tests, run simply run `npm t` - it'll run both unit and acceptance tests.


### Resources

Here are some links to help you understand some of the parts of the stack:

- [Angular 2](https://angular.io/docs/ts/latest/tutorial/)
- [Aurelia](https://github.com/aurelia/framework)
- [Vue](https://github.com/vuejs/vue)
- [TypeScript](http://www.typescriptlang.org/Tutorial)
- [Babel](https://github.com/babel/babel)
- [Webpack](https://webpack.github.io/)
- [Gulp](https://github.com/gulpjs/gulp)
- [Go](https://tour.golang.org/welcome/1)
- [Echo](https://github.com/labstack/echo)
- [Gin](https://github.com/gin-gonic/gin)
- [MongoDB](https://university.mongodb.com/)
- [HTTP/2](https://daniel.haxx.se/http2/)


### License

MIT
