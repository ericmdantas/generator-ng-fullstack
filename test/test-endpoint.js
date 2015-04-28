'use strict';

var path = require('path');
var os = require('os');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('NgFullstack:endpoint', function () {

  describe('io.js', function()
  {
     before(function (done) {
        helpers
          .run(path.join(__dirname, '../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withOptions({ 'skip-install': true })
          .withPrompts({appName: "a", githubUsername: "b", server: "io.js"})
          .on('end', function()
          {
            _runSub(done)
          });

        var _runSub = function(done)
        {
           helpers
            .run(path.join(__dirname, '../endpoint'))
            .withArguments('endp')
            .withOptions({ 'skip-install': true, feature: 'todo2' })
            .on('end', done);
        }
      });

      it('creates files', function () {
        assert.file([
          'server/api/todo2/controller/endp.controller.js',
          'server/api/todo2/dao/endp.dao.js',
          'server/api/todo2/model/endp.model.js',
          'server/api/todo2/route/endp.route.js',

          'tests/server/todo2/dao/endp.dao_test.js'
        ]);
      });
  })

  describe('go', function()
  {
     before(function (done) {
        helpers
          .run(path.join(__dirname, '../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withOptions({ 'skip-install': true })
          .withPrompts({appName: "a", githubUsername: "b", server: "Go"})
          .on('end', function()
          {
            _runSub(done)
          });

        var _runSub = function(done)
        {
           helpers
            .run(path.join(__dirname, '../endpoint'))
            .withArguments('endp')
            .withOptions({ 'skip-install': true, feature: 'todo2' })
            .on('end', done);
        }
      });

      //TODO: fix this test, this.config.get('server') is undefined in this test


/*      it('creates files', function () {
        assert.file([
          'server/api/todo2/controller/endpcontroller.go',
          'server/api/todo2/dao/endpdao.go',
          'server/api/todo2/model/endpmodel.go',
          'server/api/todo2/route/endproute.go',

          'server/spi/todo2/dao/endpcontroller_test.go',
          'server/spi/todo2/dao/endproute_test.go',
           'server/spi/todo2/dao/endpdao_test.go',
          'server/api/todo2/dao/endmodel_test.go'
        ]);
      });*/
  })
});
