import {expect} from 'chai';
import knownPaths from '../../_ng/utils/known_paths';
import utils from '../../_ng/utils/utils';
import * as sinon from 'sinon';
import {VueFactory, Vue2} from '../../_ng/client/vue';

describe('vue', () => {
  describe('factory', () => {
    it('should have the right values for the token', () => {
      expect(VueFactory.tokens().VUE2).to.equal('vue2');
    });

    it('should return an error, token not found', () => {
      expect(() => {
        VueFactory.build('somethivue223');
      }).to.throw(Error, /Invalid Vue token: somethivue223/);
    });

    it('should return a vue2 instance', () => {
      expect(VueFactory.build('vue2') instanceof Vue2).to.be.true;
    });
  });

  describe('vue2', () => {
    describe('copyDirective', () => {
      it('should call the methods with the right params - secure is false', () => {
        let _gen = {
          name: 'a',
          secure: false,
          options: {feature: 'c'},
          config: {
            get(){return 'vue2'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _vue2 = new Vue2(_gen);

        _vue2.copyClient();

        let _firstCall = [
          'tasks/client/vue2',
          'tasks/client'
        ];

        let _secondCall = [
          'tasks/client/vue2/watch.js',
          'tasks/client/watch.js', {
            secure: false
          }
        ];

        expect(_vue2.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_vue2.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
      });

      it('should call the methods with the right params - secure is true', () => {
        let _gen = {
          name: 'a',
          secure: true,
          options: {feature: 'c'},
          config: {
            get(){return 'vue2'}
          },
          template: sinon.spy(),
          directory: sinon.spy()
        };

        let _vue2 = new Vue2(_gen);

        _vue2.copyClient();

        let _firstCall = [
          'tasks/client/vue2',
          'tasks/client'
        ];

        let _secondCall = [
          'tasks/client/vue2/watch.js',
          'tasks/client/watch.js', {
            secure: true,
            stylePreprocessor: undefined
          }
        ];

        expect(_vue2.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_vue2.generator.directory.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is false', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          options: {feature: 'c'},
          testsSeparated: false,
          config: {
            get(){return 'vue2'}
          },
          template: sinon.spy()
        };

        let _vue2 = new Vue2(_gen);

        _vue2.copyDirective();
        let _firstCall = [
          'vue2/directive.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/directives/' + _gen.name + '.js', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'vue2/directive_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/directives/' + _gen.name + '_test.js', {
            name: _gen.name
          }
        ];

        expect(_vue2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_vue2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          options: {feature: 'c'},
          testsSeparated: true,
          config: {
            get(){return 'vue2'}
          },
          template: sinon.spy()
        };

        let _vue2 = new Vue2(_gen);

        _vue2.copyDirective();
        let _firstCall = [
          'vue2/directive.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/directives/' + _gen.name + '.js', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'vue2/directive_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/directives/' + _gen.name + '_test.js', {
            name: _gen.name
          }
        ];

        expect(_vue2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_vue2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
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

        let _vue2 = new Vue2(_gen);

        _vue2.copyFactory();

        let _firstCall = [
          'vue2/factory.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/factory/' + _gen.name + '.js', {
            name: utils.capitalizeFirst(_gen.name)
          }
        ];

        let _secondCall = [
          'vue2/factory_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/factory/' + _gen.name + '_test.js', {
            name: utils.capitalizeFirst(_gen.name)
          }
        ];

        expect(_vue2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_vue2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          appName: 'a',
          testsSeparated: true,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _vue2 = new Vue2(_gen);

        _vue2.copyFactory();

        let _firstCall = [
          'vue2/factory.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/factory/' + _gen.name + '.js', {
            name: utils.capitalizeFirst(_gen.name)
          }
        ];

        let _secondCall = [
          'vue2/factory_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/factory/' + _gen.name + '_test.js', {
            name: utils.capitalizeFirst(_gen.name)
          }
        ];

        expect(_vue2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_vue2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
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

        let _vue2 = new Vue2(_gen);

        let _firstCall = [
          'vue2/service.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.js', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'vue2/service_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '_test.js', {
            name: _gen.name
          }
        ];

        _vue2.copyService();

        expect(_vue2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_vue2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          testsSeparated: true,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _vue2 = new Vue2(_gen);

        let _firstCall = [
          'vue2/service.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.js', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'vue2/service_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/services/' + _gen.name + '_test.js', {
            name: _gen.name
          }
        ];

        _vue2.copyService();

        expect(_vue2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_vue2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
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

        let _vue2 = new Vue2(_gen);

        let _firstCall = [
          'vue2/model.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/models/' + _gen.name + '.js', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'vue2/model_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/models/' + _gen.name + '_test.js', {
            name: _gen.name
          }
        ];

        _vue2.copyModel();

        expect(_vue2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_vue2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should call the methods with the right params - testsSeparated is true', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          testsSeparated: true,
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _vue2 = new Vue2(_gen);

        let _firstCall = [
          'vue2/model.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/models/' + _gen.name + '.js', {
            name: _gen.name
          }
        ];

        let _secondCall = [
          'vue2/model_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/models/' + _gen.name + '_test.js', {
            name: _gen.name          
          }
        ];

        _vue2.copyModel();

        expect(_vue2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_vue2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    });

    describe('copyStyle', () => {
      it('should call the methods with the right params', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _vue2 = new Vue2(_gen);

        let _firstCall = [
          'style.css',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.css'
        ];

        _vue2.copyStyle();

        expect(_vue2.generator.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
      });
    });
  });

});

