import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';
import {GoServer} from '../../_ng/server/go';

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
          githubUsername: 'd',
          template: sinon.spy()
        }

        let _n = new GoServer(_newGenerator);

        _n.copyFiles();

        let _firstCall = [`go/echo/endpoint.route.go`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/routes/${_newGenerator.name}route.go`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), username: _newGenerator.githubUsername, appName: _newGenerator.appName, feature: _newGenerator.feature.replace('/', '')}];
        let _secondCall = [`go/echo/endpoint.controller.go`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}controller.go`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), username: _newGenerator.githubUsername, appName: _newGenerator.appName, feature: _newGenerator.feature.replace('/', '')}];
        let _thirdCall = [`go/echo/endpoint.dao.go`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}dao.go`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), username: _newGenerator.githubUsername, appName: _newGenerator.appName, feature: _newGenerator.feature.replace('/', '')}];
        let _fourthCall = [`go/echo/endpoint.model.go`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}model.go`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), username: _newGenerator.githubUsername, appName: _newGenerator.appName, feature: _newGenerator.feature.replace('/', '')}];
        let _fifthCall = [`go/echo/endpoint.route_test.go`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/routes/${_newGenerator.name}route_test.go`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), username: _newGenerator.githubUsername, appName: _newGenerator.appName, feature: _newGenerator.feature.replace('/', '')}];
        let _sixthCall = [`go/echo/endpoint.dao_test.go`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}dao_test.go`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), username: _newGenerator.githubUsername, appName: _newGenerator.appName, feature: _newGenerator.feature.replace('/', '')}];
        let _eighthCall = [`go/echo/endpoint.controller_test.go`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}controller_test.go`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), username: _newGenerator.githubUsername, appName: _newGenerator.appName, feature: _newGenerator.feature.replace('/', '')}];
        let _seventhCall = [`go/echo/endpoint.model_test.go`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}model_test.go`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), username: _newGenerator.githubUsername, appName: _newGenerator.appName, feature: _newGenerator.feature.replace('/', '')}];

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
      it('should call the right methods with the right params', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          appName: 'c',
          githubUsername: 'd',
          template: sinon.spy()
        }

        let _n = new GoServer(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [`server_go/echo/main.go`, `server/main.go`, {appName: _newGenerator.appName, username: _newGenerator.githubUsername, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _secondCall = [`server_go/echo/routes/routes.go`, `server/routes/routes.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _thirdCall = [`server_go/echo/routes/routes_test.go`, `server/routes/routes_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _fourthCall = [`server_go/echo/config/dbconfig.go`, `server/config/dbconfig.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _fifthCall = [`server_go/echo/config/dbconfig_test.go`, `server/config/dbconfig_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _sixthCall = [`server_go/echo/common/static/static.go`, `server/common/static/static.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _seventhCall = [`server_go/echo/common/static/static_test.go`, `server/common/static/static_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _eighthCall = [`server_go/echo/api/todo/routes/todoroutes.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _ninethCall = [`server_go/echo/api/todo/routes/todoroutes_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _tenthCall = [`server_go/echo/api/todo/model/todomodel.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _eleventhCall = [`server_go/echo/api/todo/model/todomodel_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _twelfthCall = [`server_go/echo/api/todo/dao/tododao.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _thirteenthCall = [`server_go/echo/api/todo/dao/tododao_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _fourteenthCall = [`server_go/echo/api/todo/controller/todocontroller.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _fifteenfhCall = [`server_go/echo/api/todo/controller/todocontroller_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1], _sixthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1], _seventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_ninethCall[0], _ninethCall[1], _ninethCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_tenthCall[0], _tenthCall[1], _tenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eleventhCall[0], _eleventhCall[1], _eleventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_twelfthCall[0], _twelfthCall[1], _twelfthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirteenthCall[0], _thirteenthCall[1], _thirteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourteenthCall[0], _fourteenthCall[1], _fourteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifteenfhCall[0], _fifteenfhCall[1], _fifteenfhCall[2])).to.be.true;
      });

      it('should call the right methods with the right params - secure', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          appName: 'c',
          githubUsername: 'd',
          template: sinon.spy(),
          secure: true
        }

        let _n = new GoServer(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [`server_go/echo/main_http2.go`, `server/main.go`, {appName: _newGenerator.appName, username: _newGenerator.githubUsername, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _secondCall = [`server_go/echo/routes/routes.go`, `server/routes/routes.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _thirdCall = [`server_go/echo/routes/routes_test.go`, `server/routes/routes_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _fourthCall = [`server_go/echo/config/dbconfig.go`, `server/config/dbconfig.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _fifthCall = [`server_go/echo/config/dbconfig_test.go`, `server/config/dbconfig_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _sixthCall = [`server_go/echo/common/static/static.go`, `server/common/static/static.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _seventhCall = [`server_go/echo/common/static/static_test.go`, `server/common/static/static_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _eighthCall = [`server_go/echo/api/todo/routes/todoroutes.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _ninethCall = [`server_go/echo/api/todo/routes/todoroutes_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _tenthCall = [`server_go/echo/api/todo/model/todomodel.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _eleventhCall = [`server_go/echo/api/todo/model/todomodel_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _twelfthCall = [`server_go/echo/api/todo/dao/tododao.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _thirteenthCall = [`server_go/echo/api/todo/dao/tododao_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _fourteenthCall = [`server_go/echo/api/todo/controller/todocontroller.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _fifteenfhCall = [`server_go/echo/api/todo/controller/todocontroller_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1], _sixthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1], _seventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_ninethCall[0], _ninethCall[1], _ninethCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_tenthCall[0], _tenthCall[1], _tenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eleventhCall[0], _eleventhCall[1], _eleventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_twelfthCall[0], _twelfthCall[1], _twelfthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirteenthCall[0], _thirteenthCall[1], _thirteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourteenthCall[0], _fourteenthCall[1], _fourteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifteenfhCall[0], _fifteenfhCall[1], _fifteenfhCall[2])).to.be.true;
      });

      it('should call the right methods with the right params - secure', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          appName: 'c',
          githubUsername: 'd',
          template: sinon.spy(),
          secure: true
        }

        let _n = new GoServer(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [`server_go/echo/main_http2.go`, `server/main.go`, {appName: _newGenerator.appName, username: _newGenerator.githubUsername, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _secondCall = [`server_go/echo/routes/routes.go`, `server/routes/routes.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _thirdCall = [`server_go/echo/routes/routes_test.go`, `server/routes/routes_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _fourthCall = [`server_go/echo/config/dbconfig.go`, `server/config/dbconfig.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _fifthCall = [`server_go/echo/config/dbconfig_test.go`, `server/config/dbconfig_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _sixthCall = [`server_go/echo/common/static/static.go`, `server/common/static/static.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _seventhCall = [`server_go/echo/common/static/static_test.go`, `server/common/static/static_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _eighthCall = [`server_go/echo/api/todo/routes/todoroutes.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _ninethCall = [`server_go/echo/api/todo/routes/todoroutes_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _tenthCall = [`server_go/echo/api/todo/model/todomodel.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _eleventhCall = [`server_go/echo/api/todo/model/todomodel_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _twelfthCall = [`server_go/echo/api/todo/dao/tododao.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _thirteenthCall = [`server_go/echo/api/todo/dao/tododao_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _fourteenthCall = [`server_go/echo/api/todo/controller/todocontroller.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _fifteenfhCall = [`server_go/echo/api/todo/controller/todocontroller_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_sixthCall[0], _sixthCall[1], _sixthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_seventhCall[0], _seventhCall[1], _seventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_ninethCall[0], _ninethCall[1], _ninethCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_tenthCall[0], _tenthCall[1], _tenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eleventhCall[0], _eleventhCall[1], _eleventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_twelfthCall[0], _twelfthCall[1], _twelfthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirteenthCall[0], _thirteenthCall[1], _thirteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourteenthCall[0], _fourteenthCall[1], _fourteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifteenfhCall[0], _fifteenfhCall[1], _fifteenfhCall[2])).to.be.true;
      });

      it('should call the right methods with the right params - differentStaticServer', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          appName: 'c',
          differentStaticServer: true,
          githubUsername: 'd',
          template: sinon.spy(),
          secure: true
        }

        let _n = new GoServer(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [`server_go/echo/main_http2.go`, `server/main.go`, {appName: _newGenerator.appName, username: _newGenerator.githubUsername, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _secondCall = [`server_go/echo/routes/routes.go`, `server/routes/routes.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _thirdCall = [`server_go/echo/routes/routes_test.go`, `server/routes/routes_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _fourthCall = [`server_go/echo/config/dbconfig.go`, `server/config/dbconfig.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _fifthCall = [`server_go/echo/config/dbconfig_test.go`, `server/config/dbconfig_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _eighthCall = [`server_go/echo/api/todo/routes/todoroutes.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _ninethCall = [`server_go/echo/api/todo/routes/todoroutes_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _tenthCall = [`server_go/echo/api/todo/model/todomodel.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _eleventhCall = [`server_go/echo/api/todo/model/todomodel_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _twelfthCall = [`server_go/echo/api/todo/dao/tododao.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _thirteenthCall = [`server_go/echo/api/todo/dao/tododao_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _fourteenthCall = [`server_go/echo/api/todo/controller/todocontroller.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _fifteenfhCall = [`server_go/echo/api/todo/controller/todocontroller_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_ninethCall[0], _ninethCall[1], _ninethCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_tenthCall[0], _tenthCall[1], _tenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eleventhCall[0], _eleventhCall[1], _eleventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_twelfthCall[0], _twelfthCall[1], _twelfthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirteenthCall[0], _thirteenthCall[1], _thirteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourteenthCall[0], _fourteenthCall[1], _fourteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifteenfhCall[0], _fifteenfhCall[1], _fifteenfhCall[2])).to.be.true;
      });

      it('should call the right methods with the right params - differentStaticServer is false, but serverOnly is true', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          appName: 'c',
          stack: "server",
          differentStaticServer: false,
          githubUsername: 'd',
          template: sinon.spy(),
          secure: true
        }

        let _n = new GoServer(_newGenerator);

        _n.copyForMainGenerator();

        let _firstCall = [`server_go/echo/main_http2.go`, `server/main.go`, {appName: _newGenerator.appName, username: _newGenerator.githubUsername, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _secondCall = [`server_go/echo/routes/routes.go`, `server/routes/routes.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _thirdCall = [`server_go/echo/routes/routes_test.go`, `server/routes/routes_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _fourthCall = [`server_go/echo/config/dbconfig.go`, `server/config/dbconfig.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _fifthCall = [`server_go/echo/config/dbconfig_test.go`, `server/config/dbconfig_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _eighthCall = [`server_go/echo/api/todo/routes/todoroutes.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _ninethCall = [`server_go/echo/api/todo/routes/todoroutes_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/routes/todoroutes_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _tenthCall = [`server_go/echo/api/todo/model/todomodel.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _eleventhCall = [`server_go/echo/api/todo/model/todomodel_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/model/todomodel_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _twelfthCall = [`server_go/echo/api/todo/dao/tododao.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _thirteenthCall = [`server_go/echo/api/todo/dao/tododao_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/dao/tododao_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        let _fourteenthCall = [`server_go/echo/api/todo/controller/todocontroller.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];
        let _fifteenfhCall = [`server_go/echo/api/todo/controller/todocontroller_test.go`, `${knownPaths.PATH_SERVER_FEATURES}todo/controller/todocontroller_test.go`, {username: _newGenerator.githubUsername, appName: _newGenerator.appName, differentStaticServer: !!_newGenerator.differentStaticServer}];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eighthCall[0], _eighthCall[1], _eighthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_ninethCall[0], _ninethCall[1], _ninethCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_tenthCall[0], _tenthCall[1], _tenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_eleventhCall[0], _eleventhCall[1], _eleventhCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_twelfthCall[0], _twelfthCall[1], _twelfthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirteenthCall[0], _thirteenthCall[1], _thirteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourteenthCall[0], _fourteenthCall[1], _fourteenthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifteenfhCall[0], _fifteenfhCall[1], _fifteenfhCall[2])).to.be.true;
      });
    });
  })
})
