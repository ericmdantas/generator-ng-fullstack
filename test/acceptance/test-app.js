import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import os from 'os';
import {MockConfigFile} from '../../_test_helpers/mocks';

describe('ng-fullstack:app', () => {

  describe('fullstack', () => {
    let _taskFiles = [
      'tasks/default.js',
      'tasks/index.js',

      'tasks/client/index.js',
      'tasks/client/build_font.js',
      'tasks/client/build_html.js',
      'tasks/client/build_image.js',
      'tasks/client/build_rev.js',
      'tasks/client/del.js',
      'tasks/client/test.js',
      'tasks/client/watch.js',
      'tasks/client/const.js',

      'tasks/server/build.js',
      'tasks/server/del.js',
      'tasks/server/test.js',
      'tasks/server/watch.js'
    ]

    let _commonFiles = [
      '.editorconfig',
      '.jshintrc',
      '.bowerrc',
      '.travis.yml',
      '.gitignore',
      '.editorconfig',
      '.jshintrc',

      'bower.json',
      'package.json',
      'gulpfile.babel.js',
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

      describe('node - standard', () => {
        let _nodeFiles = [
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

        _commonFiles.forEach((common) => _nodeFiles.push(common));
        _taskFiles.forEach((t) => _nodeFiles.push(t));

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({appName: "a", githubUsername: "b", server: "node", transpilerServer: 'node', stack: 'fullstack', client: 'ng1'})
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - node', () => {
          assert.file(_nodeFiles);
        });
      })

      describe('node - babel', () => {
        let _nodeFiles = [
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

        _commonFiles.forEach((common) => _nodeFiles.push(common));
        _taskFiles.forEach((t) => _nodeFiles.push(t));

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({appName: "a", githubUsername: "b", server: "node", transpilerServer: 'babel', stack: 'fullstack', client: 'ng1'})
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - node', () => {
          assert.file(_nodeFiles);
        });
      })

      describe('node - typescript', () => {
        let _tscFiles = [
          // server stuff

          'index.js', // typescript's entry point

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

        _commonFiles.forEach((common) => _tscFiles.push(common));
        _taskFiles.forEach((t) => _tscFiles.push(t));

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withOptions({ 'skip-install': true })
            .withPrompts({appName: "a", githubUsername: "b", server: "node", transpilerServer: 'typescript', stack: 'fullstack', client: 'ng1'})
            .on('end', done);
        });

        it('creates default files - node', () =>  {
          assert.file(_tscFiles);
        });
      })

      describe('Go', () => {
        let _goFiles = [
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

        _commonFiles.forEach((common) => _goFiles.push(common));

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({appName: "a", githubUsername: "b", server: "go", stack: 'fullstack', client: 'ng1'})
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - Go', () =>  {
          assert.file(_goFiles);
        });
      })
    })

    describe('server', () => {
      let _taskFilesServer = [
        'tasks/default.js',
        'tasks/index.js',

        'tasks/server/build.js',
        'tasks/server/del.js',
        'tasks/server/test.js',
        'tasks/server/watch.js'
      ]

      let _serverFiles = [
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
          'tests/server/_helpers/db.json'];

          before((done) => {
            helpers
              .run(path.join(__dirname, '../../app'))
              .inDir(path.join(os.tmpdir(), './temp-test'))
              .withOptions({ 'skip-install': true })
              .withPrompts({appName: "a", githubUsername: "b", server: "node", transpilerServer: 'node', stack: 'server', client: 'ng1'})
              .on('end', done);
        });

      it('should only copy server side files', () => {
          assert.file(_serverFiles);
          assert.file(_taskFilesServer);
          assert.noFile('client/dev/index.html');
          assert.noFile('tasks/client/index.js');
          assert.noFile('tests/client');
      });
    });

    describe('client', () => {
      describe('ng1', () => {
        let _taskFilesClient = [
        'tasks/default.js',
        'tasks/index.js',

        'tasks/client/index.js',
        'tasks/client/build_font.js',
        'tasks/client/build_html.js',
        'tasks/client/build_image.js',
        'tasks/client/build_rev.js',
        'tasks/client/del.js',
        'tasks/client/test.js',
        'tasks/client/const.js',
        'tasks/client/watch.js'
      ]

      let _clientFiles = [
        '.editorconfig',
        '.jshintrc',
        '.bowerrc',
        '.travis.yml',
        '.gitignore',
        '.editorconfig',
        '.jshintrc',

        'bower.json',
        'package.json',
        'gulpfile.babel.js',
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

        'tests/e2e/todo.e2e._test.js'];

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({appName: "a", githubUsername: "b", server: "go", stack: 'client', client: 'ng1'})
            .on('end', done)
            .withOptions({ 'skip-install': true })
        });

        it('should only copy client side files', () => {
            assert.file(_clientFiles);
            assert.noFile('server/server.js');
            assert.noFile('tasks/server/index.js');
            assert.noFile('tests/server');
        });
      });

      describe('ng2', () => {
        let _taskFilesClient = [
        'tasks/default.js',
        'tasks/index.js',

        'tasks/client/index.js',
        'tasks/client/build_font.js',
        'tasks/client/build_html.js',
        'tasks/client/build_image.js',
        'tasks/client/build_rev.js',
        'tasks/client/del.js',
        'tasks/client/test.js',
        'tasks/client/const.js',
        'tasks/client/watch.js'
      ]

      let _clientFiles = [
        '.editorconfig',
        '.jshintrc',
        '.travis.yml',
        '.gitignore',
        '.editorconfig',
        '.jshintrc',

        'bower.json',
        'package.json',
        'gulpfile.babel.js',
        'karma.conf.js',
        'protractor.conf.js',
        'newrelic.js',
        'procfile.txt',

        // client stuff

        'client/dev/index.html',

        'client/dev/index.ts',

        'client/dev/tsconfig.json',
        'client/dev/tsd.json',

        'client/dev/todo/todo.css',
        'client/dev/todo/todo_cmp.ts',
        'client/dev/todo/todo.html',
        'client/dev/todo/todo_service.ts',

        // tests - client

        'tests/client/_helpers/invalid-inputs.js',

        'tests/client/common/controllers/router.controller_test.js',
        'tests/client/todo/dao/todo.dao_test.js',
        'tests/client/todo/models/todo.model_test.js',
        'tests/client/components/todo/todo_test.js',

        // tests - e2e

        'tests/e2e/todo.e2e._test.js'];

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({appName: "a", githubUsername: "b", server: "go", stack: 'client', client: 'ng2'})
            .on('end', done)
            .withOptions({ 'skip-install': true })
        });

        it('should only copy client side files', () => {
            assert.file(_clientFiles);
            assert.noFile('server/server.js');
            assert.noFile('tasks/server/index.js');
            assert.noFile('tests/server');
        });
      });
    });
})
