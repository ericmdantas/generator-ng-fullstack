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
    const _feature = optionsParser.getFeature(this.wrapper.options);
    const _name = this.wrapper.name;

    if (!_feature.length)
      throw new FeatureMissingError();

    this.wrapper.template('ng1/directive.js', `${knownPaths.PATH_CLIENT_FEATURES + _feature}/directives/${_name}.directive.js`, {name: _name});
    this.wrapper.template('ng1/directive_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + _feature}/directives/${_name}.directive_test.js`, {name: _name});
  }
}
