'use strict';

import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';
import utils from '../../_ng/utils/utils';

import {ComponentSubGenerator} from '../../_ng/client/sub_generators_component';

describe('ComponentSubGenerator', () => {
  describe('ng1', () => {
    describe('creation', () => {
      it('should have the right param passed to wrapper', () => {
        let _gen = {
          a: true,
          config: {
            get(){
              return 'ng1'
            }
          }
        };
        let _csg = new ComponentSubGenerator(_gen);

        expect(_csg.generator).to.equal(_gen);
      });
    });

    describe('initializing', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          argument: () => {},
          config: {
            get(){
              return 'ng1'
            }
          }
        };

        sinon.mock(_gen.argument);

        let _csg = new ComponentSubGenerator(_gen);

        _csg.initializing();

        expect(_csg.generator.argument).to.have.been.called;
      });
    });

    describe('writing', () => {
      it('throw error, feature not defined', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          options: {},
          template: sinon.spy(),
          config: {
            get(){
              return 'ng1'
            }
          }
        };

        let _csg = new ComponentSubGenerator(_gen);

        expect(() => _csg.writing()).to.throw(Error, /Do it like this: --feature something-here/);
      });

      it('should call writing with the right stuff - ng1', () => {
        let _gen = {
          name: 'a',
          appName: 'www',
          options: {feature: 'c'},
          template: sinon.spy(),
          config: {
            get(){
              return 'ng1';
            }
          }
        };

        let _csg = new ComponentSubGenerator(_gen);

        _csg.writing();

        let _firstCall = [
          'ng1/component.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '.js', {
            nameCapitalized: utils.capitalizeFirst(_gen.name),
            name: _gen.name,
            feature: _gen.options.feature,
            appName: _gen.appName
          }];

        let _secondCall = [
          'ng1/component.html',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/templates/' + _gen.name + '.html', {
            name: _gen.name
          }];

        let _thirdCall = [
          'ng1/component.css',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.css'
        ];

        let _fourthCall = [
          'ng1/component_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/components/' + _gen.name + '_test.js', {
            name: _gen.name,
            nameLowerCase: _gen.name.toLowerCase(),
            appName: _gen.appName
          }];

        expect(_csg.generator.writing).to.have.been.called;

        expect(_csg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_csg.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_csg.generator.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_csg.generator.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
      });

      it('should call writing with the right stuff - testsSeparated', () => {
        let _gen = {
          name: 'a',
          appName: 'www',
          options: {feature: 'c'},
          template: sinon.spy(),
          testsSeparated: false,
          config: {
            get(token) {
              switch (token) {
                case "testsSeparated": return false;
                default: return 'ng1';
              }
            }
          }
        };

        let _csg = new ComponentSubGenerator(_gen);

        _csg.writing();

        let _firstCall = [
          'ng1/component.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '.js', {
            nameCapitalized: utils.capitalizeFirst(_gen.name),
            name: _gen.name,
            appName: _gen.appName,
            feature: _gen.options.feature
          }];

        let _secondCall = [
          'ng1/component.html',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/templates/' + _gen.name + '.html', {
            name: _gen.name
          }];

        let _thirdCall = [
          'ng1/component.css',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.css'
        ];

        let _fourthCall = [
          'ng1/component_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '_test.js', {
            name: _gen.name,
            nameLowerCase: _gen.name.toLowerCase(),
            appName: _gen.appName
          }];

        expect(_csg.generator.writing).to.have.been.called;

        expect(_csg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_csg.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_csg.generator.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_csg.generator.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
      });
    });
  })

  describe('ng2', () => {
    describe('creation', () => {
      it('should have the right param passed to wrapper', () => {
        let _gen = {
          a: true,
          config: {
            get(){
              return 'ng2'
            }
          }
        };
        let _csg = new ComponentSubGenerator(_gen);

        expect(_csg.generator).to.equal(_gen);
      });
    });

    describe('initializing', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          argument: () => {},
          config: {
            get(){
              return 'ng2'
            }
          }
        };

        sinon.mock(_gen.argument);

        let _csg = new ComponentSubGenerator(_gen);

        _csg.initializing();

        expect(_csg.generator.argument).to.have.been.called;
      });
    });

    describe('writing', () => {
      it('throw error, feature not defined', () => {
        let _gen = {
          name: 'a',
          options: {},
          template: sinon.spy(),
          config: {
            get(){
              return 'ng2'
            }
          }
        };

        let _csg = new ComponentSubGenerator(_gen);

        expect(() => _csg.writing()).to.throw(Error, /Do it like this: --feature something-here/);
      });

      it('should call writing with the right stuff - ng2', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy(),
          config: {
            get(){
              return 'ng2';
            }
          }
        };

        let _csg = new ComponentSubGenerator(_gen);

        _csg.writing();

        let _firstCall = [
          'ng2/component.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '.ts', {
            nameCapitalized: utils.capitalizeFirst(_gen.name),
            name: _gen.name,
            feature: _gen.options.feature
          }];

        let _secondCall = [
          'ng2/component.html',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/templates/' + _gen.name + '.html', {
            name: _gen.name
          }];

        let _thirdCall = [
          'ng2/component.css',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.css'
        ];

        let _fourthCall = [
          'ng2/component_test.ts',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/components/' + _gen.name + '_test.ts', {
            name: utils.capitalizeFirst(_gen.name),
            nameLowerCase: _gen.name.toLowerCase()
          }];

        expect(_csg.generator.writing).to.have.been.called;

        expect(_csg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_csg.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_csg.generator.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_csg.generator.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
      });

      it('should call writing with the right stuff - testsSeparated', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy(),
          testsSeparated: false,
          config: {
            get(token) {
              switch (token) {
                case "testsSeparated": return false;
                default: return 'ng2';
              }
            }
          }
        };

        let _csg = new ComponentSubGenerator(_gen);

        _csg.writing();

        let _firstCall = [
          'ng2/component.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '.ts', {
            nameCapitalized: utils.capitalizeFirst(_gen.name),
            name: _gen.name,
            feature: _gen.options.feature
          }];

        let _secondCall = [
          'ng2/component.html',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/templates/' + _gen.name + '.html', {
            name: _gen.name
          }];

        let _thirdCall = [
          'ng2/component.css',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.css'
        ];

        let _fourthCall = [
          'ng2/component_test.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '_test.ts', {
            name: utils.capitalizeFirst(_gen.name),
            nameLowerCase: _gen.name.toLowerCase()
          }];

        expect(_csg.generator.writing).to.have.been.called;

        expect(_csg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_csg.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_csg.generator.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_csg.generator.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
      });
    });
  });

  describe('vue2', () => {
    describe('creation', () => {
      it('should have the right param passed to wrapper', () => {
        let _gen = {
          a: true,
          config: {
            get(){
              return 'vue2'
            }
          }
        };
        let _csg = new ComponentSubGenerator(_gen);

        expect(_csg.generator).to.equal(_gen);
      });
    });

    describe('initializing', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          argument: () => {},
          config: {
            get(){
              return 'vue2'
            }
          }
        };

        sinon.mock(_gen.argument);

        let _csg = new ComponentSubGenerator(_gen);

        _csg.initializing();

        expect(_csg.generator.argument).to.have.been.called;
      });
    });

    describe('writing', () => {
      it('throw error, feature not defined', () => {
        let _gen = {
          name: 'a',
          options: {},
          template: sinon.spy(),
          config: {
            get(){
              return 'vue2'
            }
          }
        };

        let _csg = new ComponentSubGenerator(_gen);

        expect(() => _csg.writing()).to.throw(Error, /Do it like this: --feature something-here/);
      });

      it('should call writing with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy(),
          config: {
            get(token){
              switch(token) {
                case "client": return "vue2";
              }
            }
          }
        };

        let _csg = new ComponentSubGenerator(_gen);

        _csg.writing();

        let _firstCall = [
          'vue2/component.vue',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '.vue', {
            nameCapitalized: utils.capitalizeFirst(_gen.name),
            name: _gen.name,
            feature: _gen.options.feature
          }];

        let _secondCall = [
          'vue2/component_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/components/' + _gen.name + '_test.js', {
            name: utils.capitalizeFirst(_gen.name),
            nameLowerCase: _gen.name.toLowerCase()
          }];

        expect(_csg.generator.writing).to.have.been.called;

        expect(_csg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_csg.generator.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
      });

      it('should call writing with the right stuff - testsSeparated', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy(),
          testsSeparated: false,
          config: {
            get(token) {
              switch (token) {
                case "testsSeparated": return false;
                case "client": return "vue2";
              }
            }
          }
        };

        let _csg = new ComponentSubGenerator(_gen);

        _csg.writing();

        let _firstCall = [
          'vue2/component.vue',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '.vue', {
            nameCapitalized: utils.capitalizeFirst(_gen.name),
            name: _gen.name,
            feature: _gen.options.feature
          }];

        let _secondCall = [
          'vue2/component_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '_test.js', {
            name: utils.capitalizeFirst(_gen.name),
            nameLowerCase: _gen.name.toLowerCase()
          }];

        expect(_csg.generator.writing).to.have.been.called;

        expect(_csg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_csg.generator.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
      });
    });
  })
});
