const {expect} = require('chai');
const sinon = require('sinon');
const knownPaths = require('../../_ng/utils/known_paths');

const {EndpointSubGenerator} = require('../../_ng/server/sub_generators_endpoint');

describe('EndpointSubGenerator', () => {
  describe('creation', () => {
    it('should have the right param passed to wrapper', () => {
      let _gen = {
        a: true,
        transpilerServer: 'node',
        nodeWebFrameworkServer: 'express',
        server: 'node',
        testsSeparated: true,
        config: {
          get(token) {
            switch (token) {
              case "server": return "node";
              case "transpilerServer": return "node";
              case "nodeWebFrameworkServer": return "express";
              case "testsSeparated": return true;
            }
          }
        }
      };
      let _esg = new EndpointSubGenerator(_gen);

      expect(_esg.generator).to.equal(_gen);
    });
  });

  describe('initializing', () => {
    it('should have the initializing called with the right stuff', () => {
      let _gen = {
        argument: () => {},
        transpilerServer: 'node',
        nodeWebFrameworkServer: 'express',
        testsSeparated: true,
        config: {
          get(token) {
            switch (token) {
              case "server": return "node";
              case "transpilerServer": return "node";
              case "nodeWebFrameworkServer": return "express";
              case "testsSeparated": return true;
            }
          }
        }
      };

      sinon.mock(_gen.argument);

      let _esg = new EndpointSubGenerator(_gen);

      _esg.initializing();

      expect(_esg.generator.argument).to.have.been.called;
    });
  });

  describe('writing', () => {
    it('should throw FeatureMissingError', () => {
      let _gen = {
        name: 'a',
        options: {},
        transpilerServer: 'node',
        nodeWebFrameworkServer: 'express',
        testsSeparated: true,
        template: () => {},
        config: {
          get(token) {
            switch (token) {
              case "server": return "node";
              case "transpilerServer": return "node";
              case "nodeWebFrameworkServer": return "express";
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
        nodeWebFrameworkServer: 'express',
        testsSeparated: true,
        template: () => {},
        config: {
          get(token) {
            switch (token) {
              case "server": return "node";
              case "transpilerServer": return "node";
              case "nodeWebFrameworkServer": return "express";
              case "testsSeparated": return true;
            }
          }
        }
      };

      let _esg = new EndpointSubGenerator(_gen);

      _esg.writing();

      expect(_esg.generator.writing).to.have.been.called;
    });

    it('should have the writing called with the right stuff - testsSeparated', () => {
      let _gen = {
        name: 'a',
        options: {feature: 'c'},
        transpilerServer: 'node',
        nodeWebFrameworkServer: 'express',
        testsSeparated: false,
        template: () => {},
        config: {
          get(token) {
            switch (token) {
              case "server": return "node";
              case "transpilerServer": return "node";
              case "nodeWebFrameworkServer": return "express";
              case "testsSeparated": return false;
            }
          }
        }
      };

      let _esg = new EndpointSubGenerator(_gen);

      _esg.writing();

      expect(_esg.generator.writing).to.have.been.called;
    });
  });
});
