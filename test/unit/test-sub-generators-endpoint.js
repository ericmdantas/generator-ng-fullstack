import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';

import {EndpointSubGenerator} from '../../_ng/server/sub_generators_endpoint';

describe('EndpointSubGenerator', () => {
  describe('creation', () => {
    it('should have the right param passed to wrapper', () => {
      let _gen = {
        a: true,
        transpilerServer: 'node',
        server: 'node',
        config: {
          get(){return 'node'}
        }
      };
      let _esg = new EndpointSubGenerator(_gen);

      expect(_esg.wrapper).to.equal(_gen);
    });
  });

  describe('initializing', () => {
    it('should have the initializing called with the right stuff', () => {
      let _gen = {
        argument: () => {},
        transpilerServer: 'node',
        config: {
          get(){return 'node'}
        }
      };

      sinon.mock(_gen.argument);

      let _esg = new EndpointSubGenerator(_gen);

      _esg.initializing();

      expect(_esg.wrapper.argument).to.have.been.called;
    });
  });

  describe('writing', () => {
    it('should throw FeatureMissingError', () => {
      let _gen = {
        name: 'a',
        options: {},
        transpilerServer: 'node',
        template: () => {},
        config: {
          get() {return 'node'}
        }
      };

      let _esg = new EndpointSubGenerator(_gen);

      expect(() => _esg.writing()).to.throw(Error, /Do it like this: --feature something-here/);
    });

    it('should have the writing called with the right stuff', () => {
      let _gen = {
        name: 'a',
        options: {feature: 'c'},
        transpilerServer: 'node',
        template: () => {},
        config: {
          get() {return 'node'}
        }
      };

      let _esg = new EndpointSubGenerator(_gen);

      _esg.writing();

      expect(_esg.wrapper.writing).to.have.been.called;
    });
  });
});
