import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';
import utils from '../../_ng/utils/utils';

import {ComponentSubGenerator} from '../../_ng/client/sub_generators_component';

describe('ComponentSubGenerator', () => {
  describe('creation', () => {
    it('should have the right param passed to wrapper', () => {
      let _gen = {a: true};
      let _csg = new ComponentSubGenerator(_gen);

      expect(_csg.wrapper).to.equal(_gen);
    });
  });

  describe('initializing', () => {
    it('should have the initializing called with the right stuff', () => {
      let _gen = {
        argument: () => {}
      };

      sinon.mock(_gen.argument);

      let _csg = new ComponentSubGenerator(_gen);

      _csg.initializing();

      expect(_csg.wrapper.argument).to.have.been.called;
    });
  });

  describe('writing', () => {
    it('should have the initializing called with the right stuff', () => {
      let _gen = {
        name: 'a',
        options: {feature: 'c'},
        template: sinon.spy()
      };

      sinon.mock(_gen.template);

      let _csg = new ComponentSubGenerator(_gen);

      _csg.writing();

      let _firstCall = ['component.ts', knownPaths.PATH_CLIENT_FEATURES + '../components/' + _gen.name + '/' + _gen.name + '.ts', {name: utils.capitalizeFirst(_gen.name)}]
      let _secondCall = ['component.html', knownPaths.PATH_CLIENT_FEATURES + '../components/' + _gen.name + '/' + _gen.name + '.html', {name: _gen.name}]
      let _thirdCall = ['component_test.ts', knownPaths.PATH_CLIENT_FEATURES_TEST + '/components/' + _gen.name + '/' + _gen.name + '_test.ts', {name: utils.capitalizeFirst(_gen.name), nameLowerCase: _gen.name.toLowerCase()}]

      expect(_csg.wrapper.writing).to.have.been.called;
      expect(_csg.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
      expect(_csg.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      expect(_csg.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
    });
  });
});
