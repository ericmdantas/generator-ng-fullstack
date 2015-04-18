# ng-fullstack - The Next Generation Generator
[![Build Status](https://secure.travis-ci.org/ericmdantas/generator-ng-fullstack.png?branch=master)](https://travis-ci.org/ericmdantas/generator-ng-fullstack)

> [Yeoman](http://yeoman.io) generator

# GITTER

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ericmdantas/generator-ng-fullstack?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# install

```

$ npm install -g generator-ng-fullstack

```


# what is this?

This is the generator of the next generation fullstack applications.

Forget about initial setup, ```yo ng-fullstack``` and be happy!


# what am I going to be using?

You'll be using the **latest** versions of:

- [io.js](https://github.com/iojs/io.js);
- [Go](https://golang.org/);
- [AngularJS](https://github.com/angular/angular.js);
- [ES6 (Babel)](https://github.com/babel/babel);
- [Bootstrap](https://github.com/twbs/bootstrap);
- [Gulp](https://github.com/gulpjs/gulp);
- [Express](https://github.com/strongloop/express);
- [MongoDB](https://github.com/mongodb/mongo) + [Mongoose](https://github.com/learnboost/mongoose);
- [Bluebird](https://github.com/petkaantonov/bluebird);
- [Lodash](https://github.com/lodash/lodash);
- [Integration with Heroku](https://www.heroku.com/);
- Integration with Google Analytics;
- And a bunch of great other modules out there!



Do you want integration with New Relic? You got it!

Do you want integration with MongoHQ? You got it!


# structure

```
├── client
│    └── dev
│        ├── js 
│        ├── components 
│        ├── css
│        ├── partials
│        └── imgs
│
├── server
│    ├── api
│    │   ├── todo
│    │   │     ├── dao
│    │   │     ├── model
│    │   │     ├── controller
│    │   │     └── routes
│    │   │
│    ├── auth     
│    │   ├── local
│    │   │
│    ├── commons  
│    │   ├── socket
│    │   └── static  
│    │
│    ├── config   
│    ├── constants
│    └── routes
│    
└── tests
     ├── client
     │   ├── _helpers
     │   ├── components
     │   │    └── todo
     │   │ 
     │   └── todo
     │        ├── dao
     │        ├── model
     │        └── routes
     │   
     ├── e2e
     │   └── _helpers
     │   
     └── server
         ├── _helpers
         └── todo
              ├── dao
              ├── model
              ├── controller
              └── routes

```


# how do I run this?

After installing it, just run:

```

$ yo ng-fullstack

```

Answer a couple questions, and you're good to go!


# do I need anything?


Yes. You'll need [io.js](https://github.com/iojs/io.js) installed. So, [please do it](https://iojs.org/en/index.html).


# anything else?

In fact, yes.

You'll need to install globally the following modules:

- istanbul;
- mocha;
- babel;
- karma-cli;
- gulp-cli.

 
```

$ npm i -g istanbul mocha babel karma-cli gulp-cli

```

# um.. anything else?


Nope. But it'd be good if you had accounts on both [Travis CI](https://travis-ci.org/) and [Coveralls.io](https://coveralls.io/) - so the badges of build and coveralls show up in your README (don't forget to sync your github repo).


# alright, what now?

After installing everything, make sure you start your application with:

```

$ npm start

```

By doing so, you'll be able to use [most of the things from ES6 (thanks to Babel)](https://github.com/babel/babel) in the server.

And then, watch on the files change so the browser is automatically refreshed:

```

$ gulp watch

```


# subgenerators

## app:

```

$ yo ng-fullstack

```

This will create the structure above.


## client

### component:
```

$ yo ng-fullstack:component user

```

This will create:

``` 
client/dev/components/user/user.js
client/dev/components/user/user.html 
```

and

```
tests/client/component/user/user_test.js 
```



### controller:
```

$ yo ng-fullstack:controller Doctor --feature doctor

```

This will create:

``` 
client/dev/js/doctor/controller/doctor.controller.js 
```

and

```
tests/client/doctor/controller/doctor.controller_test.js 
```


### directive

```

$ yo ng-fullstack:directive i-toggle-stuff --feature common

```

This will create:

``` 
client/dev/js/common/directive/i-toggle-stuff.directive.js 
```

and

``` 
tests/client/common/directive/i-toggle-stuff.directive_test.js 
```


### service

```

$ yo ng-fullstack:service HttpParser --feature lib

```

This will create:

``` 
client/dev/js/lib/service/HttpParser.service.js 
```

and

```
tests/client/lib/service/HttpParser.service_test.js 
```


### filter

```

$ yo ng-fullstack:filter myFilter --feature common

```

This will create:

``` 
client/dev/js/common/filter/myFilter.filter.js 
```

and

```
tests/client/common/filter/myFilter.filter_test.js 
```



### factory

```

$ yo ng-fullstack:factory Student --feature student

```

This will create:

``` 
client/dev/js/student/factory/Student.factory.js 
```

and

``` 
tests/client/student/factory/Studet.factory_test.js 
```


### resource

```

$ yo ng-fullstack:resource Clazz --feature clazz

```

This will create:

``` 
client/dev/js/clazz/resource/Clazz.resource.js 
```


### decorator

```

$ yo ng-fullstack:decorator qExtender --feature next-q

```

This will create:

``` 
client/dev/js/next-q/decorator/qExtender.decorator.js 
```


## server

## endpoint:

```

$ yo ng-fullstack:endpoint skate --feature skateboard

```

This will create:

```
server/api/skateboard/controller/skate.controller.js 

server/api/skateboard/route/skate.route.js 

server/api/skateboard/dao/skate.dao.js 

server/api/skateboard/model/skate.model.js 

```


and


``` 
tests/server/skateboard/dao/skate.dao_test.js 
```

# tests

Client:

```

$ gulp test_client

```

Server:

```

$ npm run test-server

```


E2E:

```

$ webdriver-manager start
$ protractor

```

# init

```

$ gulp

```


# dist build

```

$ gulp build

```

# why did you create this?

Most solutions out there are either outdated or not as complete.
The idea is to keep this one going strong and updated.

Not to mention we've got a bunch of good stuff coming, like Angular2.0. 
We're better be prepared and ready to code.


# inspiration

Inspired by [generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack).


# got any idea to improve this generator?

PRs are welcome! Either commit them, or let me know and we'll talk about it =]


# license

MIT
