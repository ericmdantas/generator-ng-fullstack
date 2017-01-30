import {expect} from 'chai';
import knownPaths from '../../_ng/utils/known_paths';
import utils from '../../_ng/utils/utils';
import * as sinon from 'sinon';
import {AngularFactory, Angular1, Angular2} from '../../_ng/client/angular';

describe('angular', () => {
  describe('factory', () => {
    it('should have the right values for the token', () => {
      expect(AngularFactory.tokens().NG1).to.equal('ng1');
      expect(AngularFactory.tokens().NG2).to.equal('ng2');
    });

    it('should return an error, token not found', () => {
      expect(() => {
        AngularFactory.build('something123');
      }).to.throw(Error, /Invalid Angular token: something123/);
    });

    it('should return an angular1 instance', () => {
      expect(AngularFactory.build('ng1') instanceof Angular1).to.be.true;
    });

    it('should return an angular2 instance', () => {
      expect(AngularFactory.build('ng2') instanceof Angular2).to.be.true;
    });
  });

  describe('ng1', () => {
    describe('copyClient', () => {
        it('should call the methods with the right params - secure is false', () => {
          let _gen = {
            name: 'a',
            secure: false,
            options: {feature: 'c'},
            config: {
              get(){return 'ng1'}
            },
            template: sinon.spy(),
            directory: sinon.spy()
          };

          let _ng1 = new Angular1(_gen);

          _ng1.copyClient();

          let _firstCall = [
            'tasks/client/ng1',
            'tasks/client'
          ];

          let _secondCall = [
            'tasks/client/ng1/watch.js',
            'tasks/client/watch.js', {
              secure: false
            }
          ];

          expect(_ng1.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
          expect(_ng1.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        });

        it('should call the methods with the right params - secure is true', () => {
          let _gen = {
            name: 'a',
            secure: true,
            options: {feature: 'c'},
            config: {
              get(){return 'ng1'}
            },
            template: sinon.spy(),
            directory: sinon.spy()
          };

          let _ng1 = new Angular1(_gen);

          _ng1.copyClient();

          let _firstCall = [
            'tasks/client/ng1',
            'tasks/client'
          ];

          let _secondCall = [
            'tasks/client/ng1/watch.js',
            'tasks/client/watch.js', {
              secure: true
            }
          ];

          expect(_ng1.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
          expect(_ng1.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        });

        it('should call the methods with the right params - secure is true - stylePreprocessor is less', () => {
          let _gen = {
            name: 'a',
            secure: true,
            options: {feature: 'c'},
            stylePreprocessor: 'less',
            config: {
              get(){return 'ng1'}
            },
            template: sinon.spy(),
            directory: sinon.spy()
          };

          let _ng1 = new Angular1(_gen);

          _ng1.copyClient();

          let _firstCall = [
            'tasks/client/ng1',
            'tasks/client'
          ];

          let _secondCall = [
            'tasks/client/ng1/watch.js',
            'tasks/client/watch.js', {
              secure: true,
              stylePreprocessor: 'less'
            }
          ];

          expect(_ng1.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
          expect(_ng1.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        });

        it('should call the methods with the right params - secure is true - stylePreprocessor is sass', () => {
          let _gen = {
            name: 'a',
            secure: true,
            options: {feature: 'c'},
            stylePreprocessor: 'sass',
            config: {
              get(){return 'ng1'}
            },
            template: sinon.spy(),
            directory: sinon.spy()
          };

          let _ng1 = new Angular1(_gen);

          _ng1.copyClient();

          let _firstCall = [
            'tasks/client/ng1',
            'tasks/client'
          ];

          let _secondCall = [
            'tasks/client/ng1/watch.js',
            'tasks/client/watch.js', {
              secure: true,
              stylePreprocessor: 'sass'
            }
          ];

          expect(_ng1.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
          expect(_ng1.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        });
      });

      describe('copyDirective', () => {
        it('should call the methods with the right params - testsSeparated is false', () => {
          let _gen = {
            name: 'a',
            appName: 'b',
            options: {feature: 'c'},
            testsSeparated: false,
            config: {
              get(){return 'ng1'}
            },
            template: sinon.spy()
          };

          let _ng1 = new Angular1(_gen);

          _ng1.copyDirective();
          let _firstCall = [
            'ng1/directive.js',
            knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/directives/' + _gen.name + '.js', {
              name: _gen.name,
              appName: _gen.appName
            }
          ];

          let _secondCall = [
            'ng1/directive_test.js',
            knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/directives/' + _gen.name + '_test.js', {
              name: _gen.name,
              appName: _gen.appName,
              testsSeparated: _gen.testsSeparated
            }
          ];

          expect(_ng1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
          expect(_ng1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        });

        it('should call the methods with the right params - testsSeparated is true', () => {
          let _gen = {
            name: 'a',
            appName: 'b',
            options: {feature: 'c'},
            testsSeparated: true,
            config: {
              get(){return 'ng1'}
            },
            template: sinon.spy()
          };

          let _ng1 = new Angular1(_gen);

          _ng1.copyDirective();
          let _firstCall = [
            'ng1/directive.js',
            knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/directives/' + _gen.name + '.js', {
              name: _gen.name,
              appName: _gen.appName
            }
          ];

          let _secondCall = [
            'ng1/directive_test.js',
            knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/directives/' + _gen.name + '_test.js', {
              name: _gen.name,
              appName: _gen.appName,
              testsSeparated: _gen.testsSeparated
            }
          ];

          expect(_ng1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
          expect(_ng1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        });
      });

    describe('copyFactory', () => {
      it('should call the methods with the right params - testsSeparated is false', () => {
        let _gen = {
          name: 'a',
          appName: 'a',
          testsSeparated: false,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng1 = new Angular1(_gen);

        _ng1.copyFactory();

        let _firstCall = [
          'ng1/factory.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/factory/' + _gen.name + '.js', {
            name: utils.capitalizeFirst(_gen.name),
            appName: _gen.appName
          }
        ];

        let _secondCall = [
          'ng1/factory_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/factory/' + _gen.name + '_test.js', {
            name: utils.capitalizeFirst(_gen.name),
            appName: _gen.appName
          }
        ];

        expect(_ng1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          appName: 'a',
          testsSeparated: true,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng1 = new Angular1(_gen);

        _ng1.copyFactory();

        let _firstCall = [
          'ng1/factory.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/factory/' + _gen.name + '.js', {
            name: utils.capitalizeFirst(_gen.name),
            appName: _gen.appName
          }
        ];

        let _secondCall = [
          'ng1/factory_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/factory/' + _gen.name + '_test.js', {
            name: utils.capitalizeFirst(_gen.name),
            appName: _gen.appName
          }
        ];

        expect(_ng1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    });

    describe('copyService', () => {
      it('should call the methods with the right params - testsSeparated is false', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          testsSeparated: false,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng1 = new Angular1(_gen);

        let _firstCall = [
          'ng1/service.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.js', {
            name: _gen.name,
            appName: _gen.appName
          }
        ];

        let _secondCall = [
          'ng1/service_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '_test.js', {
            name: _gen.name,
            appName: _gen.appName
          }
        ];

        _ng1.copyService();

        expect(_ng1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          testsSeparated: true,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng1 = new Angular1(_gen);

        let _firstCall = [
          'ng1/service.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.js', {
            name: _gen.name,
            appName: _gen.appName
          }
        ];

        let _secondCall = [
          'ng1/service_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/services/' + _gen.name + '_test.js', {
            name: _gen.name,
            appName: _gen.appName
          }
        ];

        _ng1.copyService();

        expect(_ng1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    });

    describe('copyModel', () => {
      it('should call the methods with the right params - testsSeparated is false', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          testsSeparated: false,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng1 = new Angular1(_gen);

        let _firstCall = [
          'ng1/model.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/models/' + _gen.name + '.js', {
            name: _gen.name,
            appName: _gen.appName
          }
        ];

        let _secondCall = [
          'ng1/model_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/models/' + _gen.name + '_test.js', {
            name: _gen.name,
            appName: _gen.appName
          }
        ];

        _ng1.copyModel();

        expect(_ng1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          testsSeparated: true,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng1 = new Angular1(_gen);

        let _firstCall = [
          'ng1/model.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/models/' + _gen.name + '.js', {
            name: _gen.name,
            appName: _gen.appName
          }
        ];

        let _secondCall = [
          'ng1/model_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/models/' + _gen.name + '_test.js', {
            name: _gen.name,
            appName: _gen.appName
          }
        ];

        _ng1.copyModel();

        expect(_ng1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    });

    describe('copyTemplate', () => {
      it('should call the methods with the right params', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng1 = new Angular1(_gen);

        let _firstCall = [
          'view.html',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/templates/' + _gen.name + '.html', {
            name: _gen.name
          }
        ];

        _ng1.copyTemplate();

        expect(_ng1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
      });
    });

    describe('copyStyle', () => {
      it('should call the methods with the right params', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng1 = new Angular1(_gen);

        let _firstCall = [
          'style.css',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.css'
        ];

        _ng1.copyStyle();

        expect(_ng1.generator.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
      });
    });

    describe('copyController', () => {
      it('should call the methods with the right params - testsSeparated is false', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          testsSeparated: false,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng1 = new Angular1(_gen);

        let _firstCall = [
          'ng1/controller_client.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/controllers/' + _gen.name + '.js', {
            name: _gen.name,
            appName: _gen.appName
          }
        ];

        let _secondCall = [
          'ng1/controller_client_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/controllers/' + _gen.name + '_test.js', {
            name: _gen.name,
            nameLowerCase: _gen.name.toLowerCase(),
            appName: _gen.appName
          }
        ];

        _ng1.copyController();

        expect(_ng1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          testsSeparated: true,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng1 = new Angular1(_gen);

        let _firstCall = [
          'ng1/controller_client.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/controllers/' + _gen.name + '.js', {
            name: _gen.name,
            appName: _gen.appName
          }
        ];

        let _secondCall = [
          'ng1/controller_client_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/controllers/' + _gen.name + '_test.js', {
            name: _gen.name,
            nameLowerCase: _gen.name.toLowerCase(),
            appName: _gen.appName
          }
        ];

        _ng1.copyController();

        expect(_ng1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    });

  });

  describe('ng2', () => {
    describe('copyClient', () => {
      it('should call the methods with the right params - secure is false - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          secure: false,
          testsSeparated: true,
          options: {feature: 'c'},
          config: {
            get(){return 'ng2'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        _ng2.copyClient();

        let _firstCall = [
          'tasks/client/ng2',
          'tasks/client'
        ];

        let _secondCall = [
          'tests/client_ng2',
          'tests/client'
        ];

        let _thirdCall = [
          'client/ng2',
          'client'
        ];

        let _fourthCall = [
          '_karma.conf_ng2.js',
          'karma.conf.js'
        ];

        let _fifthCall = [
          '_karma-test-shim.js',
          'karma-test-shim.js'
        ];

        let _sixthCall = [
          '_typings_ng2.json',
          'typings.json'
        ];

        let _seventhCall = [
          '_tsconfig.json',
          'tsconfig.json'
        ];

        let _eightCall = [
          'tasks/client/ng2/watch.js',
          'tasks/client/watch.js', {
            secure: false,
            stylePreprocessor: undefined
          }
        ];

        let _ninethCall = [
          '_ng2_systemjs_config_serving_node_modules.js',
          'client/dev/config.js'
        ];

        expect(_ng2.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_ng2.generator.directory.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_ng2.generator.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;

        expect(_ng2.generator.template.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;

        expect(_ng2.generator.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_eightCall[0], _eightCall[1], _eightCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_ninethCall[0], _ninethCall[1])).to.be.true;
      });

      it('should call the methods with the right params - secure is false - testsSeparated is false', () => {
        let _gen = {
          name: 'a',
          secure: false,
          testsSeparated: false,
          options: {feature: 'c'},
          config: {
            get(){return 'ng2'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        _ng2.copyClient();

        let _firstCall = [
          'tasks/client/ng2',
          'tasks/client'
        ];

        let _secondCall = [
          'tests/client_ng2/todo/components/todo-cmp_test.ts',
          'client/dev/todo/components/todo-cmp_test.ts'
        ];

        let _thirdCall = [
          'tests/client_ng2/todo/components/todo-cmp_test.ts',
          'client/dev/todo/components/todo-cmp_test.ts'
        ];

        let _fourthCall = [
          'client/ng2',
          'client'
        ];

        let _fifthCall = [
          '_karma.conf_ng2.js',
          'karma.conf.js'
        ];

        let _sixthCall = [
          '_karma-test-shim.js',
          'karma-test-shim.js'
        ];

        let _seventhCall = [
          '_typings_ng2.json',
          'typings.json'
        ];

        let _eightCall = [
          '_tsconfig.json',
          'tsconfig.json'
        ];

        let _ninethCall = [
          'tasks/client/ng2/watch.js',
          'tasks/client/watch.js', {
            secure: false,
            stylePreprocessor: undefined
          }
        ];

        let _tenthCall = [
          '_ng2_systemjs_config_serving_node_modules.js',
          'client/dev/config.js'
        ];

        expect(_ng2.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_ng2.generator.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;

        expect(_ng2.generator.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_eightCall[0], _eightCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_ninethCall[0], _ninethCall[1], _ninethCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_tenthCall[0], _tenthCall[1])).to.be.true;
      });

      it('should call the methods with the right params - secure is true - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          secure: true,
          testsSeparated: true,
          options: {feature: 'c'},
          config: {
            get(){return 'ng2'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        _ng2.copyClient();

        let _firstCall = [
          'tasks/client/ng2',
          'tasks/client'
        ];

        let _secondCall = [
          'tests/client_ng2',
          'tests/client'
        ];

        let _thirdCall = [
          'client/ng2',
          'client'
        ];

        let _fourthCall = [
          '_karma.conf_ng2.js',
          'karma.conf.js'
        ];

        let _fifthCall = [
          '_karma-test-shim.js',
          'karma-test-shim.js'
        ];

        let _sixthCall = [
          '_typings_ng2.json',
          'typings.json'
        ];

        let _seventhCall = [
          '_tsconfig.json',
          'tsconfig.json'
        ];

        let _eightCall = [
          'tasks/client/ng2/watch.js',
          'tasks/client/watch.js', {
            secure: true,
            stylePreprocessor: undefined
          }
        ];

        let _ninethCall = [
          '_ng2_systemjs_config_serving_node_modules.js',
          'client/dev/config.js'
        ];

        expect(_ng2.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_ng2.generator.directory.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_ng2.generator.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;

        expect(_ng2.generator.template.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;

        expect(_ng2.generator.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_eightCall[0], _eightCall[1], _eightCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_ninethCall[0], _ninethCall[1])).to.be.true;
      });

      it('should call the methods with the right params - secure is true - testsSeparated is false', () => {
        let _gen = {
          name: 'a',
          secure: true,
          testsSeparated: false,
          options: {feature: 'c'},
          config: {
            get(){return 'ng2'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        _ng2.copyClient();

        let _firstCall = [
          'tasks/client/ng2',
          'tasks/client'
        ];

        let _secondCall = [
          'tests/client_ng2/todo/components/todo-cmp_test.ts',
          'client/dev/todo/components/todo-cmp_test.ts'
        ];

        let _thirdCall = [
          'tests/client_ng2/todo/components/todo-cmp_test.ts',
          'client/dev/todo/components/todo-cmp_test.ts'
        ];

        let _fourthCall = [
          'client/ng2',
          'client'
        ];

        let _fifthCall = [
          '_karma.conf_ng2.js',
          'karma.conf.js'
        ];

        let _sixthCall = [
          '_karma-test-shim.js',
          'karma-test-shim.js'
        ];

        let _seventhCall = [
          '_typings_ng2.json',
          'typings.json'
        ];

        let _eightCall = [
          '_tsconfig.json',
          'tsconfig.json'
        ];

        let _ninethCall = [
          'tasks/client/ng2/watch.js',
          'tasks/client/watch.js', {
            secure: true,
            stylePreprocessor: undefined
          }
        ];

        let _tenthCall = [
          '_ng2_systemjs_config_serving_node_modules.js',
          'client/dev/config.js'
        ];

        expect(_ng2.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_ng2.generator.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;

        expect(_ng2.generator.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_eightCall[0], _eightCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_ninethCall[0], _ninethCall[1], _ninethCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_tenthCall[0], _tenthCall[1])).to.be.true;
      });

      it('should call the methods with the right params - secure is true, testsSeparated is true, stack is client only', () => {
        let _gen = {
          name: 'a',
          secure: true,
          stack: "client",
          testsSeparated: true,
          options: {feature: 'c'},
          config: {
            get(){return 'ng2'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        _ng2.copyClient();

        let _firstCall = [
          'tasks/client/ng2',
          'tasks/client'
        ];

        let _secondCall = [
          'tests/client_ng2',
          'tests/client'
        ];

        let _thirdCall = [
          'client/ng2',
          'client'
        ];

        let _fourthCall = [
          '_karma.conf_ng2.js',
          'karma.conf.js'
        ];

        let _fifthCall = [
          '_karma-test-shim.js',
          'karma-test-shim.js'
        ];

        let _sixthCall = [
          '_typings_ng2.json',
          'typings.json'
        ];

        let _seventhCall = [
          '_tsconfig.json',
          'tsconfig.json'
        ];

        let _eightCall = [
          'tasks/client/ng2/watch.js',
          'tasks/client/watch.js', {
            secure: true,
            stylePreprocessor: undefined
          }
        ];

        let _ninethCall = [
          '_ng2_systemjs_config_serving_from_root.js',
          'client/dev/config.js'
        ];

        expect(_ng2.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_ng2.generator.directory.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_ng2.generator.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;

        expect(_ng2.generator.template.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;

        expect(_ng2.generator.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_eightCall[0], _eightCall[1], _eightCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_ninethCall[0], _ninethCall[1])).to.be.true;
      });

      it('should call the methods with the right params - secure is true, testsSeparated is false, stack is client only', () => {
        let _gen = {
          name: 'a',
          secure: true,
          stack: "client",
          testsSeparated: false,
          options: {feature: 'c'},
          config: {
            get(){return 'ng2'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        _ng2.copyClient();

        let _firstCall = [
          'tasks/client/ng2',
          'tasks/client'
        ];

        let _secondCall = [
          'tests/client_ng2/todo/components/todo-cmp_test.ts',
          'client/dev/todo/components/todo-cmp_test.ts'
        ];

        let _thirdCall = [
          'tests/client_ng2/todo/components/todo-cmp_test.ts',
          'client/dev/todo/components/todo-cmp_test.ts'
        ];

        let _fourthCall = [
          'client/ng2',
          'client'
        ];

        let _fifthCall = [
          '_karma.conf_ng2.js',
          'karma.conf.js'
        ];

        let _sixthCall = [
          '_karma-test-shim.js',
          'karma-test-shim.js'
        ];

        let _seventhCall = [
          '_typings_ng2.json',
          'typings.json'
        ];

        let _eightCall = [
          '_tsconfig.json',
          'tsconfig.json'
        ];

        let _ninethCall = [
          'tasks/client/ng2/watch.js',
          'tasks/client/watch.js', {
            secure: true,
            stylePreprocessor: undefined
          }
        ];

        let _tenthCall = [
          '_ng2_systemjs_config_serving_from_root.js',
          'client/dev/config.js'
        ];

        expect(_ng2.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_ng2.generator.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;

        expect(_ng2.generator.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_eightCall[0], _eightCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_ninethCall[0], _ninethCall[1], _ninethCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_tenthCall[0], _tenthCall[1])).to.be.true;
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
            get(){return 'ng2'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        _ng2.copyClient();

        let _firstCall = [
          'tasks/client/ng2',
          'tasks/client'
        ];

        let _secondCall = [
          'tests/client_ng2',
          'tests/client'
        ];

        let _thirdCall = [
          'client/ng2',
          'client'
        ];

        let _fourthCall = [
          '_karma.conf_ng2.js',
          'karma.conf.js'
        ];

        let _fifthCall = [
          '_karma-test-shim.js',
          'karma-test-shim.js'
        ];

        let _sixthCall = [
          '_typings_ng2.json',
          'typings.json'
        ];

        let _seventhCall = [
          '_tsconfig.json',
          'tsconfig.json'
        ];

        let _eightCall = [
          'tasks/client/ng2/watch.js',
          'tasks/client/watch.js', {
            secure: true,
            stylePreprocessor: undefined
          }
        ];

        let _ninethCall = [
          '_ng2_systemjs_config_serving_node_modules.js',
          'client/dev/config.js'
        ];

        expect(_ng2.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_ng2.generator.directory.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_ng2.generator.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;

        expect(_ng2.generator.template.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;

        expect(_ng2.generator.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_eightCall[0], _eightCall[1], _eightCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_ninethCall[0], _ninethCall[1])).to.be.true;
      });

      it('should call the methods with the right params - secure is true, stack is fullstack - same server for api and static and stylePreprocessor is less', () => {
        let _gen = {
          name: 'a',
          secure: true,
          testsSeparated: true,
          stack: "fullstack",
          differentStaticServer: false,
          stylePreprocessor: 'less',
          options: {feature: 'c'},
          config: {
            get(){return 'ng2'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        _ng2.copyClient();

        let _firstCall = [
          'tasks/client/ng2',
          'tasks/client'
        ];

        let _secondCall = [
          'tests/client_ng2',
          'tests/client'
        ];

        let _thirdCall = [
          'client/ng2',
          'client'
        ];

        let _fourthCall = [
          '_karma.conf_ng2.js',
          'karma.conf.js'
        ];

        let _fifthCall = [
          '_karma-test-shim.js',
          'karma-test-shim.js'
        ];

        let _sixthCall = [
          '_typings_ng2.json',
          'typings.json'
        ];

        let _seventhCall = [
          '_tsconfig.json',
          'tsconfig.json'
        ];

        let _eightCall = [
          'tasks/client/ng2/watch.js',
          'tasks/client/watch.js', {
            secure: true,
            stylePreprocessor: 'less'
          }
        ];

        let _ninethCall = [
          '_ng2_systemjs_config_serving_node_modules.js',
          'client/dev/config.js'
        ];

        expect(_ng2.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_ng2.generator.directory.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_ng2.generator.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;

        expect(_ng2.generator.template.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;

        expect(_ng2.generator.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_eightCall[0], _eightCall[1], _eightCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_ninethCall[0], _ninethCall[1])).to.be.true;
      });

      it('should call the methods with the right params - secure is true, stack is fullstack - same server for api and static and stylePreprocessor is sass', () => {
        let _gen = {
          name: 'a',
          secure: true,
          testsSeparated: true,
          stack: "fullstack",
          differentStaticServer: false,
          stylePreprocessor: 'sass',
          options: {feature: 'c'},
          config: {
            get(){return 'ng2'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        _ng2.copyClient();

        let _firstCall = [
          'tasks/client/ng2',
          'tasks/client'
        ];

        let _secondCall = [
          'tests/client_ng2',
          'tests/client'
        ];

        let _thirdCall = [
          'client/ng2',
          'client'
        ];

        let _fourthCall = [
          '_karma.conf_ng2.js',
          'karma.conf.js'
        ];

        let _fifthCall = [
          '_karma-test-shim.js',
          'karma-test-shim.js'
        ];

        let _sixthCall = [
          '_typings_ng2.json',
          'typings.json'
        ];

        let _seventhCall = [
          '_tsconfig.json',
          'tsconfig.json'
        ];

        let _eightCall = [
          'tasks/client/ng2/watch.js',
          'tasks/client/watch.js', {
            secure: true,
            stylePreprocessor: 'sass'
          }
        ];

        let _ninethCall = [
          '_ng2_systemjs_config_serving_node_modules.js',
          'client/dev/config.js'
        ];

        expect(_ng2.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_ng2.generator.directory.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_ng2.generator.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;

        expect(_ng2.generator.template.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;

        expect(_ng2.generator.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_eightCall[0], _eightCall[1], _eightCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_ninethCall[0], _ninethCall[1])).to.be.true;
      });
    });

    describe('copyDirective', () => {
      it('should call the methods with the right params - testsSeparated is false', () => {
        let _gen = {
          name: 'a',
          testsSeparated: false,
          options: {feature: 'c'},
          config: {
            get(){return 'ng2'}
          },
          template: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        _ng2.copyDirective();

        let _firstCall = [
          'ng2/directive.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/directives/' + _gen.name + '.ts', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'ng2/directive_test.ts', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/directives/' + _gen.name + '_test.ts', {
            name: _gen.name
          }
        ];

        expect(_ng2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          testsSeparated: true,
          options: {feature: 'c'},
          config: {
            get(){return 'ng2'}
          },
          template: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        _ng2.copyDirective();

        let _firstCall = [
          'ng2/directive.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/directives/' + _gen.name + '.ts', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'ng2/directive_test.ts', knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/directives/' + _gen.name + '_test.ts', {
            name: _gen.name
          }
        ];

        expect(_ng2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
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

        let _ng2 = new Angular2(_gen);

        _ng2.copyFactory();

        let _firstCall = [
          'ng2/factory.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/factory/' + _gen.name + '.ts', {
            name: utils.capitalizeFirst(_gen.name)
          }
        ];

        let _secondCall = [
          'ng2/factory_test.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/factory/' + _gen.name + '_test.ts', {
            name: utils.capitalizeFirst(_gen.name)
          }
        ];

        expect(_ng2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          testsSeparated: true,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        _ng2.copyFactory();

        let _firstCall = [
          'ng2/factory.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/factory/' + _gen.name + '.ts', {
            name: utils.capitalizeFirst(_gen.name)
          }
        ];

        let _secondCall = [
          'ng2/factory_test.ts',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/factory/' + _gen.name + '_test.ts', {
            name: utils.capitalizeFirst(_gen.name)
          }
        ];

        expect(_ng2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
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

        let _ng2 = new Angular2(_gen);

        let _firstCall = [
          'ng2/service.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.ts', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'ng2/service_test.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '_test.ts', {
            name: _gen.name
          }
        ];

        _ng2.copyService();

        expect(_ng2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          testsSeparated: true,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        let _firstCall = [
          'ng2/service.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.ts', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'ng2/service_test.ts',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/services/' + _gen.name + '_test.ts', {
            name: _gen.name
          }
        ];

        _ng2.copyService();

        expect(_ng2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
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

        let _ng2 = new Angular2(_gen);

        let _firstCall = [
          'ng2/model.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/models/' + _gen.name + '.ts', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'ng2/model_test.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/models/' + _gen.name + '_test.ts', {
            name: _gen.name
          }
        ];

        _ng2.copyModel();

        expect(_ng2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          testsSeparated: true,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        let _firstCall = [
          'ng2/model.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/models/' + _gen.name + '.ts', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'ng2/model_test.ts',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/models/' + _gen.name + '_test.ts', {
            name: _gen.name
          }
        ];

        _ng2.copyModel();

        expect(_ng2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    });

    describe('copyTemplate', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        let _firstCall = [
          'view.html',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/templates/' + _gen.name + '.html', {
            name: _gen.name
          }
        ];

        _ng2.copyTemplate();

        expect(_ng2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
      });
    });

    describe('copyStyle', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        let _firstCall = [
          'style.css',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.css'
        ];

        _ng2.copyStyle();

        expect(_ng2.generator.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
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

        let _ng2 = new Angular2(_gen);

        let _firstCall = [
          'ng2/component.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '.ts', {
            nameCapitalized: utils.capitalizeFirst(_gen.name),
            name: _gen.name,
            feature: _gen.options.feature
          }
        ];

        let _secondCall = [
          'ng2/component.html',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/templates/' + _gen.name + '.html', {
            name: _gen.name
          }
        ];

        let _thirdCall = [
          'ng2/component.css',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.css'
        ];

        let _fourthCall = [
          'ng2/component_test.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '_test.ts', {
            name: utils.capitalizeFirst(_gen.name),
            nameLowerCase: _gen.name.toLowerCase()
          }
        ];

        _ng2.copyComponent();

        expect(_ng2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          testsSeparated: true,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        let _firstCall = [
          'ng2/component.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '.ts', {
            nameCapitalized: utils.capitalizeFirst(_gen.name),
            name: _gen.name,
            feature: _gen.options.feature
          }
        ];

        let _secondCall = [
          'ng2/component.html',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/templates/' + _gen.name + '.html', {
            name: _gen.name
          }
        ];

        let _thirdCall = [
          'ng2/component.css',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.css'
        ];

        let _fourthCall = [
          'ng2/component_test.ts',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/components/' + _gen.name + '_test.ts', {
            name: utils.capitalizeFirst(_gen.name),
            nameLowerCase: _gen.name.toLowerCase()
          }
        ];

        _ng2.copyComponent();

        expect(_ng2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_ng2.generator.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
      });
    });
  });


});
