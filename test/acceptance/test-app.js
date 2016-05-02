import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import os from 'os';
import {MockConfigFile} from '../helpers/mocks';

describe('ng-fullstack:app', () => {

  describe('fullstack', () => {
    let _taskFiles = [
      'tasks/default.js',
      'tasks/index.js',

      'tasks/client/build_html.js',
      'tasks/client/build_js.js',
      'tasks/client/build_css.js',
      'tasks/client/build_image.js',
      'tasks/client/build.js',
      'tasks/client/del.js',
      'tasks/client/test.js',
      'tasks/client/watch.js',
      'tasks/client/const.js',

      'tasks/server/build.js',
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
      '.babelrc',

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

      'client/dev/todo/styles/events.css',
      'client/dev/todo/styles/fonts.css',
      'client/dev/todo/styles/frameworks_overrides.css',
      'client/dev/todo/styles/media_queries.css',
      'client/dev/todo/styles/position.css',
      'client/dev/todo/styles/styles.css',

      'client/dev/common/images/todo-bkg.png',

      'client/dev/app.js',
      'client/dev/app.route.js',
      'client/dev/app.config.js',

      'client/dev/todo/services/todo-dao.js',
      'client/dev/todo/services/todo-resource.js',
      'client/dev/todo/models/todo-model.js',
      'client/dev/todo/controllers/todo-controller.js',

      'client/dev/todo/templates/todo.html',

      // tests - client

      'tests/client/_helpers/invalid-inputs.js',

      'tests/client/todo/controllers/todo-controller_test.js',
      'tests/client/todo/services/todo-dao_test.js',
      'tests/client/todo/models/todo-model_test.js',

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

          'server/commons/static/index.js',
          'server/commons/static/index.js',
          'server/commons/static/index.js',

          'server/auth/local/index.js',

          'server/api/todo/controller/todo-controller.js',
          'server/api/todo/dao/todo-dao.js',
          'server/api/todo/model/todo-model.js',
          'server/api/todo/routes/todo-routes.js',


          // tests - server

          'tests/server/todo/daos/todo-dao_test.js',
          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json']

        _commonFiles.forEach((common) => _nodeFiles.push(common));
        _taskFiles.forEach((t) => _nodeFiles.push(t));

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({
              appName: "a",
              githubUsername: "b",
              server: "node",
              transpilerServer: 'node',
              stack: 'fullstack',
              client: 'ng1'
            })
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - node', () => {
          assert.file(_nodeFiles);
          assert.noFile('.alivrc');
        });
      })

      describe('node - standard - not secure', () => {
        let _nodeFiles = [
          // server stuff

          'index.js', // babel's entry point

          'server/server.js',

          'server/routes/index.js',

          'server/constants/db.json',

          'server/config/db.conf.js',
          'server/config/routes.conf.js',

          'server/commons/static/index.js',
          'server/commons/static/index.js',
          'server/commons/static/index.js',

          'server/auth/local/index.js',

          'server/api/todo/controller/todo-controller.js',
          'server/api/todo/dao/todo-dao.js',
          'server/api/todo/model/todo-model.js',
          'server/api/todo/routes/todo-routes.js',


          // tests - server

          'tests/server/todo/daos/todo-dao_test.js',
          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json']

        _commonFiles.forEach((common) => _nodeFiles.push(common));
        _taskFiles.forEach((t) => _nodeFiles.push(t));

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({
              appName: "a",
              secure: false,
              githubUsername: "b",
              server: "node",
              transpilerServer: 'node',
              stack: 'fullstack',
              client: 'ng1'
            })
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - node', () => {
          assert.file(_nodeFiles);
          assert.noFile('.alivrc');
          assert.noFile('server/cert/ca.crt');
          assert.noFile('server/cert/ca.csr');
          assert.noFile('server/cert/ca.key');
          assert.noFile('server/cert/server.crt');
          assert.noFile('server/cert/server.csr');
          assert.noFile('server/cert/server.key');
        });
      })

      describe('node - standard - secure', () => {
        let _nodeFiles = [
          // server stuff

          'index.js', // babel's entry point

          'server/server.js',


          'server/cert/ca.crt',
          'server/cert/ca.csr',
          'server/cert/ca.key',
          'server/cert/server.crt',
          'server/cert/server.csr',
          'server/cert/server.key',

          'server/routes/index.js',

          'server/constants/db.json',

          'server/config/db.conf.js',
          'server/config/routes.conf.js',

          'server/commons/static/index.js',

          'server/auth/local/index.js',

          'server/api/todo/controller/todo-controller.js',
          'server/api/todo/dao/todo-dao.js',
          'server/api/todo/model/todo-model.js',
          'server/api/todo/routes/todo-routes.js',


          // tests - server

          'tests/server/todo/daos/todo-dao_test.js',
          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json']

        _commonFiles.forEach((common) => _nodeFiles.push(common));
        _taskFiles.forEach((t) => _nodeFiles.push(t));

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({
              appName: "a",
              githubUsername: "b",
              server: "node",
              transpilerServer: 'node',
              stack: 'fullstack',
              client: 'ng1',
              secure: true
            })
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - node', () => {
          assert.file(_nodeFiles);
          assert.noFile('.alivrc');
        });
      })

      describe('node - standard - secure and with differentStaticServer', () => {
        let _nodeFiles = [
          // server stuff

          'index.js', // babel's entry point

          'server/server.js',


          'server/cert/ca.crt',
          'server/cert/ca.csr',
          'server/cert/ca.key',
          'server/cert/server.crt',
          'server/cert/server.csr',
          'server/cert/server.key',

          'server/routes/index.js',

          'server/constants/db.json',

          'server/config/db.conf.js',
          'server/config/routes.conf.js',

          'server/auth/local/index.js',

          'server/api/todo/controller/todo-controller.js',
          'server/api/todo/dao/todo-dao.js',
          'server/api/todo/model/todo-model.js',
          'server/api/todo/routes/todo-routes.js',


          // tests - server

          'tests/server/todo/daos/todo-dao_test.js',
          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json']

        _commonFiles.forEach((common) => _nodeFiles.push(common));
        _taskFiles.forEach((t) => _nodeFiles.push(t));

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({
              appName: "a",
              differentStaticServer: true,
              githubUsername: "b",
              server: "node",
              transpilerServer: 'node',
              stack: 'fullstack',
              client: 'ng1',
              secure: true
            })
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - node', () => {
          assert.file(_nodeFiles);
          assert.noFile('.alivrc');
          assert.noFile('server/commons/static/index.js');
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

          'server/commons/static/index.js',

          'server/auth/local/index.js',

          'server/api/todo/controller/todo-controller.js',
          'server/api/todo/dao/todo-dao.js',
          'server/api/todo/model/todo-model.js',
          'server/api/todo/routes/todo-routes.js',


          // tests - server

          'tests/server/todo/daos/todo-dao_test.js',
          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json']

        _commonFiles.forEach((common) => _nodeFiles.push(common));
        _taskFiles.forEach((t) => _nodeFiles.push(t));

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({
              appName: "a",
              githubUsername: "b",
              server: "node",
              transpilerServer: 'babel',
              stack: 'fullstack',
              client: 'ng1'
            })
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - node', () => {
          assert.file(_nodeFiles);
          assert.noFile('.alivrc');
        });
      })

      describe('node - babel - not secure', () => {
        let _nodeFiles = [
          // server stuff

          'index.js', // babel's entry point

          'server/server.js',

          'server/routes/index.js',

          'server/constants/db.json',

          'server/config/db.conf.js',
          'server/config/routes.conf.js',

          'server/commons/static/index.js',

          'server/auth/local/index.js',

          'server/api/todo/controller/todo-controller.js',
          'server/api/todo/dao/todo-dao.js',
          'server/api/todo/model/todo-model.js',
          'server/api/todo/routes/todo-routes.js',


          // tests - server

          'tests/server/todo/daos/todo-dao_test.js',
          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json']

        _commonFiles.forEach((common) => _nodeFiles.push(common));
        _taskFiles.forEach((t) => _nodeFiles.push(t));

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({
              appName: "a",
              secure: false,
              githubUsername: "b",
              server: "node",
              transpilerServer: 'babel',
              stack: 'fullstack',
              client: 'ng1'
            })
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - node', () => {
          assert.file(_nodeFiles);
          assert.noFile('.alivrc');
          assert.noFile('server/cert/ca.crt');
          assert.noFile('server/cert/ca.csr');
          assert.noFile('server/cert/ca.key');
          assert.noFile('server/cert/server.crt');
          assert.noFile('server/cert/server.csr');
          assert.noFile('server/cert/server.key');
        });
      })

      describe('node - babel - secure', () => {
        let _nodeFiles = [
          // server stuff

          'index.js', // babel's entry point

          'server/server.js',

          'server/cert/ca.crt',
          'server/cert/ca.csr',
          'server/cert/ca.key',
          'server/cert/server.crt',
          'server/cert/server.csr',
          'server/cert/server.key',

          'server/routes/index.js',

          'server/constants/db.json',

          'server/config/db.conf.js',
          'server/config/routes.conf.js',

          'server/commons/static/index.js',

          'server/auth/local/index.js',

          'server/api/todo/controller/todo-controller.js',
          'server/api/todo/dao/todo-dao.js',
          'server/api/todo/model/todo-model.js',
          'server/api/todo/routes/todo-routes.js',


          // tests - server

          'tests/server/todo/daos/todo-dao_test.js',
          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json']

        _commonFiles.forEach((common) => _nodeFiles.push(common));
        _taskFiles.forEach((t) => _nodeFiles.push(t));

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({
              appName: "a",
              secure: true,
              githubUsername: "b",
              server: "node",
              transpilerServer: 'babel',
              stack: 'fullstack',
              client: 'ng1'
            })
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - node', () => {
          assert.file(_nodeFiles);
          assert.noFile('.alivrc');
        });
      })

      describe('node - babel - secure and with differentStaticServer', () => {
        let _nodeFiles = [
          // server stuff

          'index.js', // babel's entry point

          'server/server.js',

          'server/cert/ca.crt',
          'server/cert/ca.csr',
          'server/cert/ca.key',
          'server/cert/server.crt',
          'server/cert/server.csr',
          'server/cert/server.key',

          'server/routes/index.js',

          'server/constants/db.json',

          'server/config/db.conf.js',
          'server/config/routes.conf.js',

          'server/auth/local/index.js',

          'server/api/todo/controller/todo-controller.js',
          'server/api/todo/dao/todo-dao.js',
          'server/api/todo/model/todo-model.js',
          'server/api/todo/routes/todo-routes.js',


          // tests - server

          'tests/server/todo/daos/todo-dao_test.js',
          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json']

        _commonFiles.forEach((common) => _nodeFiles.push(common));
        _taskFiles.forEach((t) => _nodeFiles.push(t));

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({
              appName: "a",
              secure: true,
              differentStaticServer: true,
              githubUsername: "b",
              server: "node",
              transpilerServer: 'babel',
              stack: 'fullstack',
              client: 'ng1'
            })
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - node', () => {
          assert.file(_nodeFiles);
          assert.noFile('.alivrc');
          assert.noFile('server/commons/static/index.js');
        });
      })

      describe('node - typescript', () => {
        let _tscFiles = [
          // server stuff

          'typings.json', // typings

          'index.js', // typescript's entry point

          'server/server.ts',

          'server/routes/index.ts',

          'server/constants/db.json',

          'server/config/db.conf.ts',
          'server/config/routes.conf.ts',

          'server/commons/static/index.ts',

          'server/auth/local/index.ts',

          'server/api/todo/controller/todo-controller.ts',
          'server/api/todo/dao/todo-dao.ts',
          'server/api/todo/model/todo-model.ts',
          'server/api/todo/routes/todo-routes.ts',


          // tests - server

          'tests/server/todo/daos/todo-dao_test.js',
          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json']

        _commonFiles.forEach((common) => _tscFiles.push(common));
        _taskFiles.forEach((t) => _tscFiles.push(t));

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({
              appName: "a",
              githubUsername: "b",
              server: "node",
              transpilerServer: 'typescript',
              stack: 'fullstack',
              client: 'ng1'
            })
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - node', () =>  {
          assert.file(_tscFiles);
          assert.noFile('.alivrc');
        });
      })

      describe('node - typescript - not secure', () => {
        let _tscFiles = [
          // server stuff

          'typings.json', // typings

          'index.js', // typescript's entry point

          'server/server.ts',

          'server/routes/index.ts',

          'server/constants/db.json',

          'server/config/db.conf.ts',
          'server/config/routes.conf.ts',

          'server/commons/static/index.ts',

          'server/auth/local/index.ts',

          'server/api/todo/controller/todo-controller.ts',
          'server/api/todo/dao/todo-dao.ts',
          'server/api/todo/model/todo-model.ts',
          'server/api/todo/routes/todo-routes.ts',


          // tests - server

          'tests/server/todo/daos/todo-dao_test.js',
          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json']

        _commonFiles.forEach((common) => _tscFiles.push(common));
        _taskFiles.forEach((t) => _tscFiles.push(t));

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({
              appName: "a",
              secure: false,
              githubUsername: "b",
              server: "node",
              transpilerServer: 'typescript',
              stack: 'fullstack',
              client: 'ng1'
            })
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - node', () =>  {
          assert.file(_tscFiles);
          assert.noFile('.alivrc');
          assert.noFile('server/cert/ca.crt');
          assert.noFile('server/cert/ca.csr');
          assert.noFile('server/cert/ca.key');
          assert.noFile('server/cert/server.crt');
          assert.noFile('server/cert/server.csr');
          assert.noFile('server/cert/server.key');
        });
      })

      describe('node - typescript - secure', () => {
        let _tscFiles = [
          // server stuff

          'typings.json', // typings

          'index.js', // typescript's entry point

          'server/cert/ca.crt',
          'server/cert/ca.csr',
          'server/cert/ca.key',
          'server/cert/server.crt',
          'server/cert/server.csr',
          'server/cert/server.key',

          'server/server.ts',

          'server/routes/index.ts',

          'server/constants/db.json',

          'server/config/db.conf.ts',
          'server/config/routes.conf.ts',

          'server/commons/static/index.ts',

          'server/auth/local/index.ts',

          'server/api/todo/controller/todo-controller.ts',
          'server/api/todo/dao/todo-dao.ts',
          'server/api/todo/model/todo-model.ts',
          'server/api/todo/routes/todo-routes.ts',


          // tests - server

          'tests/server/todo/daos/todo-dao_test.js',
          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json']

        _commonFiles.forEach((common) => _tscFiles.push(common));
        _taskFiles.forEach((t) => _tscFiles.push(t));

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({
              appName: "a",
              secure: true,
              githubUsername: "b",
              server: "node",
              transpilerServer: 'typescript',
              stack: 'fullstack',
              client: 'ng1'
            })
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - node', () =>  {
          assert.file(_tscFiles);
          assert.noFile('.alivrc');
        });
      })

      describe('node - typescript - secure and with differentStaticServer', () => {
        let _tscFiles = [
          // server stuff

          'typings.json', // typings

          'index.js', // typescript's entry point

          'server/cert/ca.crt',
          'server/cert/ca.csr',
          'server/cert/ca.key',
          'server/cert/server.crt',
          'server/cert/server.csr',
          'server/cert/server.key',

          'server/server.ts',

          'server/routes/index.ts',

          'server/constants/db.json',

          'server/config/db.conf.ts',
          'server/config/routes.conf.ts',

          'server/auth/local/index.ts',

          'server/api/todo/controller/todo-controller.ts',
          'server/api/todo/dao/todo-dao.ts',
          'server/api/todo/model/todo-model.ts',
          'server/api/todo/routes/todo-routes.ts',


          // tests - server

          'tests/server/todo/daos/todo-dao_test.js',
          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json']

        _commonFiles.forEach((common) => _tscFiles.push(common));
        _taskFiles.forEach((t) => _tscFiles.push(t));

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withOptions({ 'skip-install': true })
            .withPrompts({
              appName: "a",
              differentStaticServer: true,
              secure: true,
              githubUsername: "b",
              server: "node",
              transpilerServer: 'typescript',
              stack: 'fullstack',
              client: 'ng1'
            })
            .on('end', done);
        });

        it('creates default files - node', () =>  {
          assert.file(_tscFiles);
          assert.noFile('.alivrc');
          assert.noFile('server/commons/static/index.ts');
        });
      })

      describe('golang', () => {
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
            .withPrompts({
              appName: "a",
              githubUsername: "b",
              server: "go",
              stack: 'fullstack',
              client: 'ng1'
            })
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - Go', () =>  {
          assert.file(_goFiles);
          assert.noFile('.alivrc');
        });
      })

      describe('golang - not secure', () => {
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
            .withPrompts({
              appName: "a",
              secure: false,
              githubUsername: "b",
              server: "go",
              stack: 'fullstack',
              client: 'ng1'
            })
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - Go', () =>  {
          assert.file(_goFiles);
          assert.noFile('.alivrc');
          assert.noFile('server/cert/ca.crt');
          assert.noFile('server/cert/ca.csr');
          assert.noFile('server/cert/ca.key');
          assert.noFile('server/cert/server.crt');
          assert.noFile('server/cert/server.csr');
          assert.noFile('server/cert/server.key');
        });
      })

      describe('golang - secure', () => {
        let _goFiles = [
          // server stuff

          'server/main.go',

          'server/cert/ca.crt',
          'server/cert/ca.csr',
          'server/cert/ca.key',
          'server/cert/server.crt',
          'server/cert/server.csr',
          'server/cert/server.key',

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
            .withPrompts({
              appName: "a",
              githubUsername: "b",
              server: "go",
              stack: 'fullstack',
              client: 'ng1'
            })
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - Go', () =>  {
          assert.file(_goFiles);
          assert.noFile('.alivrc');
        });
      })

      describe('golang - not secure - and with different static server', () => {
        let _goFiles = [
          // server stuff

          'server/main.go',

          'server/routes/routes.go',

          'server/config/dbconfig.go',

          'server/api/todo/controller/todocontroller.go',
          'server/api/todo/dao/tododao.go',
          'server/api/todo/model/todomodel.go',
          'server/api/todo/routes/todoroutes.go',


          // tests - server

          'server/routes/routes_test.go',

          'server/config/dbconfig_test.go',

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
            .withPrompts({
              appName: "a",
              secure: false,
              differentStaticServer: true,
              githubUsername: "b",
              server: "go",
              stack: 'fullstack',
              client: 'ng1'
            })
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - Go - without the files responsible for the static stuff', () =>  {
          assert.file(_goFiles);

          assert.noFile('.alivrc');
          assert.noFile('server/common/static/static.go');
          assert.noFile('server/common/static/static_test.go');
        });
      })

      describe('golang - secure - and with different static server', () => {
        let _goFiles = [
          // server stuff

          'server/main.go',

          'server/cert/ca.crt',
          'server/cert/ca.csr',
          'server/cert/ca.key',
          'server/cert/server.crt',
          'server/cert/server.csr',
          'server/cert/server.key',

          'server/routes/routes.go',

          'server/config/dbconfig.go',

          'server/api/todo/controller/todocontroller.go',
          'server/api/todo/dao/tododao.go',
          'server/api/todo/model/todomodel.go',
          'server/api/todo/routes/todoroutes.go',


          // tests - server

          'server/routes/routes_test.go',

          'server/config/dbconfig_test.go',

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
            .withPrompts({
              appName: "a",
              secure: true,
              differentStaticServer: true,
              githubUsername: "b",
              server: "go",
              stack: 'fullstack',
              client: 'ng1'
            })
            .withOptions({ 'skip-install': true })
            .on('end', done);
        });

        it('creates default files - Go - without the files responsible for the static stuff', () =>  {
          assert.file(_goFiles);

          assert.noFile('.alivrc');
          assert.noFile('server/common/static/static.go');
          assert.noFile('server/common/static/static_test.go');
        });
      })
    })

    describe('server', () => {
      let _taskFilesServer = [
        'tasks/default.js',
        'tasks/index.js',

        'tasks/server/build.js',
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

          'server/commons/static/index.js',

          'server/auth/local/index.js',

          'server/api/todo/controller/todo-controller.js',
          'server/api/todo/dao/todo-dao.js',
          'server/api/todo/model/todo-model.js',
          'server/api/todo/routes/todo-routes.js',


          // tests - server

          'tests/server/todo/daos/todo-dao_test.js',
          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json'];

          before((done) => {
            helpers
              .run(path.join(__dirname, '../../app'))
              .inDir(path.join(os.tmpdir(), './temp-test'))
              .withOptions({ 'skip-install': true })
              .withPrompts({
                appName: "a",
                githubUsername: "b",
                server: "node",
                transpilerServer: 'node',
                stack: 'server',
                client: 'ng1'
              })
              .on('end', done);
        });

      it('should only copy server side files', () => {
          assert.file(_serverFiles);
          assert.file(_taskFilesServer);
          assert.noFile('client/dev/index.html');
          assert.noFile('tests/client');
          assert.noFile('.alivrc');
      });
    });

    describe('client', () => {
      describe('ng1', () => {
        let _taskFilesClient = [
        'tasks/default.js',
        'tasks/index.js',

        'tasks/client/build_html.js',
        'tasks/client/build_image.js',
        'tasks/client/build_css.js',
        'tasks/client/build_js.js',
        'tasks/client/build.js',
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
        '.alivrc',

        'bower.json',
        'package.json',
        'gulpfile.babel.js',
        'karma.conf.js',
        'protractor.conf.js',
        'newrelic.js',
        'procfile.txt',
        '.babelrc',

        // client stuff

        'client/dev/favicon.png',
        'client/dev/index.html',

        'client/dev/todo/styles/events.css',
        'client/dev/todo/styles/fonts.css',
        'client/dev/todo/styles/frameworks_overrides.css',
        'client/dev/todo/styles/media_queries.css',
        'client/dev/todo/styles/position.css',
        'client/dev/todo/styles/styles.css',

        'client/dev/common/images/todo-bkg.png',

        'client/dev/app.js',
        'client/dev/app.route.js',
        'client/dev/app.config.js',

        'client/dev/todo/services/todo-dao.js',
        'client/dev/todo/services/todo-resource.js',
        'client/dev/todo/models/todo-model.js',
        'client/dev/todo/controllers/todo-controller.js',

        'client/dev/todo/templates/todo.html',

        // tests - client

        'tests/client/_helpers/invalid-inputs.js',

        'tests/client/todo/services/todo-dao_test.js',
        'tests/client/todo/models/todo-model_test.js',
        'tests/client/todo/controllers/todo-controller_test.js',

        // tests - e2e

        'tests/e2e/todo.e2e._test.js'];

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({
              appName: "a",
              githubUsername: "b",
              server: "go",
              stack: 'client',
              client: 'ng1'
            })
            .on('end', done)
            .withOptions({ 'skip-install': true })
        });

        it('should only copy client side files', () => {
            assert.file(_clientFiles);
            assert.file(_taskFilesClient);
            assert.noFile('server/server.js');
            assert.noFile('tasks/server/index.js');
            assert.noFile('tests/server');
        });
      });

      describe('ng2', () => {
        let _taskFilesClient = [
        'tasks/default.js',
        'tasks/index.js',

        'tasks/client/build_html.js',
        'tasks/client/build_image.js',
        'tasks/client/build_ts.js',
        'tasks/client/build_js.js',
        'tasks/client/build.js',
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
        '.alivrc',

        'package.json',
        'karma-test-shim.js',
        'gulpfile.babel.js',
        'karma.conf.js',
        'protractor.conf.js',
        'newrelic.js',
        'procfile.txt',

        'tsconfig.json',
        'typings.json',

        // client stuff

        'client/dev/index.html',

        'client/dev/index.ts',

        'client/dev/todo/styles/todo.css',
        'client/dev/todo/components/todo-cmp.ts',
        'client/dev/todo/templates/todo.html',
        'client/dev/todo/services/todo-service.ts',

        // tests - client

        'tests/client/todo/services/todo-service_test.ts',
        'tests/client/todo/components/todo-cmp_test.ts',

        // tests - e2e

        'tests/e2e/todo.e2e._test.js'];

        before((done) => {
          helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({
              appName: "a",
              githubUsername: "b",
              server: "go",
              stack: 'client',
              client: 'ng2'
            })
            .withOptions({ 'skip-install': true })
            .on('end', done)
        });

        it('should only copy client side files', () => {
            assert.file(_clientFiles);
            assert.file(_taskFilesClient);
            assert.noFile('server/server.js');
            assert.noFile('tasks/server/index.js');
            assert.noFile('tests/server');
            assert.noFile('.bower.json');
        });
      });
    });
})
