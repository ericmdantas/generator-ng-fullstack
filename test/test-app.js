'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');
var optionsParser = require('../options-parser');
var knownPaths = require('../known-paths');
var utils = require('../utils');

describe('ng-fullstack:app', () => {

  describe('files copy', () => {
    var _commonFiles = [
      '.editorconfig',
      '.jshintrc',
      '.bowerrc',
      '.travis.yml',
      '.gitignore',
      '.editorconfig',
      '.jshintrc',

      'bower.json',
      'package.json',
      'gulpfile.js',
      'karma.conf.js',
      'protractor.conf.js',
      'newrelic.js',
      'procfile.txt',

      // client stuff

      'client/dev/favicon.png',
      'client/dev/index.html',

      'client/dev/css/events.less',
      'client/dev/css/fonts.less',
      'client/dev/css/frameworks_overrides.less',
      'client/dev/css/media_queries.less',
      'client/dev/css/position.less',
      'client/dev/css/styles.less',

      'client/dev/imgs/todo-bkg.png',

      'client/dev/js/app.js',

      'client/dev/js/todo/dao/todo.dao.js',
      'client/dev/js/todo/model/todo.model.js',
      'client/dev/js/todo/resource/todo.resource.js',
      'client/dev/js/todo/controllers/todo.controller.js',

      'client/dev/views/todo.html',

      // tests - client

      'tests/client/_helpers/invalid-inputs.js',

      'tests/client/common/controllers/router.controller_test.js',
      'tests/client/todo/dao/todo.dao_test.js',
      'tests/client/todo/models/todo.model_test.js',
      'tests/client/components/todo/todo_test.js',

      // tests - e2e

      'tests/e2e/todo.e2e._test.js']

      describe('node - babel', () => {
        var _nodeFiles = [
          // server stuff

          'index.js', // babel's entry point

          'server/server.js',

          'server/routes/index.js',

          'server/constants/db.json',

          'server/config/db.conf.js',
          'server/config/routes.conf.js',

          'server/commons/socket/socket-events.js',
          'server/commons/static/index.js',
          'server/commons/static/index.js',
          'server/commons/static/index.js',

          'server/auth/local/index.js',

          'server/api/todo/controller/todo.controller.js',
          'server/api/todo/dao/todo.dao.js',
          'server/api/todo/model/todo.model.js',
          'server/api/todo/routes/todo.routes.js',


          // tests - server

          'tests/server/todo/daos/todo.dao_test.js',
          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json']

        _commonFiles
          .forEach(function(common){
            _nodeFiles.push(common);
          })

        before(function (done) {
          helpers
            .run(path.join(__dirname, '../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withOptions({ 'skip-install': true })
            .withPrompts({appName: "a", githubUsername: "b", server: "node", transpilerServer: 'Babel'})
            .on('end', done);
        });

        it('creates default files - node', () => {
          assert.file(_nodeFiles);
        });
      })

      describe('node - typescript', () => {
        var _nodeFiles = [
          // server stuff

          'index.js', // babel's entry point

          'server/server.ts',

          'server/routes/index.ts',

          'server/constants/db.json',

          'server/config/db.conf.ts',
          'server/config/routes.conf.ts',

          'server/commons/socket/socket-events.ts',
          'server/commons/static/index.ts',
          'server/commons/static/index.ts',
          'server/commons/static/index.ts',

          'server/auth/local/index.ts',

          'server/api/todo/controller/todo.controller.ts',
          'server/api/todo/dao/todo.dao.ts',
          'server/api/todo/model/todo.model.ts',
          'server/api/todo/routes/todo.routes.ts',


          // tests - server

          'tests/server/todo/daos/todo.dao_test.js',
          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json']

        _commonFiles
          .forEach(function(common){
            _nodeFiles.push(common);
          })

        before(function (done) {
          helpers
            .run(path.join(__dirname, '../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withOptions({ 'skip-install': true })
            .withPrompts({appName: "a", githubUsername: "b", server: "node", transpilerServer: 'Typescript'})
            .on('end', done);
        });

        it('creates default files - node', () =>  {
          assert.file(_nodeFiles);
        });
      })

      describe('Go', () => {
        var _goFiles = [
          // server stuff

          'server/main.go',

          'server/routes/routes.go',

          'server/config/dbconfig.go',

          'server/common/static/static.go',

          'server/api/todo/controller/todocontroller.go',
          'server/api/todo/dao/tododao.go',
          'server/api/todo/model/todomodel.go',
          'server/api/todo/routes/todoroutes.go',


          // tests - server

          'server/routes/routes_test.go',

          'server/config/dbconfig_test.go',

          'server/common/static/static_test.go',

          'server/api/todo/controller/todocontroller_test.go',
          'server/api/todo/dao/tododao_test.go',
          'server/api/todo/model/todomodel_test.go',
          'server/api/todo/routes/todoroutes_test.go',

          // tests - e2e

          'tests/e2e/todo.e2e._test.js']

        _commonFiles
          .forEach(function(common){
            _goFiles.push(common)
          });

        before(function (done) {
          helpers
            .run(path.join(__dirname, '../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withOptions({ 'skip-install': true })
            .withPrompts({appName: "a", githubUsername: "b", server: "Go"})
            .on('end', done);
        });

        it('creates default files - Go', () =>  {
          assert.file(_goFiles);
        });
      })
  })

  describe('options-parser', () => {
    it('should return ``, no params', () => {
      assert.equal(optionsParser.getFeature({}), '');
    })

    it('should return ``, empty object', () => {
      assert.equal(optionsParser.getFeature({}), '');
    })

    it('should return /something, no params', () => {
      assert.equal(optionsParser.getFeature({feature: 'something'}), 'something/');
    })
  })

  describe('knownPaths', () => {
    it('should have the right info for PATH_CLIENT_FEATURES', () => {
      assert.equal(knownPaths.PATH_CLIENT_FEATURES, 'client/dev/js/');
    })

    it('should have the right info for PATH_CLIENT_FEATURES_TEST', () => {
      assert.equal(knownPaths.PATH_CLIENT_FEATURES_TEST, 'tests/client/');
    })

    it('should have the right info for PATH_SERVER_FEATURES', () => {
      assert.equal(knownPaths.PATH_SERVER_FEATURES, 'server/api/');
    })

    it('should have the right info for PATH_SERVER_FEATURES_TEST', () => {
      assert.equal(knownPaths.PATH_SERVER_FEATURES_TEST, 'tests/server/');
    })
  })

  describe('capitalizeFirst', () => {
      it('should not capitalize it - nothing passed', () => {
          assert.equal(utils.capitalizeFirst(), '');
      })

      it('should capitalize it - one letter', () => {
        assert.equal(utils.capitalizeFirst('a'), 'A');
      })

      it('should capitalize it - two words', () => {
        assert.equal(utils.capitalizeFirst('a b'), 'A b');
      })
  })
})
