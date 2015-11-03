import util from 'util';
import knownPaths from './known_paths';
import optionsParser from './options_parser';
import utils from './utils';
import {FeatureMissingError} from './errors';

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
    const feature = optionsParser.getFeature(this.wrapper.options);
    const name = this.wrapper.name;

    if (!feature.length)
      throw new FeatureMissingError();

    this.wrapper.template('decorator.js', `${knownPaths.PATH_CLIENT_FEATURES + feature}/decorator/${name}.decorator.js`);
  }
}
