import util from 'util';
import knownPaths from './known_paths';
import optionsParser from './options_parser';
import utils from './utils';
import {FeatureMissingError} from './errors';

export class PipeSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'pipe'
    });
  }

  writing() {
    const _feature = optionsParser.getFeature(this.wrapper.options);
    const _name = this.wrapper.name;

    if (!_feature.length)
      throw new FeatureMissingError();

    this.wrapper.template('pipe.ts', `${knownPaths.PATH_CLIENT_FEATURES + _feature}/pipes/${_name}.pipe.ts`, {name: _name});
    this.wrapper.template('pipe_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + _feature}/pipes/${_name}.pipe_test.js`, {name: _name});
  }
}
