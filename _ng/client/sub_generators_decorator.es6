import knownPaths from '../utils/known_paths';
import optionsParser from '../utils/options_parser';
import utils from '../utils/utils';
import {FeatureMissingError} from '../utils/errors';

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
    let feature = optionsParser.getFeature(this.wrapper.options);
    let name = this.wrapper.name;

    if (!feature.length)
      throw new FeatureMissingError();

    this.wrapper.template('decorator.js', `${knownPaths.PATH_CLIENT_FEATURES + feature}/decorator/${name}.decorator.js`);
  }
}
