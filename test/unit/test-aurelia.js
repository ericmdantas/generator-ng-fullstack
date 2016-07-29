import {expect} from 'chai';
import knownPaths from '../../_ng/utils/known_paths';
import utils from '../../_ng/utils/utils';
import * as sinon from 'sinon';
import {AureliaFactory, Aurelia1} from '../../_ng/client/aurelia';

describe('aurelia', () => {
  describe('factory', () => {
    it('should have the right values for the token', () => {
      expect(AureliaFactory.tokens().AURELIA1).to.equal('aurelia1');
    });

    it('should return an error, token not found', () => {
      expect(() => {
        AureliaFactory.build('something123');
      }).to.throw(Error, /Invalid Aurelia token: something123/);
    });

    it('should return an aurelia1 instance', () => {
      expect(AureliaFactory.build('aurelia1') instanceof Aurelia1).to.be.true;
    });
  });
  
  describe('aurelia1', () => {
    describe('copyClient', () => {
      it('should call the methods with the right params - secure is false - testsSeparated is true - stack is client', () => {
        let _gen = {
          name: 'a',
          secure: false,
          testsSeparated: true,
          options: {feature: 'c'},
          stack: "client",
          config: {
            get(){return 'aurelia1'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        _aurelia1.copyClient();

        let _firstCall = [
          'tasks/client/aurelia1',
          'tasks/client'
        ];

        let _secondCall = [
          'tests/client_aurelia1',
          'tests/client'
        ];

        let _thirdCall = [
          'client/aurelia1',
          'client'
        ];

        let _fourthCall = [
          '_karma.conf_aurelia1.js',
          'karma.conf.js'
        ];

        let _fifthCall = [
          'tasks/client/aurelia1/watch.js',
          'tasks/client/watch.js', {
            secure: false
          }
        ];

        let _sixthCall = [
          '_aurelia_jspm_config_serving_from_root.js',
          'jspm.config.js'
        ];

        expect(_aurelia1.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_aurelia1.generator.directory.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_aurelia1.generator.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;

        expect(_aurelia1.generator.template.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
      });

      it('should call the methods with the right params - secure is false - testsSeparated is false stack is client', () => {
        let _gen = {
          name: 'a',
          secure: false,
          testsSeparated: false,
          options: {feature: 'c'},
          stack: "client",
          config: {
            get(){return 'aurelia1'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        _aurelia1.copyClient();

        let _firstCall = [
          'tasks/client/aurelia1',
          'tasks/client'
        ];

        let _secondCall = [
          'tests/client_aurelia1/todo/components/todo-cmp_test.js',
          'client/dev/todo/components/todo-cmp_test.js'
        ];

        let _thirdCall = [
          'tests/client_aurelia1/todo/components/todo-cmp_test.js',
          'client/dev/todo/components/todo-cmp_test.js'
        ];

        let _fourthCall = [
          'client/aurelia1',
          'client'
        ];

        let _fifthCall = [
          '_karma.conf_aurelia1.js',
          'karma.conf.js'
        ];

        let _sixthCall = [
          'tasks/client/aurelia1/watch.js',
          'tasks/client/watch.js', {
            secure: false
          }
        ];

        let _seventhCall = [
          '_aurelia_jspm_config_serving_from_root.js',
          'jspm.config.js'
        ];

        expect(_aurelia1.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_aurelia1.generator.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;

        expect(_aurelia1.generator.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_sixthCall[0], _sixthCall[1], _sixthCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
      });

      it('should call the methods with the right params - secure is true - testsSeparated is true - stack is client', () => {
        let _gen = {
          name: 'a',
          secure: true,
          testsSeparated: true,
          options: {feature: 'c'},
          stack: "client",
          config: {
            get(){return 'aurelia1'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        _aurelia1.copyClient();

        let _firstCall = [
          'tasks/client/aurelia1',
          'tasks/client'
        ];

        let _secondCall = [
          'tests/client_aurelia1',
          'tests/client'
        ];

        let _thirdCall = [
          'client/aurelia1',
          'client'
        ];

        let _fourthCall = [
          '_karma.conf_aurelia1.js',
          'karma.conf.js'
        ];

        let _fifthCall = [
          'tasks/client/aurelia1/watch.js',
          'tasks/client/watch.js', {
            secure: true
          }
        ];

        let _sixthCall = [
          '_aurelia_jspm_config_serving_from_root.js',
          'jspm.config.js'
        ];

        expect(_aurelia1.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_aurelia1.generator.directory.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_aurelia1.generator.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;

        expect(_aurelia1.generator.template.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;

        expect(_aurelia1.generator.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
      });

      it('should call the methods with the right params - secure is true - testsSeparated is false stack is client', () => {
        let _gen = {
          name: 'a',
          secure: true,
          testsSeparated: false,
          options: {feature: 'c'},
          stack: "client",
          config: {
            get(){return 'aurelia1'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        _aurelia1.copyClient();

        let _firstCall = [
          'tasks/client/aurelia1',
          'tasks/client'
        ];

        let _secondCall = [
          'tests/client_aurelia1/todo/components/todo-cmp_test.js',
          'client/dev/todo/components/todo-cmp_test.js'
        ];

        let _thirdCall = [
          'tests/client_aurelia1/todo/components/todo-cmp_test.js',
          'client/dev/todo/components/todo-cmp_test.js'
        ];

        let _fourthCall = [
          'client/aurelia1',
          'client'
        ];

        let _fifthCall = [
          '_karma.conf_aurelia1.js',
          'karma.conf.js'
        ];

        let _sixthCall = [
          'tasks/client/aurelia1/watch.js',
          'tasks/client/watch.js', {
            secure: true
          }
        ];

        let _seventhCall = [
          '_aurelia_jspm_config_serving_from_root.js',
          'jspm.config.js'
        ];

        expect(_aurelia1.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_aurelia1.generator.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;

        expect(_aurelia1.generator.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_sixthCall[0], _sixthCall[1], _sixthCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
      });

      it('should call the methods with the right params - secure is true, testsSeparated is true, stack is client only', () => {
        let _gen = {
          name: 'a',
          secure: true,
          stack: "client",
          testsSeparated: true,
          options: {feature: 'c'},
          config: {
            get(){return 'aurelia1'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        _aurelia1.copyClient();

        let _firstCall = [
          'tasks/client/aurelia1',
          'tasks/client'
        ];

        let _secondCall = [
          'tests/client_aurelia1',
          'tests/client'
        ];

        let _thirdCall = [
          'client/aurelia1',
          'client'
        ];

        let _fourthCall = [
          '_karma.conf_aurelia1.js',
          'karma.conf.js'
        ];

        let _fifthCall = [
          'tasks/client/aurelia1/watch.js',
          'tasks/client/watch.js', {
            secure: true
          }
        ];

        let _sixthCall = [
          '_aurelia_jspm_config_serving_from_root.js',
          'jspm.config.js'
        ];

        expect(_aurelia1.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_aurelia1.generator.directory.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_aurelia1.generator.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;

        expect(_aurelia1.generator.template.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;

        expect(_aurelia1.generator.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
      });

      it('should call the methods with the right params - secure is true, testsSeparated is false, stack is client only', () => {
        let _gen = {
          name: 'a',
          secure: true,
          stack: "client",
          testsSeparated: false,
          options: {feature: 'c'},
          config: {
            get(){return 'aurelia1'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        _aurelia1.copyClient();

        let _firstCall = [
          'tasks/client/aurelia1',
          'tasks/client'
        ];

        let _secondCall = [
          'tests/client_aurelia1/todo/components/todo-cmp_test.js',
          'client/dev/todo/components/todo-cmp_test.js'
        ];

        let _thirdCall = [
          'tests/client_aurelia1/todo/components/todo-cmp_test.js',
          'client/dev/todo/components/todo-cmp_test.js'
        ];

        let _fourthCall = [
          'client/aurelia1',
          'client'
        ];

        let _fifthCall = [
          '_karma.conf_aurelia1.js',
          'karma.conf.js'
        ];

        let _sixthCall = [
          'tasks/client/aurelia1/watch.js',
          'tasks/client/watch.js', {
            secure: true
          }
        ];

        let _seventhCall = [
          '_aurelia_jspm_config_serving_from_root.js',
          'jspm.config.js'
        ];

        expect(_aurelia1.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_aurelia1.generator.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;

        expect(_aurelia1.generator.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_sixthCall[0], _sixthCall[1], _sixthCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
      });

      it('should call the methods with the right params - secure is true, stack is fullstack - same server for api and static', () => {
        let _gen = {
          name: 'a',
          secure: true,
          testsSeparated: true,
          stack: "fullstack",
          differentStaticServer: false,
          options: {feature: 'c'},
          config: {
            get(){return 'aurelia1'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        _aurelia1.copyClient();

        let _firstCall = [
          'tasks/client/aurelia1',
          'tasks/client'
        ];

        let _secondCall = [
          'tests/client_aurelia1',
          'tests/client'
        ];

        let _thirdCall = [
          'client/aurelia1',
          'client'
        ];

        let _fourthCall = [
          '_karma.conf_aurelia1.js',
          'karma.conf.js'
        ];
        
        let _fifthCall = [
          'tasks/client/aurelia1/watch.js',
          'tasks/client/watch.js', {
            secure: true
          }
        ];

        let _sixthCall = [
          '_aurelia_jspm_config_serving_from_jspm_packages.js',
          'jspm.config.js'
        ];

        expect(_aurelia1.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_aurelia1.generator.directory.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_aurelia1.generator.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;

        expect(_aurelia1.generator.template.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;

        expect(_aurelia1.generator.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
      });
    });

    describe('copyDirective', () => {
      it('should call the methods with the right params - testsSeparated is false', () => {
        let _gen = {
          name: 'a',
          testsSeparated: false,
          options: {feature: 'c'},
          config: {
            get(){return 'aurelia1'}
          },
          template: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        _aurelia1.copyDirective();

        let _firstCall = [
          'aurelia1/directive.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/directives/' + _gen.name + '.js', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'aurelia1/directive_test.js', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/directives/' + _gen.name + '_test.js', {
            name: _gen.name
          }
        ];

        expect(_aurelia1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          testsSeparated: true,
          options: {feature: 'c'},
          config: {
            get(){return 'aurelia1'}
          },
          template: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        _aurelia1.copyDirective();

        let _firstCall = [
          'aurelia1/directive.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/directives/' + _gen.name + '.js', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'aurelia1/directive_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/directives/' + _gen.name + '_test.js', {
            name: _gen.name
          }
        ];

        expect(_aurelia1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    });

    describe('copyFactory', () => {
      it('should call the methods with the right params - testsSeparated is false', () => {
        let _gen = {
          name: 'a',
          testsSeparated: false,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        _aurelia1.copyFactory();

        let _firstCall = [
          'aurelia1/factory.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/factory/' + _gen.name + '.js', {
            name: utils.capitalizeFirst(_gen.name)
          }
        ];

        let _secondCall = [
          'aurelia1/factory_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/factory/' + _gen.name + '_test.js', {
            name: utils.capitalizeFirst(_gen.name)
          }
        ];

        expect(_aurelia1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          testsSeparated: true,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        _aurelia1.copyFactory();

        let _firstCall = [
          'aurelia1/factory.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/factory/' + _gen.name + '.js', {
            name: utils.capitalizeFirst(_gen.name)
          }
        ];

        let _secondCall = [
          'aurelia1/factory_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/factory/' + _gen.name + '_test.js', {
            name: utils.capitalizeFirst(_gen.name)
          }
        ];

        expect(_aurelia1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    });

    describe('copyService', () => {
      it('should call the methods with the right params - testsSeparated is false', () => {
        let _gen = {
          name: 'a',
          testsSeparated: false,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        let _firstCall = [
          'aurelia1/service.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.js', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'aurelia1/service_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '_test.js', {
            name: _gen.name
          }
        ];

        _aurelia1.copyService();

        expect(_aurelia1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          testsSeparated: true,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        let _firstCall = [
          'aurelia1/service.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.js', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'aurelia1/service_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/services/' + _gen.name + '_test.js', {
            name: _gen.name
          }
        ];

        _aurelia1.copyService();

        expect(_aurelia1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    });

    describe('copyModel', () => {
      it('should call the methods with the right params - testsSeparated is false', () => {
        let _gen = {
          name: 'a',
          testsSeparated: false,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        let _firstCall = [
          'aurelia1/model.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/models/' + _gen.name + '.js', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'aurelia1/model_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/models/' + _gen.name + '_test.js', {
            name: _gen.name
          }
        ];

        _aurelia1.copyModel();

        expect(_aurelia1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          testsSeparated: true,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        let _firstCall = [
          'aurelia1/model.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/models/' + _gen.name + '.js', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'aurelia1/model_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/models/' + _gen.name + '_test.js', {
            name: _gen.name
          }
        ];

        _aurelia1.copyModel();

        expect(_aurelia1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    });

    describe('copyStyle', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        let _firstCall = [
          'style.css',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.css'
        ];

        _aurelia1.copyStyle();

        expect(_aurelia1.generator.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
      });
    });

    describe('copyComponent', () => {
      it('should call the methods with the right params - testsSeparated is false', () => {
        let _gen = {
          name: 'a',
          testsSeparated: false,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        let _firstCall = [
          'aurelia1/component.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '.js', {
            nameCapitalized: utils.capitalizeFirst(_gen.name),
            name: _gen.name,
            feature: _gen.options.feature
          }
        ];

        let _secondCall = [
          'aurelia1/component.html',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '.html', {
            name: _gen.name
          }
        ];

        let _thirdCall = [
          'aurelia1/component.css',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.css'
        ];

        let _fourthCall = [
          'aurelia1/component_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '_test.js', {
            name: utils.capitalizeFirst(_gen.name),
            nameLowerCase: _gen.name.toLowerCase()
          }
        ];

        _aurelia1.copyComponent();

        expect(_aurelia1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          testsSeparated: true,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _aurelia1 = new Aurelia1(_gen);

        let _firstCall = [
          'aurelia1/component.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '.js', {
            nameCapitalized: utils.capitalizeFirst(_gen.name),
            name: _gen.name,
            feature: _gen.options.feature
          }
        ];

        let _secondCall = [
          'aurelia1/component.html',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '.html', {
            name: _gen.name
          }
        ];

        let _thirdCall = [
          'aurelia1/component.css',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.css'
        ];

        let _fourthCall = [
          'aurelia1/component_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/components/' + _gen.name + '_test.js', {
            name: utils.capitalizeFirst(_gen.name),
            nameLowerCase: _gen.name.toLowerCase()
          }
        ];

        _aurelia1.copyComponent();

        expect(_aurelia1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_aurelia1.generator.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
      });
    });
  });
});


