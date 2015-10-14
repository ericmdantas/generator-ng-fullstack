import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../_ng/known_paths';
import {GoServer} from '../_ng/go';

describe('go', () => {
  describe('go', () => {
    describe('creation', () => {
      it('should have the wrapper as the object passed by param', () => {
        let _newGenerator = {a: true};

        let _n = new GoServer(_newGenerator);

        expect(_n.wrapper).to.equal(_newGenerator);
      })
    })

    describe('copyFiles', () => {
      it('should call the right methods with the right params', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          appName: 'c',
          username: 'd',
          template: sinon.spy()
        }

        let _n = new GoServer(_newGenerator);

        _n.copyFiles();

        let _firstCall = [`go/endpoint.route.go`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/routes/${_newGenerator.name}route.go`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), username: _newGenerator.username, appName: _newGenerator.appName, feature: _newGenerator.feature.replace('/', '')}];
        let _secondCall = [`go/endpoint.controller.go`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}controller.go`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), username: _newGenerator.username, appName: _newGenerator.appName, feature: _newGenerator.feature.replace('/', '')}];
        let _thirdCall = [`go/endpoint.dao.go`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}dao.go`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), username: _newGenerator.username, appName: _newGenerator.appName, feature: _newGenerator.feature.replace('/', '')}];
        let _fourthCall = [`go/endpoint.model.go`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}model.go`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), username: _newGenerator.username, appName: _newGenerator.appName, feature: _newGenerator.feature.replace('/', '')}];
        let _fifthCall = [`go/endpoint.route_test.go`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/routes/${_newGenerator.name}route_test.go`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), username: _newGenerator.username, appName: _newGenerator.appName, feature: _newGenerator.feature.replace('/', '')}];
        let _sixthCall = [`go/endpoint.dao_test.go`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}dao_test.go`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), username: _newGenerator.username, appName: _newGenerator.appName, feature: _newGenerator.feature.replace('/', '')}];
        let _eighthCall = [`go/endpoint.controller_test.go`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}controller_test.go`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), username: _newGenerator.username, appName: _newGenerator.appName, feature: _newGenerator.feature.replace('/', '')}];
        let _seventhCall = [`go/endpoint.model_test.go`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}model_test.go`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), username: _newGenerator.username, appName: _newGenerator.appName, feature: _newGenerator.feature.replace('/', '')}];

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
  })
})
