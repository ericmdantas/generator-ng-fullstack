import util from 'util';
import knownPaths from './known_paths';
import optionsParser from './options_parser';
import utils from './utils';

export class ControllerSubGenerator {
    constructor(generator) {
      this.wrapper = generator;
    }

    initializing() {
      this.wrapper.argument('name', {
        required: true,
        type: String,
        desc: 'controller_client'
      });
    }

    writing() {
      const _feature = optionsParser.getFeature(this.wrapper.options);
      const _name = this.wrapper.name;

      if (!_feature.length)
        throw new Error('Feature is needed. Do it like this: --feature something-here');

      this.wrapper.template('controller_client.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/controllers/' + _name + '.controller.js', {name: _name});
      this.wrapper.template('controller_client_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _feature + '/controllers/' + _name + '.controller_test.js', {name: _name, nameLowerCase: _name.toLowerCase()});
    }
}

export class ComponentSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'component'
    });
  }

  writing() {
    const _name = this.wrapper.name;
    const _firstLetterUppercased = _name.charAt(0).toUpperCase() + _name.slice(1);
    const _nameLowerCased = _name.toLowerCase();

    this.wrapper.template('component.ts', knownPaths.PATH_CLIENT_FEATURES + '../components/' + _name + '/' + _name + '.ts', {name: _firstLetterUppercased});
    this.wrapper.template('component.html', knownPaths.PATH_CLIENT_FEATURES + '../components/' + _name + '/' + _name + '.html', {name: _name});
    this.wrapper.template('component_test.ts', knownPaths.PATH_CLIENT_FEATURES_TEST + '/components/' + _name + '/' + _name + '_test.ts', {name: _firstLetterUppercased, nameLowerCase: _nameLowerCased});
  }
}

export class DecoratorSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'service'
    });
  }

  writing() {
    const _feature = optionsParser.getFeature(this.wrapper.options);
    const _name = this.wrapper.name;

    if (!_feature.length)
      throw new Error('Feature is needed. Do it like this: --feature something-here');

    this.wrapper.template('decorator.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/decorator/' + _name + '.decorator.js');
  }
}

export class DirectiveSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'directive'
    });
  }

  writing() {
    const _feature = optionsParser.getFeature(this.wrapper.options);
    const _name = this.wrapper.name;

    if (!_feature.length)
      throw new Error('Feature is needed. Do it like this: --feature something-here');

    this.wrapper.template('directive.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/directives/' + _name + '.directive.js', {name: _name});
    this.wrapper.template('directive_test.js',knownPaths.PATH_CLIENT_FEATURES_TEST + _feature + '/directives/' + _name + '.directive_test.js', {name: _name});
  }
}

const _copyNodeJS = function(feature, name, transpiler) {
  switch (transpiler) {
    case "typescript": {
      this.template('node/typescript/endpoint.route.ts', knownPaths.PATH_SERVER_FEATURES + feature + '/routes/' + name + '.route.ts', {name: name, nameLowerCase: name.toLowerCase()});
      this.template('node/typescript/endpoint.controller.ts', knownPaths.PATH_SERVER_FEATURES + feature + '/controller/' + name + '.controller.ts', {name: name, nameLowerCase: name.toLowerCase()});
      this.template('node/typescript/endpoint.dao.ts', knownPaths.PATH_SERVER_FEATURES + feature + '/dao/' + name + '.dao.ts', {name: name, nameLowerCase: name.toLowerCase()});
      this.template('node/typescript/endpoint.model.ts', knownPaths.PATH_SERVER_FEATURES + feature + '/model/' + name + '.model.ts', {name: name, nameLowerCase: name.toLowerCase()});

      this.template('node/typescript/endpoint.dao_test.js', knownPaths.PATH_SERVER_FEATURES_TEST + feature + '/dao/' + name + '.dao_test.ts', {name: name, nameLowerCase: name.toLowerCase(), feature: feature});

      break;
    }

    default: {
      this.template('node/babel/endpoint.route.js', knownPaths.PATH_SERVER_FEATURES + feature + '/routes/' + name + '.route.js', {name: name, nameLowerCase: name.toLowerCase()});
      this.template('node/babel/endpoint.controller.js', knownPaths.PATH_SERVER_FEATURES + feature + '/controller/' + name + '.controller.js', {name: name, nameLowerCase: name.toLowerCase()});
      this.template('node/babel/endpoint.dao.js', knownPaths.PATH_SERVER_FEATURES + feature + '/dao/' + name + '.dao.js', {name: name, nameLowerCase: name.toLowerCase()});
      this.template('node/babel/endpoint.model.js', knownPaths.PATH_SERVER_FEATURES + feature + '/model/' + name + '.model.js', {name: name, nameLowerCase: name.toLowerCase()});

      this.template('node/babel/endpoint.dao_test.js', knownPaths.PATH_SERVER_FEATURES_TEST + feature + '/dao/' + name + '.dao_test.js', {name: name, nameLowerCase: name.toLowerCase(), feature: feature});
    }
  }
}

