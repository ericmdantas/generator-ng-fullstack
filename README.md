![logo](https://github.com/georgeedwards/generator-ng-fullstack/raw/master/logo.png)

[![Build Status](https://secure.travis-ci.org/ericmdantas/generator-ng-fullstack.png?branch=master)](https://travis-ci.org/ericmdantas/generator-ng-fullstack)
[![Coverage Status](https://coveralls.io/repos/github/ericmdantas/generator-ng-fullstack/badge.svg?branch=master)](https://coveralls.io/github/ericmdantas/generator-ng-fullstack?branch=master)
[![npm version](https://badge.fury.io/js/generator-ng-fullstack.svg)](https://badge.fury.io/js/generator-ng-fullstack)
[![Dependency Status](https://img.shields.io/david/ericmdantas/generator-ng-fullstack.svg)](https://david-dm.org/ericmdantas/generator-ng-fullstack)
[![Dev-Dependency Status](https://img.shields.io/david/dev/ericmdantas/generator-ng-fullstack.svg)](https://david-dm.org/ericmdantas/generator-ng-fullstack#info=devDependencies)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ericmdantas/generator-ng-fullstack?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Generator ng-Fullstack is a project to allow you to rapidly get started with prototyping full-stack web applications, with the newest technologies available. Based of [Yeoman](http://yeoman.io/), this is the next generation of full-stack generators. We support the following technology options to allow you to customise your stack (Pick one from each column!).

| Client        | Server        | Node (Compiler) |
| :-------------: |:-------------:| :---------------:|
| Angular 1.x for client (JS)      | node + express + mongoose + mongodb | no compiler  |
| Angular 2.x for client (TS)      | go + echo + mgo + mongodb      |   Babel          |
|  -- |    --  |    Typescript          |

There are many other generators out there, but they are often out of date and don't reflect the newest technologies. We plan to keep this going strong and updated!

You'll be working with the latest versions of:

+ [Angular 1.x](https://github.com/angular/angular.js) / [Angular 2.x](https://github.com/angular/angular) - Both the classic and the new version of the framework that changed the way we create web applications;
+ [Bootstrap](https://github.com/twbs/bootstrap) - A sleek, intuitive, and powerful mobile-first front-end framework for faster and easier web development;
+ [Node](https://github.com/nodejs/node) / [Golang](https://github.com/golang/go) - Either use Node or Go, both are made to handle the most the web brings;
+ [Babel](https://github.com/babel/babel) / [Typescript](https://github.com/Microsoft/TypeScript) - Use the bleeding edge of javascript today, either with typings or not.
+ [Mongoose](https://github.com/Automattic/mongoose) / [mgo](https://github.com/go-mgo/mgo) - Since we're using MongoDB, we've got Mongoose to model your node.js application and, if you're using Go, we have mgo, which is the best MongoDB driver;
+ [Express](https://github.com/expressjs/express) - Fast, unopinionated, minimalist web framework for node;
+ [Bluebird](https://github.com/petkaantonov/bluebird) - Bluebird is a fully featured promise library with focus on innovative features and performance;
+ [Lodash](https://github.com/lodash/lodash) - A modern JavaScript utility library delivering modularity, performance, & extras.
+ [Gulp](https://github.com/gulpjs/gulp)- A streaming build system, by using node's streams file manipulation is all done in memory, and a file isn't written until you tell it to do so;

and integrate with:

+ [Heroku](https://www.heroku.com/) - Heroku is a platform as a service (PaaS) that enables developers to build and run applications entirely in the cloud, powered by SalesForce;
+ [New Relic](http://newrelic.com/) - A popular and powerful web app analytics platform, providing everything you need to ship better software;
+ [MongoHQ](https://www.compose.io/) - Production grade managed MongoDB instances to help you focus on the parts of your app that matter;
+ [MongoLAB](https://www.mlab.com/) - Proudly powering over 250,000 MongoDB deployments on AWS, Azure, and Google;
+ [Google Analytics](https://www.google.com/analytics/) - Detailed website analytics, understand traffic, sources, cohort analysis, geographic and technological profiles of users and much, much more - all for free! (Pro analytics also available)
+ and loads more!

# Getting Started

If you already have Node/Go setup, all you have to do is run:

    $ npm install -g generator-ng-fullstack

then to create a new app:

    $ yo ng-fullstack

and answer the on-screen questions. When it's done, you should have [this](https://github.com/ericmdantas/generator-ng-fullstack/wiki/Getting-Started#result) structure. The default starter project is our [Todo App](https://github.com/ericmdantas/generator-ng-fullstack/wiki/ToDo-Walkthrough).

For full guidance on setting up the dependencies and generating your first app, see [Getting Started](https://github.com/ericmdantas/generator-ng-fullstack/wiki/Getting-Started).

# Sub generators

Ready to scale? Take a look at the sub generator [session in the wiki] (https://github.com/ericmdantas/generator-ng-fullstack/wiki/Sub-Generators)!

# Troubleshooting

We've got a wiki session specific for that, [take a look](https://github.com/ericmdantas/generator-ng-fullstack/wiki/Troubleshooting).

# Contributing

Pull requests, helping others solving issues, improving wiki, etc; are all valid, and more than welcome, contributions - don't hesitate. When in doubt, feel free to ping me.

# Resources

Our Wiki should cover all you need to get familiar with our tools, but if you are unfamiliar with any pats of the technology stack, we have linked to some official resources which may get you pointed in the right direction.

- [Angular 2](https://angular.io/docs/ts/latest/tutorial/)
- [TypeScript](http://www.typescriptlang.org/Tutorial)
- [Go](https://tour.golang.org/welcome/1)
- [MongoDB](https://university.mongodb.com/)
- [HTTP/2](https://daniel.haxx.se/http2/)

#License

MIT
