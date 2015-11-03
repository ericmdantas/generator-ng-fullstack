import util from 'util';
import knownPaths from './known_paths';
import optionsParser from './options_parser';
import utils from './utils';

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
    const name = this.wrapper.name;
    const _firstLetterUppercased = name.charAt(0).toUpperCase() + name.slice(1);
    const nameLowerCase = name.toLowerCase();

    this.wrapper.template('component.ts', `${knownPaths.PATH_CLIENT_FEATURES}../components/${name}/${name}.ts`, {name: _firstLetterUppercased});
    this.wrapper.template('component.html', `${knownPaths.PATH_CLIENT_FEATURES}../components/${name}/${name}.html`, {name});
    this.wrapper.template('component_test.ts', `${knownPaths.PATH_CLIENT_FEATURES_TEST}/components/${name}/${name}_test.ts`, {name: _firstLetterUppercased, nameLowerCase});
  }
}
