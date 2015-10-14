import * as _ from 'lodash';
import knownPaths from './known_paths';

export class GoFactory {
  static build(generator) {
    return new GoServer(generator);
  }
}

export class GoServer {
  constructor(generator) {
    this.wrapper = generator;
  }

  copyFiles() {
    var _featureWithoutTrailingSlash = this.wrapper.feature.replace('/', '');

    this.wrapper.template('go/endpoint.route.go', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/routes/' + this.wrapper.name + 'route.go', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), username: this.wrapper.username, appName: this.wrapper.appName, feature: _featureWithoutTrailingSlash});
    this.wrapper.template('go/endpoint.controller.go', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/controller/' + this.wrapper.name + 'controller.go', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), username: this.wrapper.username, appName: this.wrapper.appName, feature: _featureWithoutTrailingSlash});
    this.wrapper.template('go/endpoint.dao.go', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/dao/' + this.wrapper.name + 'dao.go', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), username: this.wrapper.username, appName: this.wrapper.appName, feature: _featureWithoutTrailingSlash});
    this.wrapper.template('go/endpoint.model.go', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/model/' + this.wrapper.name + 'model.go', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), username: this.wrapper.username, appName: this.wrapper.appName, feature: _featureWithoutTrailingSlash});

    this.wrapper.template('go/endpoint.dao_test.go', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/dao/' + this.wrapper.name + 'dao_test.go', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: this.wrapper.username, appName: this.wrapper.appName});
    this.wrapper.template('go/endpoint.model_test.go', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/model/' + this.wrapper.name + 'model_test.go', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: this.wrapper.username, appName: this.wrapper.appName});
    this.wrapper.template('go/endpoint.controller_test.go', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/controller/' + this.wrapper.name + 'controller_test.go', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: this.wrapper.username, appName: this.wrapper.appName});
    this.wrapper.template('go/endpoint.route_test.go', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/routes/' + this.wrapper.name + 'route_test.go', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: this.wrapper.username, appName: this.wrapper.appName});
  }
}
