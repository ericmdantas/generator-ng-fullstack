import yeoman from 'yeoman-generator';
import util from 'util';
import knownPaths from '../_ng/known_paths';

export default class ComponentGenerator extends yeoman.generators.Base {
  constructor(args, options, config) {
    super(args, options, config)
  }

  initializing() {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'component'
    });
  }

  writing() {
    const _name = this.name;
    const _firstLetterUppercased = _name.charAt(0).toUpperCase() + _name.slice(1);
    const _nameLowerCased = _name.toLowerCase();

    this.template('component.ts', knownPaths.PATH_CLIENT_FEATURES + '../components/' + _name + '/' + _name + '.ts', {name: _firstLetterUppercased});
    this.template('component.html', knownPaths.PATH_CLIENT_FEATURES + '../components/' + _name + '/' + _name + '.html', {name: _name});
    this.template('component_test.ts', knownPaths.PATH_CLIENT_FEATURES_TEST + '/components/' + _name + '/' + _name + '_test.ts', {name: _firstLetterUppercased, nameLowerCase: _nameLowerCased});
  }
}
