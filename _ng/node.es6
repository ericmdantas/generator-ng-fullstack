import * as _ from 'lodash';
import knownPaths from './known_paths';

export class NodeStandard {
  constructor(generator) {
    this.wrapper = generator;
  }

  copyFiles() {
      this.wrapper.template('node/node/endpoint.route.js', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/routes/' + this.wrapper.name + '.route.js', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
      this.wrapper.template('node/node/endpoint.controller.js', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/controller/' + this.wrapper.name + '.controller.js', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
      this.wrapper.template('node/node/endpoint.dao.js', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/dao/' + this.wrapper.name + '.dao.js', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
      this.wrapper.template('node/node/endpoint.model.js', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/model/' + this.wrapper.name + '.model.js', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});

      this.wrapper.template('node/node/endpoint.dao_test.js', knownPaths.PATH_SERVER_FEATURES_TEST + this.wrapper.feature + '/dao/' + this.wrapper.name + '.dao_test.js', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: this.wrapper.feature});
  }
}

export class NodeBabel {
  constructor(generator) {
    this.wrapper = generator;
  }

  copyFiles() {
      this.wrapper.template('node/babel/endpoint.route.js', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/routes/' + this.wrapper.name + '.route.js', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
      this.wrapper.template('node/babel/endpoint.controller.js', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/controller/' + this.wrapper.name + '.controller.js', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
      this.wrapper.template('node/babel/endpoint.dao.js', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/dao/' + this.wrapper.name + '.dao.js', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
      this.wrapper.template('node/babel/endpoint.model.js', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/model/' + this.wrapper.name + '.model.js', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});

      this.wrapper.template('node/babel/endpoint.dao_test.js', knownPaths.PATH_SERVER_FEATURES_TEST + this.wrapper.feature + '/dao/' + this.wrapper.name + '.dao_test.js', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: this.wrapper.feature});
  }
}

export class NodeTypescript {
  constructor(generator) {
    this.wrapper = generator;
  }

  copyFiles() {
      this.wrapper.template('node/typescript/endpoint.route.ts', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/routes/' + this.wrapper.name + '.route.ts', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
      this.wrapper.template('node/typescript/endpoint.controller.ts', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/controller/' + this.wrapper.name + '.controller.ts', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
      this.wrapper.template('node/typescript/endpoint.dao.ts', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/dao/' + this.wrapper.name + '.dao.ts', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
      this.wrapper.template('node/typescript/endpoint.model.ts', knownPaths.PATH_SERVER_FEATURES + this.wrapper.feature + '/model/' + this.wrapper.name + '.model.ts', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});

      this.wrapper.template('node/typescript/endpoint.dao_test.ts', knownPaths.PATH_SERVER_FEATURES_TEST + this.wrapper.feature + '/dao/' + this.wrapper.name + '.dao_test.ts', {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: this.wrapper.feature});
  }
}

export class NodeFactory {
  static build(generator) {
    switch(generator.transpilerServer) {
      case "typescript": return new NodeTypescript(generator);
      default: return new NodeBabel(generator);
    }
  }
}
