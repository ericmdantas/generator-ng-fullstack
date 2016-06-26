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
        webFrameworkServer: 'express',
        server: 'node',
        testsSeparated: true,
        config: {
          get(token) {
            switch (token) {
              case "server": return "node";
              case "transpilerServer": return "node";
              case "webFrameworkServer": return "express";
              case "testsSeparated": return true;
            }
          }
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
        webFrameworkServer: 'express',
        testsSeparated: true,
        config: {
          get(token) {
            switch (token) {
              case "server": return "node";
              case "transpilerServer": return "node";
              case "webFrameworkServer": return "express";
              case "testsSeparated": return true;
            }
          }
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
        webFrameworkServer: 'express',
        testsSeparated: true,
        template: () => {},
        config: {
          get(token) {
            switch (token) {
              case "server": return "node";
              case "transpilerServer": return "node";
              case "webFrameworkServer": return "express";
              case "testsSeparated": return true;
            }
          }
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
        webFrameworkServer: 'express',
        testsSeparated: true,
        template: () => {},
        config: {
          get(token) {
            switch (token) {
              case "server": return "node";
              case "transpilerServer": return "node";
              case "webFrameworkServer": return "express";
              case "testsSeparated": return true;
            }
          }
        }
      };

      let _esg = new EndpointSubGenerator(_gen);

      _esg.writing();

      expect(_esg.wrapper.writing).to.have.been.called;
    });

    it('should have the writing called with the right stuff - testsSeparated', () => {
      let _gen = {
        name: 'a',
        options: {feature: 'c'},
        transpilerServer: 'node',
        webFrameworkServer: 'express',
        testsSeparated: false,
        template: () => {},
        config: {
          get(token) {
            switch (token) {
              case "server": return "node";
              case "transpilerServer": return "node";
              case "webFrameworkServer": return "express";
              case "testsSeparated": return false;
            }
          }
        }
      };

      let _esg = new EndpointSubGenerator(_gen);

      _esg.writing();

      expect(_esg.wrapper.writing).to.have.been.called;
    });
  });
});
