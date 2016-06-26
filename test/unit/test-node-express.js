import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';
import {NodeExpressStandard, NodeExpressBabel, NodeExpressTypescript} from '../../_ng/server/node_express';
import {NodeFactory} from '../../_ng/server/node_factory';

describe('node -> express', () => {
  describe('factory', () => {
    it('should have the right values for the tokens()', () => {
      expect(NodeFactory.tokensCompiler().NODE).to.equal('node');
      expect(NodeFactory.tokensCompiler().BABEL).to.equal('babel');
      expect(NodeFactory.tokensCompiler().TYPESCRIPT).to.equal('typescript');
    });

    it('should have an instance of NodeExpressStandard', () => {
      expect(NodeFactory.build({transpilerServer: 'node', webFrameworkServer: 'express'}) instanceof NodeExpressStandard).to.be.true;
    });

    it('should have an instance of NodeExpressBabel', () => {
      expect(NodeFactory.build({transpilerServer: 'babel', webFrameworkServer: 'express'}) instanceof NodeExpressBabel).to.be.true;
    });

    it('should have an instance of NodeExpressTypescript', () => {
      expect(NodeFactory.build({transpilerServer: 'typescript', webFrameworkServer: 'express'}) instanceof NodeExpressTypescript).to.be.true;
    });
  });

  describe('node_standard', () => {
    describe('creation', () => {
      it('should have the wrapper as the object passed by param', () => {
        let _newGenerator = {a: true};

        let _n = new NodeExpressStandard(_newGenerator);

        expect(_n.wrapper).to.equal(_newGenerator);
      })
    });

    describe('copyFiles', () => {
      it('should call the right methods with the right params - testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          template: sinon.spy(),
          directory: sinon.spy(),
          testsSeparated: true
        };

        let _n = new NodeExpressStandard(_newGenerator);

        _n.copyFiles();

        let _firstCall = [
          `node/express/no_transpiler/endpoint.route.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/route/${_newGenerator.name}-route.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _secondCall = [
          `node/express/no_transpiler/endpoint.controller.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}-controller.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _thirdCall = [
          `node/express/no_transpiler/endpoint.dao.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}-dao.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _fourthCall = [
          `node/express/no_transpiler/endpoint.model.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}-model.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _fifthCall = [
          `node/express/no_transpiler/endpoint.dao.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/dao/${_newGenerator.name}-dao.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _sixthCall = [
          `node/express/no_transpiler/endpoint.controller.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/controller/${_newGenerator.name}-controller.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _seventhCall = [
          `node/express/no_transpiler/endpoint.model.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/model/${_newGenerator.name}-model.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _eighthCall = [
          `node/express/no_transpiler/endpoint.route.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/route/${_newGenerator.name}-route.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        expect(_n.wrapper.template).to.have.been.called;
        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1], _sixthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1], _seventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
      });

      it('should call the right methods with the right params - no testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          template: sinon.spy(),
          directory: sinon.spy(),
          testsSeparated: false
        };

        let _n = new NodeExpressStandard(_newGenerator);

        _n.copyFiles();

        let _firstCall = [
          `node/express/no_transpiler/endpoint.route.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/route/${_newGenerator.name}-route.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _secondCall = [
          `node/express/no_transpiler/endpoint.controller.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}-controller.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _thirdCall = [
          `node/express/no_transpiler/endpoint.dao.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}-dao.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _fourthCall = [
          `node/express/no_transpiler/endpoint.model.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}-model.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _fifthCall = [
          `node/express/no_transpiler/endpoint.dao.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}-dao.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _sixthCall = [
          `node/express/no_transpiler/endpoint.controller.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}-controller.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _seventhCall = [
          `node/express/no_transpiler/endpoint.model.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}-model.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _eighthCall = [
          `node/express/no_transpiler/endpoint.route.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/route/${_newGenerator.name}-route.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        expect(_n.wrapper.template).to.have.been.called;
        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1], _sixthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1], _seventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
      });
    });

    describe('copyForMainGenerator', () => {
      it('should call with the right params - not secure - testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          directory: sinon.spy(),
          template: sinon.spy(),
          testsSeparated: true
        };

        let _n = new NodeExpressStandard(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [
          `index_node.js`,
          'index.js'
        ];

        let _secondCall = [
          `server_node/express/server_node_express/server.js`,
          `server/server.js`
        ];

        let _thirdCall = [
          `tasks/server`,
          `tasks/server`
        ];

        let _fourthCall = [
          `tests/server`,
          `tests/server`
        ];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
      });

      it('should call with the right params - not secure - no testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          directory: sinon.spy(),
          template: sinon.spy(),
          testsSeparated: false
        };

        let _n = new NodeExpressStandard(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [
          `index_node.js`,
          'index.js'
        ];

        let _secondCall = [
          `server_node/express/server_node_express/server.js`,
          `server/server.js`
        ];

        let _thirdCall = [
          `tasks/server`,
          `tasks/server`
        ];

        let _fourthCall = [
          'server_node/express/server_node_express/api/todo/controller/todo-controller.spec.js',
          'server/api/todo/controller/todo-controller.spec.js'
        ];

        let _fifthCall = [
          'server_node/express/server_node_express/api/todo/dao/todo-dao.spec.js',
          'server/api/todo/dao/todo-dao.spec.js'
        ];

        let _sixthCall = [
          'server_node/express/server_node_express/api/todo/model/todo-model.spec.js',
          'server/api/todo/model/todo-model.spec.js'
        ];

        let _seventhCall =  [
          'server_node/express/server_node_express/api/todo/route/todo-route.spec.js',
          'server/api/todo/route/todo-route.spec.js'
        ];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
      });

      it('should call with the right params - secure - testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          secure: true,
          directory: sinon.spy(),
          template: sinon.spy(),
          testsSeparated: true
        };

        let _n = new NodeExpressStandard(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [
          `index_node.js`,
          'index.js'
        ];

        let _secondCall = [
          `server_node/express/server_node_express/server_https.js`,
          `server/server.js`
        ];

        let _thirdCall = [
          `tasks/server`,
          `tasks/server`
        ];

        let _fourthCall = [
          `tests/server`,
          `tests/server`
        ];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
      });

      it('should call with the right params - secure - no testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          secure: true,
          directory: sinon.spy(),
          template: sinon.spy(),
          testsSeparated: false
        };

        let _n = new NodeExpressStandard(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [
          `index_node.js`,
          'index.js'
        ];

        let _secondCall = [
          `server_node/express/server_node_express/server_https.js`,
          `server/server.js`
        ];

        let _thirdCall = [
          `tasks/server`,
          `tasks/server`
        ];

        let _fourthCall = [
          'server_node/express/server_node_express/api/todo/controller/todo-controller.spec.js',
          'server/api/todo/controller/todo-controller.spec.js'
        ];

        let _fifthCall = [
          'server_node/express/server_node_express/api/todo/dao/todo-dao.spec.js',
          'server/api/todo/dao/todo-dao.spec.js'
        ];

        let _sixthCall = [
          'server_node/express/server_node_express/api/todo/model/todo-model.spec.js',
          'server/api/todo/model/todo-model.spec.js'
        ];

        let _seventhCall =  [
          'server_node/express/server_node_express/api/todo/route/todo-route.spec.js',
          'server/api/todo/route/todo-route.spec.js'
        ];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
      });
    })
  });

  describe('node_babel', () => {
    describe('creation', () => {
      it('should have the wrapper as the object passed by param', () => {
        let _newGenerator = {a: true};

        let _n = new NodeExpressBabel(_newGenerator);

        expect(_n.wrapper).to.equal(_newGenerator);
      })
    });

    describe('copyFiles', () => {
      it('should call the right methods with the right params - testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          template: sinon.spy(),
          testsSeparated: true
        };

        let _n = new NodeExpressBabel(_newGenerator);

        _n.copyFiles();

        let _firstCall = [
          `node/express/babel/endpoint.route.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/route/${_newGenerator.name}-route.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _secondCall = [
          `node/express/babel/endpoint.controller.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}-controller.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _thirdCall = [
          `node/express/babel/endpoint.dao.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}-dao.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _fourthCall = [
          `node/express/babel/endpoint.model.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}-model.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _fifthCall = [
          `node/express/babel/endpoint.dao.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/dao/${_newGenerator.name}-dao.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _sixthCall = [
          `node/express/babel/endpoint.route.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/route/${_newGenerator.name}-route.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _seventhCall = [
          `node/express/babel/endpoint.model.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/model/${_newGenerator.name}-model.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _eighthCall = [
          `node/express/babel/endpoint.controller.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/controller/${_newGenerator.name}-controller.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        expect(_n.wrapper.template).to.have.been.called;
        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1], _sixthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1], _seventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
      });

      it('should call the right methods with the right params - no testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          template: sinon.spy(),
          testsSeparated: false
        };

        let _n = new NodeExpressBabel(_newGenerator);

        _n.copyFiles();

        let _firstCall = [
          `node/express/babel/endpoint.route.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/route/${_newGenerator.name}-route.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _secondCall = [
          `node/express/babel/endpoint.controller.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}-controller.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _thirdCall = [
          `node/express/babel/endpoint.dao.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}-dao.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _fourthCall = [
          `node/express/babel/endpoint.model.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}-model.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _fifthCall = [
          `node/express/babel/endpoint.dao.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}-dao.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _sixthCall = [
          `node/express/babel/endpoint.route.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/route/${_newGenerator.name}-route.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _seventhCall = [
          `node/express/babel/endpoint.model.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}-model.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _eighthCall = [
          `node/express/babel/endpoint.controller.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}-controller.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        expect(_n.wrapper.template).to.have.been.called;
        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1], _sixthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1], _seventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
      });
    });

    describe('copyForMainGenerator', () => {
      it('should call with the right params - not secure - testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          directory: sinon.spy(),
          template: sinon.spy(),
          testsSeparated: true
        };

        let _n = new NodeExpressBabel(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [
          `index_babel.js`,
          'index.js'
        ];

        let _secondCall = [
          `server_node/express/server_node_express_babel/server.js`,
          `server/server.js`
        ];

        let _thirdCall = [
          `tasks/server`,
          `tasks/server`
        ];

        let _fourthCall = [
          `tests/server`,
          `tests/server`
        ];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
      });

      it('should call with the right params - not secure - no testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          directory: sinon.spy(),
          template: sinon.spy(),
          testsSeparated: false
        };

        let _n = new NodeExpressBabel(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [
          `index_babel.js`,
          'index.js'
        ];

        let _secondCall = [
          `server_node/express/server_node_express_babel/server.js`,
          `server/server.js`
        ];

        let _thirdCall = [
          `tasks/server`,
          `tasks/server`
        ];

        let _fourthCall = [
          'server_node/express/server_node_express_babel/api/todo/controller/todo-controller.spec.js',
          'server/api/todo/controller/todo-controller.spec.js'
        ];

        let _fifthCall = [
          'server_node/express/server_node_express_babel/api/todo/dao/todo-dao.spec.js',
          'server/api/todo/dao/todo-dao.spec.js'
        ];

        let _sixthCall = [
          'server_node/express/server_node_express_babel/api/todo/model/todo-model.spec.js',
          'server/api/todo/model/todo-model.spec.js'
        ];

        let _seventhCall =  [
          'server_node/express/server_node_express_babel/api/todo/route/todo-route.spec.js',
          'server/api/todo/route/todo-route.spec.js'
        ];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
      });

      it('should call with the right params - secure - testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          secure: true,
          name: 'b',
          directory: sinon.spy(),
          template: sinon.spy(),
          testsSeparated: true
        };

        let _n = new NodeExpressBabel(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [
          `index_babel.js`,
          'index.js'
        ];

        let _secondCall = [
          `server_node/express/server_node_express_babel/server_https.js`,
          `server/server.js`
        ];

        let _thirdCall = [
          `tasks/server`,
          `tasks/server`
        ];

        let _fourthCall = [
          `tests/server`,
          `tests/server`
        ];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
      });

      it('should call with the right params - secure - no testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          secure: true,
          name: 'b',
          directory: sinon.spy(),
          template: sinon.spy(),
          testsSeparated: false
        };

        let _n = new NodeExpressBabel(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [
          `index_babel.js`,
          'index.js'
        ];

        let _secondCall = [
          `server_node/express/server_node_express_babel/server_https.js`,
          `server/server.js`
        ];

        let _thirdCall = [
          `tasks/server`,
          `tasks/server`
        ];

        let _fourthCall = [
          'server_node/express/server_node_express_babel/api/todo/controller/todo-controller.spec.js',
          'server/api/todo/controller/todo-controller.spec.js'
        ];

        let _fifthCall = [
          'server_node/express/server_node_express_babel/api/todo/dao/todo-dao.spec.js',
          'server/api/todo/dao/todo-dao.spec.js'
        ];

        let _sixthCall = [
          'server_node/express/server_node_express_babel/api/todo/model/todo-model.spec.js',
          'server/api/todo/model/todo-model.spec.js'
        ];

        let _seventhCall =  [
          'server_node/express/server_node_express_babel/api/todo/route/todo-route.spec.js',
          'server/api/todo/route/todo-route.spec.js'
        ];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
      });
    })
  });

  describe('node_typescript', () => {
    describe('creation', () => {
      it('should have the wrapper as the object passed by param', () => {
        let _newGenerator = {a: true};

        let _n = new NodeExpressTypescript(_newGenerator);

        expect(_n.wrapper).to.equal(_newGenerator);
      })
    });

    describe('copyFiles', () => {
      it('should call the right methods with the right params - testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          template: sinon.spy(),
          testsSeparated: true
        };

        let _n = new NodeExpressTypescript(_newGenerator);

        _n.copyFiles();

        let _firstCall = [
          `node/express/typescript/endpoint.route.ts`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/route/${_newGenerator.name}-route.ts`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _secondCall = [
          `node/express/typescript/endpoint.controller.ts`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}-controller.ts`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _thirdCall = [
          `node/express/typescript/endpoint.dao.ts`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}-dao.ts`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _fourthCall = [
          `node/express/typescript/endpoint.model.ts`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}-model.ts`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _fifthCall = [
          `node/express/typescript/endpoint.dao.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/dao/${_newGenerator.name}-dao.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _sixthCall = [
          `node/express/typescript/endpoint.model.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/model/${_newGenerator.name}-model.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _seventhCall = [
          `node/express/typescript/endpoint.controller.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/controller/${_newGenerator.name}-controller.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _eighthCall = [
          `node/express/typescript/endpoint.route.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/route/${_newGenerator.name}-route.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        expect(_n.wrapper.template).to.have.been.called;
        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1], _sixthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1], _seventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
      });

      it('should call the right methods with the right params - no testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          template: sinon.spy(),
          testsSeparated: false
        };

        let _n = new NodeExpressTypescript(_newGenerator);

        _n.copyFiles();

        let _firstCall = [
          `node/express/typescript/endpoint.route.ts`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/route/${_newGenerator.name}-route.ts`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _secondCall = [
          `node/express/typescript/endpoint.controller.ts`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}-controller.ts`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _thirdCall = [
          `node/express/typescript/endpoint.dao.ts`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}-dao.ts`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _fourthCall = [
          `node/express/typescript/endpoint.model.ts`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}-model.ts`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature
          }
        ];

        let _fifthCall = [
          `node/express/typescript/endpoint.dao.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}-dao.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _sixthCall = [
          `node/express/typescript/endpoint.model.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}-model.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _seventhCall = [
          `node/express/typescript/endpoint.controller.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}-controller.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        let _eighthCall = [
          `node/express/typescript/endpoint.route.spec.js`,
          `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/route/${_newGenerator.name}-route.spec.js`, {
            name: _newGenerator.name,
            nameLowerCase: _newGenerator.name.toLowerCase(),
            feature: _newGenerator.feature,
            testsSeparated: _newGenerator.testsSeparated
          }
        ];

        expect(_n.wrapper.template).to.have.been.called;
        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1], _sixthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1], _seventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
      });
    });

    describe('copyForMainGenerator', () => {
      it('should call with the right params - not secure - testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          directory: sinon.spy(),
          template: sinon.spy(),
          testsSeparated: true
        };

        let _n = new NodeExpressTypescript(_newGenerator);

        _n.copyForMainGenerator();

        let _templateCall = [
          `server_node/express/server_node_express_typescript/server.ts`,
          'server/server.ts'
        ];

        let _firstCall = [
          `index_tsc.js`,
          'index.js'
        ];

        let _secondCall = [
          `_tsconfig.json`,
          `tsconfig.json`
        ];

        let _thirdCall = [
          `_typings_ng2_and_tsc_server.json`,
          `typings.json`
        ];

        let _fourthCall = [
          `tasks/server`,
          `tasks/server`
        ];

        let _fifthCall = [
          `tests/server`,
          `tests/server`
        ];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_templateCall[0], _templateCall[1])).to.be.true;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;
      });

      it('should call with the right params - not secure - no testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          directory: sinon.spy(),
          template: sinon.spy(),
          testsSeparated: false
        };

        let _n = new NodeExpressTypescript(_newGenerator);

        _n.copyForMainGenerator();

        let _templateCall = [
          `server_node/express/server_node_express_typescript/server.ts`,
          'server/server.ts'
        ];

        let _firstCall = [
          `index_tsc.js`,
          'index.js'
        ];

        let _secondCall = [
          `_tsconfig.json`,
          `tsconfig.json`
        ];

        let _thirdCall = [
          `_typings_ng2_and_tsc_server.json`,
          `typings.json`
        ];

        let _fourthCall = [
          `tasks/server`,
          `tasks/server`
        ];

        let _fifthCall = [
          'server_node/express/server_node_express_typescript/api/todo/controller/todo-controller.spec.js',
          'server/api/todo/controller/todo-controller.spec.js'
        ];

        let _sixthCall = [
          'server_node/express/server_node_express_typescript/api/todo/dao/todo-dao.spec.js',
          'server/api/todo/dao/todo-dao.spec.js'
        ];

        let _seventhCall = [
          'server_node/express/server_node_express_typescript/api/todo/model/todo-model.spec.js',
          'server/api/todo/model/todo-model.spec.js'
        ];

        let _eighthCall =  [
          'server_node/express/server_node_express_typescript/api/todo/route/todo-route.spec.js',
          'server/api/todo/route/todo-route.spec.js'
        ];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_templateCall[0], _templateCall[1])).to.be.true;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1])).to.be.true;
      });

      it('should call with the right params - secure - testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          secure: true,
          directory: sinon.spy(),
          template: sinon.spy(),
          testsSeparated: true
        };

        let _n = new NodeExpressTypescript(_newGenerator);

        _n.copyForMainGenerator();

        let _templateCall = [
          `server_node/express/server_node_express_typescript/server_https.ts`,
          'server/server.ts'
        ];

        let _firstCall = [
          `index_tsc.js`,
          'index.js'
        ];

        let _secondCall = [
          `_tsconfig.json`,
          `tsconfig.json`
        ];

        let _thirdCall = [
          `_typings_ng2_and_tsc_server.json`,
          `typings.json`
        ];

        let _fourthCall = [
          `tasks/server`,
          `tasks/server`
        ];

        let _fifthCall = [
          `tests/server`,
          `tests/server`
        ];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_templateCall[0], _templateCall[1])).to.be.true;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;
      });

      it('should call with the right params - secure - no testsSeparated', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          secure: true,
          directory: sinon.spy(),
          template: sinon.spy(),
          testsSeparated: false
        };

        let _n = new NodeExpressTypescript(_newGenerator);

        _n.copyForMainGenerator();

        let _templateCall = [
          `server_node/express/server_node_express_typescript/server_https.ts`,
          'server/server.ts'
        ];

        let _firstCall = [
          `index_tsc.js`,
          'index.js'
        ];

        let _secondCall = [
          `_tsconfig.json`,
          `tsconfig.json`
        ];

        let _thirdCall = [
          `_typings_ng2_and_tsc_server.json`,
          `typings.json`
        ];

        let _fourthCall = [
          `tasks/server`,
          `tasks/server`
        ];

        let _fifthCall = [
          'server_node/express/server_node_express_typescript/api/todo/controller/todo-controller.spec.js',
          'server/api/todo/controller/todo-controller.spec.js'
        ];

        let _sixthCall = [
          'server_node/express/server_node_express_typescript/api/todo/dao/todo-dao.spec.js',
          'server/api/todo/dao/todo-dao.spec.js'
        ];

        let _seventhCall = [
          'server_node/express/server_node_express_typescript/api/todo/model/todo-model.spec.js',
          'server/api/todo/model/todo-model.spec.js'
        ];

        let _eighthCall =  [
          'server_node/express/server_node_express_typescript/api/todo/route/todo-route.spec.js',
          'server/api/todo/route/todo-route.spec.js'
        ];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_templateCall[0], _templateCall[1])).to.be.true;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1])).to.be.true;
        expect(_n.wrapper.directory.calledWith(_fourthCall[0], _fourthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1])).to.be.true;
      });
    })
  });
});
