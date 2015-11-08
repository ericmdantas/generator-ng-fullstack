import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';

import {FilterSubGenerator} from '../../_ng/client/sub_generators_filter';

describe('FilterSubGenerator', () => {
  describe('creation', () => {
    it('should have the right param passed to wrapper', () => {
      let _gen = {a: true};
      let _fsg = new FilterSubGenerator(_gen);

      expect(_fsg.wrapper).to.equal(_gen);
    });
  });

  describe('initializing', () => {
    it('should have the initializing called with the right stuff', () => {
      let _gen = {
        argument: () => {}
      };

      sinon.mock(_gen.argument);

      let _fsg = new FilterSubGenerator(_gen);

      _fsg.initializing();

      expect(_fsg.wrapper.argument).to.have.been.called;
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

      let _fsg = new FilterSubGenerator(_gen);

      _fsg.writing();

      let _firstCall = ['filter.js', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '//filters/' + _gen.name + '.filter.js', {name: _gen.name}]
      let _secondCall = ['filter_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '//filters/' + _gen.name + '.filter_test.js', {name: _gen.name}]

      expect(_fsg.wrapper.writing).to.have.been.called;
      expect(_fsg.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
      expect(_fsg.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
    });
  });
});
