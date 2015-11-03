import {expect} from 'chai';
import knownPaths from '../_ng/known_paths';
import utils from '../_ng/utils';
import * as sinon from 'sinon';
import {AngularFactory, Angular1, Angular2} from '../_ng/angular';

describe('angular', () => {
  beforeEach(() => {

  });

  describe('factory', () => {
    it('should have the right values for the token', () => {
      expect(AngularFactory.tokens.NG1).to.equal('ng1');
      expect(AngularFactory.tokens.NG2).to.equal('ng2');
    })

    it('should return an error, token not found', () => {
      expect(() => {
        AngularFactory.build('something123');
      }).to.throw(Error, /Invalid Angular token: something123/);
    });

    it('should return an angular1 instance', function() {
      expect(AngularFactory.build('ng1') instanceof Angular1).to.be.true;
    });

    it('should return an angular2 instance', function() {
      expect(AngularFactory.build('ng2') instanceof Angular2).to.be.true;
    });
  });

  describe('ng1', () => {
    describe('copyDirective', () => {
      it('should call the methods with the right params', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          config: {
            get(){return 'ng1'}
          },
          template: sinon.spy()
        };

        let _ng1 = new Angular1(_gen);

        _ng1.copyDirective();

        let _firstCall = ['ng1/directive.js', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/directives/' + _gen.name + '.directive.js', {name: _gen.name}];
        let _secondCall = ['ng1/directive_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/directives/' + _gen.name + '.directive_test.js', {name: _gen.name}];

        expect(_ng1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    });

    describe('copyFactory', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng1 = new Angular1(_gen);

        _ng1.copyFactory();

        let _firstCall = ['ng1/factory.js', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/factory/' + _gen.name + '.factory.js', {name: utils.capitalizeFirst(_gen.name)}];
        let _secondCall = ['ng1/factory_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/factory/' + _gen.name + '.factory_test.js', {name: utils.capitalizeFirst(_gen.name)}];

        expect(_ng1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    })

    describe('copyService', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng1 = new Angular1(_gen);

        let _firstCall = ['ng1/service.js', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.service.js', {name: _gen.name}]
        let _secondCall = ['ng1/service_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/services/' + _gen.name + '.service_test.js', {name: _gen.name}]

        _ng1.copyService();

        expect(_ng1.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng1.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    });
  });

  describe('ng2', () => {
    describe('copyDirective', () => {
      it('should call the methods with the right params', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          config: {
            get(){return 'ng2'}
          },
          template: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        _ng2.copyDirective();

        let _firstCall = ['ng2/directive.ts', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/directives/' + _gen.name + '.directive.ts', {name: _gen.name}];
        let _secondCall = ['ng2/directive_test.ts', knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/directives/' + _gen.name + '.directive_test.ts', {name: _gen.name}];

        expect(_ng2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    });

    describe('copyFactory', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        _ng2.copyFactory();

        let _firstCall = ['ng2/factory.ts', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/factory/' + _gen.name + '.factory.ts', {name: utils.capitalizeFirst(_gen.name)}];
        let _secondCall = ['ng2/factory_test.ts', knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/factory/' + _gen.name + '.factory_test.ts', {name: utils.capitalizeFirst(_gen.name)}];

        expect(_ng2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    });

    describe('copyService', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy()
        };

        let _ng2 = new Angular2(_gen);

        let _firstCall = ['ng2/service.ts', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.service.ts', {name: _gen.name}]
        let _secondCall = ['ng2/service_test.ts', knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/services/' + _gen.name + '.service_test.ts', {name: _gen.name}]

        _ng2.copyService();

        expect(_ng2.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ng2.generator.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    });
  });
});
