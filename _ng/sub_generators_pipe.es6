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
    const feature = optionsParser.getFeature(this.wrapper.options);
    const name = this.wrapper.name;

    if (!feature.length)
      throw new FeatureMissingError();

    this.wrapper.template('pipe.ts', `${knownPaths.PATH_CLIENT_FEATURES + feature}/pipes/${name}.pipe.ts`, {name});
    this.wrapper.template('pipe_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + feature}/pipes/${name}.pipe_test.js`, {name});
  }
}
