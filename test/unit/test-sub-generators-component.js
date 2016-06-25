import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';
import utils from '../../_ng/utils/utils';

import {ComponentSubGenerator} from '../../_ng/client/sub_generators_component';

describe('ComponentSubGenerator', () => {
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

      expect(_csg.wrapper).to.equal(_gen);
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

      expect(_csg.wrapper.argument).to.have.been.called;
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

    it('should throw error, module doesnt implement', () => {
      let _gen = {
        name: 'a',
        options: {
          feature: 'c'
        },
        template: sinon.spy(),
        config: {
          get(){
            return 'ng1'
          }
        }
      };

      let _csg = new ComponentSubGenerator(_gen);

      expect(() => _csg.writing()).to.throw(Error, /ng1 doesn't implement component/);
    });

    it('should call writing with the right stuff', () => {
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
        'component.ts',
        knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '.ts', {
          nameCapitalized: utils.capitalizeFirst(_gen.name),
          name: _gen.name,
          feature: _gen.options.feature
        }];

      let _secondCall = [
        'component.html',
        knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/templates/' + _gen.name + '.html', {
          name: _gen.name
        }];

      let _thirdCall = [
        'component.css',
        knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.css'
      ];

      let _fourthCall = [
        'component.spec.ts',
        knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/components/' + _gen.name + '.spec.ts', {
          name: utils.capitalizeFirst(_gen.name),
          nameLowerCase: _gen.name.toLowerCase()
        }];

      expect(_csg.wrapper.writing).to.have.been.called;

      expect(_csg.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
      expect(_csg.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      expect(_csg.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
      expect(_csg.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
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
        'component.ts',
        knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '.ts', {
          nameCapitalized: utils.capitalizeFirst(_gen.name),
          name: _gen.name,
          feature: _gen.options.feature
        }];

      let _secondCall = [
        'component.html',
        knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/templates/' + _gen.name + '.html', {
          name: _gen.name
        }];

      let _thirdCall = [
        'component.css',
        knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.css'
      ];

      let _fourthCall = [
        'component.spec.ts',
        knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/components/' + _gen.name + '.spec.ts', {
          name: utils.capitalizeFirst(_gen.name),
          nameLowerCase: _gen.name.toLowerCase()
        }];

      expect(_csg.wrapper.writing).to.have.been.called;

      expect(_csg.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
      expect(_csg.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      expect(_csg.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
      expect(_csg.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
    });
  });
});
