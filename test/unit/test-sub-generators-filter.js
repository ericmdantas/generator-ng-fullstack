import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';

import {FilterSubGenerator} from '../../_ng/client/sub_generators_filter';

describe('FilterSubGenerator', () => {
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
      let _fsg = new FilterSubGenerator(_gen);

      expect(_fsg.wrapper).to.equal(_gen);
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

      let _fsg = new FilterSubGenerator(_gen);

      _fsg.initializing();

      expect(_fsg.wrapper.argument).to.have.been.called;
    });
  });

  describe('writing', () => {
    describe('ng1', () => {
      it('should throw FeatureMissingError', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          config: {
            get(){
              return 'ng1'
            }
          },
          options: {},
          template: sinon.spy()
        };

        let _fsg = new FilterSubGenerator(_gen);

        expect(() => _fsg.writing()).to.throw(Error, /Do it like this: --feature something-here/);
      });

      it('should throw ModuleDoesntImplementError', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          config: {
            get(){
              return 'ng2'
            }
          },
          options: {
            feature: 'c'
          },
          template: sinon.spy()
        };

        let _fsg = new FilterSubGenerator(_gen);

        expect(() => _fsg.writing()).to.throw(Error, /ng2 doesn't implement filter/);
      });

      it('should have the writing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          config: {
            get(){
              return 'ng1'
            }
          },
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _fsg = new FilterSubGenerator(_gen);

        _fsg.writing();

        let _firstCall = [
          'ng1/filter.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/filters/' + _gen.name + '.js', {
            name: _gen.name,
            appName: _gen.appName
          }];

        let _secondCall = [
          'ng1/filter_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/filters/' + _gen.name + '_test.js', {
            name: _gen.name,
            appName: _gen.appName
          }];

        expect(_fsg.wrapper.writing).to.have.been.called;
        expect(_fsg.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_fsg.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should have the writing called with the right stuff - testsSeparated', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          testsSeparated: false,
          config: {
            get(token) {
              switch (token) {
                case "testsSeparated": return false;
                default: return 'ng1';
              }
            }
          },
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _fsg = new FilterSubGenerator(_gen);

        _fsg.writing();

        let _firstCall = [
          'ng1/filter.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/filters/' + _gen.name + '.js', {
            name: _gen.name,
            appName: _gen.appName
          }];

        let _secondCall = [
          'ng1/filter_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/filters/' + _gen.name + '_test.js', {
            name: _gen.name,
            appName: _gen.appName
          }];

        expect(_fsg.wrapper.writing).to.have.been.called;
        expect(_fsg.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_fsg.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    })

    describe('vue2', () => {
      it('should throw FeatureMissingError', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          config: {
            get(){
              return 'vue2'
            }
          },
          options: {},
          template: sinon.spy()
        };

        let _fsg = new FilterSubGenerator(_gen);

        expect(() => _fsg.writing()).to.throw(Error, /Do it like this: --feature something-here/);
      });

      it('should have the writing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          config: {
            get(){
              return 'vue2'
            }
          },
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _fsg = new FilterSubGenerator(_gen);

        _fsg.writing();

        let _firstCall = [
          'vue2/filter.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/filters/' + _gen.name + '.js', {
            name: _gen.name
          }];

        let _secondCall = [
          'vue2/filter_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/filters/' + _gen.name + '_test.js', {
            name: _gen.name
          }];

        expect(_fsg.wrapper.writing).to.have.been.called;
        expect(_fsg.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_fsg.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should have the writing called with the right stuff - testsSeparated', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          testsSeparated: false,
          config: {
            get(token) {
              switch (token) {
                case "testsSeparated": return false;
                default: return 'vue2';
              }
            }
          },
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _fsg = new FilterSubGenerator(_gen);

        _fsg.writing();

        let _firstCall = [
          'vue2/filter.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/filters/' + _gen.name + '.js', {
            name: _gen.name
          }];

        let _secondCall = [
          'vue2/filter_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/filters/' + _gen.name + '_test.js', {
            name: _gen.name
          }];

        expect(_fsg.wrapper.writing).to.have.been.called;
        expect(_fsg.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_fsg.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    })

    describe('aurelia1', () => {
      it('should throw FeatureMissingError', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          config: {
            get(){
              return 'aurelia1'
            }
          },
          options: {},
          template: sinon.spy()
        };

        let _fsg = new FilterSubGenerator(_gen);

        expect(() => _fsg.writing()).to.throw(Error, /Do it like this: --feature something-here/);
      });

      it('should have the writing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          config: {
            get(){
              return 'aurelia1'
            }
          },
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _fsg = new FilterSubGenerator(_gen);

        _fsg.writing();

        let _firstCall = [
          'aurelia1/filter.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/filters/' + _gen.name + '.js', {
            name: _gen.name
          }];

        let _secondCall = [
          'aurelia1/filter_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/filters/' + _gen.name + '_test.js', {
            name: _gen.name
          }];

        expect(_fsg.wrapper.writing).to.have.been.called;
        expect(_fsg.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_fsg.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should have the writing called with the right stuff - testsSeparated', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          testsSeparated: false,
          config: {
            get(token) {
              switch (token) {
                case "testsSeparated": return false;
                default: return 'aurelia1';
              }
            }
          },
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _fsg = new FilterSubGenerator(_gen);

        _fsg.writing();

        let _firstCall = [
          'aurelia1/filter.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/filters/' + _gen.name + '.js', {
            name: _gen.name
          }];

        let _secondCall = [
          'aurelia1/filter_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/filters/' + _gen.name + '_test.js', {
            name: _gen.name
          }];

        expect(_fsg.wrapper.writing).to.have.been.called;
        expect(_fsg.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_fsg.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    })
  });
});
