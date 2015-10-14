import path from 'path';
import os from 'os';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';

describe('NgFullstack:endpoint', () => {
  describe('node', () => {
     before(function (done) {
        helpers
          .run(path.join(__dirname, '../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withOptions({ 'skip-install': true })
          .withPrompts({appName: "a", githubUsername: "b", server: "node"})
          .on('end', () => {
            _runSub(done);
          });

        var _runSub = (done) => {
           helpers
            .run(path.join(__dirname, '../endpoint'))
            .withArguments('endp')
            .withOptions({ 'skip-install': true, feature: 'todo2'})
            .on('end', done);
        }
      });

      it('creates files', () => {
        assert.file([
          'server/api/todo2/controller/endp.controller.js',
          'server/api/todo2/dao/endp.dao.js',
          'server/api/todo2/model/endp.model.js',
          'server/api/todo2/routes/endp.route.js',

          'tests/server/todo2/dao/endp.dao_test.js'
        ]);
      });
  })

  describe('go', () => {
     before((done) => {
        helpers
          .run(path.join(__dirname, '../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withOptions({ 'skip-install': true })
          .withPrompts({appName: "a", githubUsername: "b", server: "Go"})
          .on('end', () => {
            _runSub(done);
          });

        var _runSub = (done) => {
           helpers
            .run(path.join(__dirname, '../endpoint'))
            .withArguments('endp')
            .withOptions({ 'skip-install': true, feature: 'todo2' })
            .on('end', done);
        }
      });

      //TODO: fix this test, this.config.get('server') is undefined in this test


      /*it('creates files', () => {
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
