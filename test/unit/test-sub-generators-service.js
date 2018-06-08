const {expect} = require('chai');
const sinon = require('sinon');
const knownPaths = require('../../_ng/utils/known_paths');

const {ServiceSubGenerator} = require('../../_ng/client/sub_generators_service');

describe('ServiceSubGenerator', () => {
  describe('creation', () => {
    it('should have the right param passed to wrapper', () => {
      let _gen = {
        a: true,
        config: {
          get(){return 'ng1'}
        }
      };

      let _ssg = new ServiceSubGenerator(_gen);

      expect(_ssg.generator).to.equal(_gen);
    });
  });

  describe('initializing', () => {
    it('should have the initializing called with the right stuff', () => {
      let _gen = {
        argument(){},
        config: {
          get(){return 'ng1'}
        }
      };

      let _ssg = new ServiceSubGenerator(_gen);

      _ssg.initializing();

      expect(_ssg.generator.argument).to.have.been.called;
    });
  });

  describe('writing', () => {
    describe('ng1', () => {
      it('should throw FeatureMissingError', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          options: {},
          template: sinon.spy(),
          config: {
            get(){return 'ng1'}
          }
        };

        let _ssg = new ServiceSubGenerator(_gen);

        expect(() => _ssg.writing()).to.throw(Error, /Do it like this: --feature something-here/);
      });

      it('should have the writing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          options: {feature: 'c'},
          testsSeparated: false,
          template: sinon.spy(),
          config: {
            get(){return 'ng1'}
          }
        };

        let _ssg = new ServiceSubGenerator(_gen);

        let _firstCall = [
          'ng1/service.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.js', {
            name: _gen.name,
            appName: _gen.appName
          }];

        let _secondCall = [
          'ng1/service_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/services/' + _gen.name + '_test.js', {
            name: _gen.name,
            appName: _gen.appName
          }];

        _ssg.writing();

        expect(_ssg.generator.writing).to.have.been.called;
        expect(_ssg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ssg.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should have the writing called with the right stuff - testsSeparated', () => {
        let _gen = {
          name: 'a',
          appName: 'b',
          options: {feature: 'c'},
          testsSeparated: false,
          template: sinon.spy(),
          config: {
            get(token) {
              switch (token) {
                case "testsSeparated": return false;
                default: return 'ng1';
              }
            }
          }
        };

        let _ssg = new ServiceSubGenerator(_gen);

        let _firstCall = [
          'ng1/service.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.js', {
            name: _gen.name,
            appName: _gen.appName
          }];

        let _secondCall = [
          'ng1/service_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '_test.js', {
            name: _gen.name,
            appName: _gen.appName
          }];

        _ssg.writing();

        expect(_ssg.generator.writing).to.have.been.called;
        expect(_ssg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ssg.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    })

    describe('ng2', () => {
      it('should throw FeatureMissingError', () => {
        let _gen = {
          name: 'a',
          options: {},
          template: sinon.spy(),
          config: {
            get(){return 'ng2'}
          }
        };

        let _ssg = new ServiceSubGenerator(_gen);

        expect(() => _ssg.writing()).to.throw(Error, /Do it like this: --feature something-here/);
      });

      it('should have the writing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy(),
          config: {
            get(){return 'ng2'}
          }
        };

        let _ssg = new ServiceSubGenerator(_gen);

        let _firstCall = [
          'ng2/service.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.ts', {
            name: _gen.name
          }];

        let _secondCall = [
          'ng2/service_test.ts',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/services/' + _gen.name + '_test.ts', {
            name: _gen.name
          }];

        _ssg.writing();

        expect(_ssg.generator.writing).to.have.been.called;
        expect(_ssg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ssg.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should have the writing called with the right stuff - testsSeparated', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          testsSeparated: false,
          template: sinon.spy(),
          config: {
            get(token) {
              switch (token) {
                case "testsSeparated": return false;
                default: return 'ng2';
              }
            }
          }
        };

        let _ssg = new ServiceSubGenerator(_gen);

        let _firstCall = [
          'ng2/service.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.ts', {
            name: _gen.name
          }];

        let _secondCall = [
          'ng2/service_test.ts',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '_test.ts', {
            name: _gen.name
          }];

        _ssg.writing();

        expect(_ssg.generator.writing).to.have.been.called;
        expect(_ssg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ssg.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    })

    describe('vue2', () => {
      it('should throw FeatureMissingError', () => {
        let _gen = {
          name: 'a',
          options: {},
          template: sinon.spy(),
          config: {
            get(){return 'vue2'}
          }
        };

        let _ssg = new ServiceSubGenerator(_gen);

        expect(() => _ssg.writing()).to.throw(Error, /Do it like this: --feature something-here/);
      });

      it('should have the writing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy(),
          config: {
            get(){return 'vue2'}
          }
        };

        let _ssg = new ServiceSubGenerator(_gen);

        let _firstCall = [
          'vue2/service.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.js', {
            name: _gen.name
          }];

        let _secondCall = [
          'vue2/service_test.js',
          knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/services/' + _gen.name + '_test.js', {
            name: _gen.name
          }];

        _ssg.writing();

        expect(_ssg.generator.writing).to.have.been.called;
        expect(_ssg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ssg.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });

      it('should have the writing called with the right stuff - testsSeparated', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          testsSeparated: false,
          template: sinon.spy(),
          config: {
            get(token) {
              switch (token) {
                case "testsSeparated": return false;
                default: return 'vue2';
              }
            }
          }
        };

        let _ssg = new ServiceSubGenerator(_gen);

        let _firstCall = [
          'vue2/service.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.js', {
            name: _gen.name
          }];

        let _secondCall = [
          'vue2/service_test.js',
          knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '_test.js', {
            name: _gen.name
          }];

        _ssg.writing();

        expect(_ssg.generator.writing).to.have.been.called;
        expect(_ssg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ssg.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    })
  });
});
