import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../_ng/known_paths';

import {EndpointSubGenerator} from '../_ng/sub_generators_endpoint';

describe('EndpointSubGenerator', () => {
  describe('creation', () => {
    it('should have the right param passed to wrapper', () => {
      let _gen = {a: true};
      let _esg = new EndpointSubGenerator(_gen);

      expect(_esg.wrapper).to.equal(_gen);
    });
  });

  describe('initializing', () => {
    it('should have the initializing called with the right stuff', () => {
      let _gen = {
        argument: () => {}
      };

      sinon.mock(_gen.argument);

      let _esg = new EndpointSubGenerator(_gen);

      _esg.initializing();

      expect(_esg.wrapper.argument).to.have.been.called;
    });
  });

  describe('writing', () => {
    it('should have the initializing called with the right stuff', () => {
      let _gen = {
        name: 'a',
        options: {feature: 'c'},
        template: () => {},
        config: {
          get: () => {}
        }
      };

      sinon.mock(_gen.template);
      sinon.mock(_gen.config.get);

      let _esg = new EndpointSubGenerator(_gen);

      _esg.writing();

      expect(_esg.wrapper.writing).to.have.been.called;
    });
  });
});