const _copyGo = function(feature, name, username, appName) {
  var _featureWithoutTrailingSlash = feature.replace('/', '');

  this.template('go/endpoint.route.go', knownPaths.PATH_SERVER_FEATURES + feature + '/routes/' + name + 'route.go', {name: name, nameLowerCase: name.toLowerCase(), username: username, appName: appName, feature: _featureWithoutTrailingSlash});
  this.template('go/endpoint.controller.go', knownPaths.PATH_SERVER_FEATURES + feature + '/controller/' + name + 'controller.go', {name: name, nameLowerCase: name.toLowerCase(), username: username, appName: appName, feature: _featureWithoutTrailingSlash});
  this.template('go/endpoint.dao.go', knownPaths.PATH_SERVER_FEATURES + feature + '/dao/' + name + 'dao.go', {name: name, nameLowerCase: name.toLowerCase(), username: username, appName: appName, feature: _featureWithoutTrailingSlash});
  this.template('go/endpoint.model.go', knownPaths.PATH_SERVER_FEATURES + feature + '/model/' + name + 'model.go', {name: name, nameLowerCase: name.toLowerCase(), username: username, appName: appName, feature: _featureWithoutTrailingSlash});

  this.template('go/endpoint.dao_test.go', knownPaths.PATH_SERVER_FEATURES + feature + '/dao/' + name + 'dao_test.go', {name: name, nameLowerCase: name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: username, appName: appName});
  this.template('go/endpoint.model_test.go', knownPaths.PATH_SERVER_FEATURES + feature + '/model/' + name + 'model_test.go', {name: name, nameLowerCase: name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: username, appName: appName});
  this.template('go/endpoint.controller_test.go', knownPaths.PATH_SERVER_FEATURES + feature + '/controller/' + name + 'controller_test.go', {name: name, nameLowerCase: name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: username, appName: appName});
  this.template('go/endpoint.route_test.go', knownPaths.PATH_SERVER_FEATURES + feature + '/routes/' + name + 'route_test.go', {name: name, nameLowerCase: name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: username, appName: appName});
}

export class EndpointSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'endpoint'
    });
  }

  writing() {
    const _feature = optionsParser.getFeature(this.wrapper.options);
    const _name = this.wrapper.name;
    const _username = this.wrapper.config.get('username');
    const _appName = this.wrapper.config.get('appName');
    const _server = this.wrapper.config.get('server') ?  this.wrapper.config.get('server').toLowerCase() : undefined;
    const _transpilerServer = this.wrapper.config.get('transpilerServer') ? this.wrapper.config.get('transpilerServer').toLowerCase() : undefined;

    if (!_feature.length)
      throw new Error('Feature is needed. Do it like this: --feature something-here');

    switch (_server) {
        case "go" : _copyGo.call(this.wrapper, _feature, _name, _username, _appName); break;
        default: _copyNodeJS.call(this.wrapper, _feature, _name, _transpilerServer); break;
    }
  }
}

export class FactorySubGenerator {
  constructor(generator) {
    this.wrapper = generator;
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'factory'
    });
  }

  writing() {
    const _feature = optionsParser.getFeature(this.wrapper.options);
    const _name = this.wrapper.name;

    if (!_feature.length)
      throw new Error('Feature is needed. Do it like this: --feature something-here');

    this.wrapper.template('factory.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/factory/' + _name + '.factory.js', {name: utils.capitalizeFirst(_name)});
    this.wrapper.template('factory_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _feature + '/factory/' + _name + '.factory_test.js', {name: utils.capitalizeFirst(_name)});
  }
}

export class FilterSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'filter'
    });
  }

  writing() {
    const _feature = optionsParser.getFeature(this.wrapper.options);
    const _name = this.wrapper.name;

    if (!_feature.length)
      throw new Error('Feature is needed. Do it like this: --feature something-here');

    this.wrapper.template('filter.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/filters/' + _name + '.filter.js', {name: _name});
    this.wrapper.template('filter_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _feature + '/filters/' + _name + '.filter_test.js', {name: _name});
  }
}

export class ResourceSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'resource'
    });
  }

  writing() {
    const _feature = optionsParser.getFeature(this.wrapper.options);
    const _name = this.wrapper.name;

    if (!_feature.length)
      throw new Error('Feature is needed. Do it like this: --feature something-here');

    this.wrapper.template('resource.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/resource/' + _name + '.resource.js', {name: _name});
  }
}

export class ServiceSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'service'
    });
  }

  writing() {
    const _feature = optionsParser.getFeature(this.wrapper.options);
    const _name = this.wrapper.name;

    if (!_feature.length)
      throw new Error('Feature is needed. Do it like this: --feature something-here');

    this.wrapper.template('service.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/services/' + _name + '.service.js', {name: _name});
    this.wrapper.template('service_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _feature + '/services/' + _name + '.service_test.js', {name: _name});
  }
}
