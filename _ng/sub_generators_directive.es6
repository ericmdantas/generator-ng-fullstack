import util from 'util';
import knownPaths from './known_paths';
import optionsParser from './options_parser';
import utils from './utils';
import {FeatureMissingError} from './errors';

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
    const feature = optionsParser.getFeature(this.wrapper.options);
    const name = this.wrapper.name;

    if (!feature.length)
      throw new FeatureMissingError();

    this.wrapper.template('ng1/directive.js', `${knownPaths.PATH_CLIENT_FEATURES + feature}/directives/${name}.directive.js`, {name});
    this.wrapper.template('ng1/directive_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + feature}/directives/${name}.directive_test.js`, {name});
  }
}
