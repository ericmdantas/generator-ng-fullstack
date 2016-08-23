import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import os from 'os';
import {MockConfigFile} from '../helpers/mocks';

describe('ng-fullstack -> node', () => {
  describe('fullstack', () => {
    let _taskFiles = [
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
      'tasks/server/test.js'
    ];

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

      'client/dev/todo/styles/todo.css',
      
      'client/dev/app.js',
      'client/dev/app.route.js',
      'client/dev/app.config.js',

      'client/dev/todo/services/todo-dao.js',
      'client/dev/todo/resources/todo-resource.js',
      'client/dev/todo/models/todo-model.js',
      'client/dev/todo/controllers/todo-controller.js',

      'client/dev/todo/templates/todo.html',

      // tests - client

      'tests/client/todo/controllers/todo-controller_test.js',
      'tests/client/todo/services/todo-dao_test.js',
      'tests/client/todo/models/todo-model_test.js',

      // tests - e2e

      'tests/e2e/todo.e2e_test.js'
    ];

    describe('express', () => {
      describe('node - express - standard', () => {
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
          'server/api/todo/route/todo-route.js',


          // tests - server

          'tests/server/todo/dao/todo-dao_test.js',
          'tests/server/todo/controller/todo-controller_test.js',
          'tests/server/todo/model/todo-model_test.js',
          'tests/server/todo/route/todo-route_test.js',
          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json'
        ];

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
            nodeWebFrameworkServer: 'express',
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
      });

      describe('node - express - standard - not secure', () => {
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
          'server/api/todo/route/todo-route.js',


          // tests - server

          'tests/server/todo/dao/todo-dao_test.js',
          'tests/server/todo/controller/todo-controller_test.js',
          'tests/server/todo/model/todo-model_test.js',
          'tests/server/todo/route/todo-route_test.js',

          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json'
        ];

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
            nodeWebFrameworkServer: 'express',
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
      });

      describe('node - express - standard - secure', () => {
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
          'server/api/todo/route/todo-route.js',


          // tests - server

          'tests/server/todo/dao/todo-dao_test.js',
          'tests/server/todo/controller/todo-controller_test.js',
          'tests/server/todo/model/todo-model_test.js',
          'tests/server/todo/route/todo-route_test.js',

          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json'
        ];

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
            nodeWebFrameworkServer: 'express',
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
      });

      describe('node - express - standard - secure and with differentStaticServer', () => {
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
          'server/api/todo/route/todo-route.js',

          // tests - server

          'tests/server/todo/dao/todo-dao_test.js',
          'tests/server/todo/controller/todo-controller_test.js',
          'tests/server/todo/model/todo-model_test.js',
          'tests/server/todo/route/todo-route_test.js',

          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json'
        ];

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
            nodeWebFrameworkServer: 'express',
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
      });

      describe('node - express - standard - secure and with differentStaticServer being false, but stack is server', () => {
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
          'server/api/todo/route/todo-route.js',


          // tests - server

          'tests/server/todo/dao/todo-dao_test.js',
          'tests/server/todo/controller/todo-controller_test.js',
          'tests/server/todo/model/todo-model_test.js',
          'tests/server/todo/route/todo-route_test.js',

          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json'
        ];

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
            nodeWebFrameworkServer: 'express',
            stack: "server",
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
      });

      describe('node - express - babel', () => {
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
          'server/api/todo/route/todo-route.js',


          // tests - server

          'tests/server/todo/dao/todo-dao_test.js',
          'tests/server/todo/controller/todo-controller_test.js',
          'tests/server/todo/model/todo-model_test.js',
          'tests/server/todo/route/todo-route_test.js',

          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json'
        ];

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
            nodeWebFrameworkServer: 'express',
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
      });

      describe('node - express - babel - not secure', () => {
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
          'server/api/todo/route/todo-route.js',


          // tests - server

          'tests/server/todo/dao/todo-dao_test.js',
          'tests/server/todo/controller/todo-controller_test.js',
          'tests/server/todo/model/todo-model_test.js',
          'tests/server/todo/route/todo-route_test.js',

          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json'
        ];

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
            nodeWebFrameworkServer: 'express',
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
      });

      describe('node - express - babel - secure', () => {
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
          'server/api/todo/route/todo-route.js',


          // tests - server

          'tests/server/todo/dao/todo-dao_test.js',
          'tests/server/todo/controller/todo-controller_test.js',
          'tests/server/todo/model/todo-model_test.js',
          'tests/server/todo/route/todo-route_test.js',

          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json'
        ];

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
            nodeWebFrameworkServer: 'express',
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
      });

      describe('node - express - babel - secure and with differentStaticServer', () => {
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
          'server/api/todo/route/todo-route.js',


          // tests - server

          'tests/server/todo/dao/todo-dao_test.js',
          'tests/server/todo/controller/todo-controller_test.js',
          'tests/server/todo/model/todo-model_test.js',
          'tests/server/todo/route/todo-route_test.js',

          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json'
        ];

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
            nodeWebFrameworkServer: 'express',
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
      });

      describe('node - express - babel - secure and with differentStaticServer being false, but stack is server', () => {
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
          'server/api/todo/route/todo-route.js',


          // tests - server

          'tests/server/todo/dao/todo-dao_test.js',
          'tests/server/todo/controller/todo-controller_test.js',
          'tests/server/todo/model/todo-model_test.js',
          'tests/server/todo/route/todo-route_test.js',

          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json'
        ];

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
            stack: "server",
            transpilerServer: 'babel',
            nodeWebFrameworkServer: 'express',
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
      });

      describe('node - express - typescript', () => {
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
          'server/api/todo/route/todo-route.ts',


          // tests - server

          'tests/server/todo/dao/todo-dao_test.js',
          'tests/server/todo/controller/todo-controller_test.js',
          'tests/server/todo/model/todo-model_test.js',
          'tests/server/todo/route/todo-route_test.js',

          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json'
        ];

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
            nodeWebFrameworkServer: 'express',
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
      });

      describe('node - express - typescript - not secure', () => {
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
          'server/api/todo/route/todo-route.ts',


          // tests - server

          'tests/server/todo/dao/todo-dao_test.js',
          'tests/server/todo/controller/todo-controller_test.js',
          'tests/server/todo/model/todo-model_test.js',
          'tests/server/todo/route/todo-route_test.js',

          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json'
        ];

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
            nodeWebFrameworkServer: 'express',
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
      });

      describe('node - express - typescript - secure', () => {
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
          'server/api/todo/route/todo-route.ts',


          // tests - server

          'tests/server/todo/dao/todo-dao_test.js',
          'tests/server/todo/controller/todo-controller_test.js',
          'tests/server/todo/model/todo-model_test.js',
          'tests/server/todo/route/todo-route_test.js',

          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json'
        ];

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
            nodeWebFrameworkServer: 'express',
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
      });

      describe('node - express - typescript - secure and with differentStaticServer', () => {
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
          'server/api/todo/route/todo-route.ts',


          // tests - server

          'tests/server/todo/dao/todo-dao_test.js',
          'tests/server/todo/controller/todo-controller_test.js',
          'tests/server/todo/model/todo-model_test.js',
          'tests/server/todo/route/todo-route_test.js',

          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json'
        ];

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
            nodeWebFrameworkServer: 'express',
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
      });

      describe('node - express - typescript - secure and with differentStaticServer being false, but stack is server', () => {
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
          'server/api/todo/route/todo-route.ts',


          // tests - server

          'tests/server/todo/dao/todo-dao_test.js',
          'tests/server/todo/controller/todo-controller_test.js',
          'tests/server/todo/model/todo-model_test.js',
          'tests/server/todo/route/todo-route_test.js',

          'tests/server/_helpers/db.js',
          'tests/server/_helpers/db.json'
        ];

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
            stack: "server",
            transpilerServer: 'typescript',
            nodeWebFrameworkServer: 'express',
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

      describe('koa', () => {
        describe('node - koa - standard', () => {
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
            'server/api/todo/route/todo-route.js',


            // tests - server

            'tests/server/todo/dao/todo-dao_test.js',
            'tests/server/todo/controller/todo-controller_test.js',
            'tests/server/todo/model/todo-model_test.js',
            'tests/server/todo/route/todo-route_test.js',

            'tests/server/_helpers/db.js',
            'tests/server/_helpers/db.json'
          ];

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
              nodeWebFrameworkServer: 'koa',
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
        });

        describe('node - koa - standard - not secure', () => {
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
            'server/api/todo/route/todo-route.js',


            // tests - server

            'tests/server/todo/dao/todo-dao_test.js',
            'tests/server/todo/controller/todo-controller_test.js',
            'tests/server/todo/model/todo-model_test.js',
            'tests/server/todo/route/todo-route_test.js',

            'tests/server/_helpers/db.js',
            'tests/server/_helpers/db.json'
          ];

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
              nodeWebFrameworkServer: 'koa',
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
        });

        describe('node - koa - standard - secure', () => {
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
            'server/api/todo/route/todo-route.js',


            // tests - server

            'tests/server/todo/dao/todo-dao_test.js',
            'tests/server/todo/controller/todo-controller_test.js',
            'tests/server/todo/model/todo-model_test.js',
            'tests/server/todo/route/todo-route_test.js',

            'tests/server/_helpers/db.js',
            'tests/server/_helpers/db.json'
          ];

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
              nodeWebFrameworkServer: 'koa',
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
        });

        describe('node - koa - standard - secure and with differentStaticServer', () => {
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
            'server/api/todo/route/todo-route.js',

            // tests - server

            'tests/server/todo/dao/todo-dao_test.js',
            'tests/server/todo/controller/todo-controller_test.js',
            'tests/server/todo/model/todo-model_test.js',
            'tests/server/todo/route/todo-route_test.js',

            'tests/server/_helpers/db.js',
            'tests/server/_helpers/db.json'
          ];

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
              nodeWebFrameworkServer: 'koa',
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
        });

        describe('node - koa - standard - secure and with differentStaticServer being false, but stack is server', () => {
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
            'server/api/todo/route/todo-route.js',


            // tests - server

            'tests/server/todo/dao/todo-dao_test.js',
            'tests/server/todo/controller/todo-controller_test.js',
            'tests/server/todo/model/todo-model_test.js',
            'tests/server/todo/route/todo-route_test.js',

            'tests/server/_helpers/db.js',
            'tests/server/_helpers/db.json'
          ];

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
              nodeWebFrameworkServer: 'koa',
              stack: "server",
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

        describe('node - koa - babel', () => {
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
            'server/api/todo/route/todo-route.js',


            // tests - server

            'tests/server/todo/dao/todo-dao_test.js',
            'tests/server/todo/controller/todo-controller_test.js',
            'tests/server/todo/model/todo-model_test.js',
            'tests/server/todo/route/todo-route_test.js',

            'tests/server/_helpers/db.js',
            'tests/server/_helpers/db.json'
          ];

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
              nodeWebFrameworkServer: 'express',
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
        });

        describe('node - koa - babel - not secure', () => {
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
            'server/api/todo/route/todo-route.js',


            // tests - server

            'tests/server/todo/dao/todo-dao_test.js',
            'tests/server/todo/controller/todo-controller_test.js',
            'tests/server/todo/model/todo-model_test.js',
            'tests/server/todo/route/todo-route_test.js',

            'tests/server/_helpers/db.js',
            'tests/server/_helpers/db.json'
          ];

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
              nodeWebFrameworkServer: 'koa',
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
        });

        describe('node - koa - babel - secure', () => {
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
            'server/api/todo/route/todo-route.js',


            // tests - server

            'tests/server/todo/dao/todo-dao_test.js',
            'tests/server/todo/controller/todo-controller_test.js',
            'tests/server/todo/model/todo-model_test.js',
            'tests/server/todo/route/todo-route_test.js',

            'tests/server/_helpers/db.js',
            'tests/server/_helpers/db.json'
          ];

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
              nodeWebFrameworkServer: 'koa',
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
        });

        describe('node - koa - babel - secure and with differentStaticServer', () => {
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
            'server/api/todo/route/todo-route.js',


            // tests - server

            'tests/server/todo/dao/todo-dao_test.js',
            'tests/server/todo/controller/todo-controller_test.js',
            'tests/server/todo/model/todo-model_test.js',
            'tests/server/todo/route/todo-route_test.js',

            'tests/server/_helpers/db.js',
            'tests/server/_helpers/db.json'
          ];

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
              nodeWebFrameworkServer: 'koa',
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
        });

        describe('node - koa - babel - secure and with differentStaticServer being false, but stack is server', () => {
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
            'server/api/todo/route/todo-route.js',


            // tests - server

            'tests/server/todo/dao/todo-dao_test.js',
            'tests/server/todo/controller/todo-controller_test.js',
            'tests/server/todo/model/todo-model_test.js',
            'tests/server/todo/route/todo-route_test.js',

            'tests/server/_helpers/db.js',
            'tests/server/_helpers/db.json'
          ];

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
              stack: "server",
              transpilerServer: 'babel',
              nodeWebFrameworkServer: 'koa',
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
        });

        describe('node - koa - typescript', () => {
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
            'server/api/todo/route/todo-route.ts',


            // tests - server

            'tests/server/todo/dao/todo-dao_test.js',
            'tests/server/todo/controller/todo-controller_test.js',
            'tests/server/todo/model/todo-model_test.js',
            'tests/server/todo/route/todo-route_test.js',

            'tests/server/_helpers/db.js',
            'tests/server/_helpers/db.json'
          ];

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
              nodeWebFrameworkServer: 'express',
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
        });

        describe('node - koa - typescript - not secure', () => {
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
            'server/api/todo/route/todo-route.ts',


            // tests - server

            'tests/server/todo/dao/todo-dao_test.js',
            'tests/server/todo/controller/todo-controller_test.js',
            'tests/server/todo/model/todo-model_test.js',
            'tests/server/todo/route/todo-route_test.js',

            'tests/server/_helpers/db.js',
            'tests/server/_helpers/db.json'
          ];

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
              nodeWebFrameworkServer: 'koa',
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
        });

        describe('node - koa - typescript - secure', () => {
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
            'server/api/todo/route/todo-route.ts',


            // tests - server

            'tests/server/todo/dao/todo-dao_test.js',
            'tests/server/todo/controller/todo-controller_test.js',
            'tests/server/todo/model/todo-model_test.js',
            'tests/server/todo/route/todo-route_test.js',

            'tests/server/_helpers/db.js',
            'tests/server/_helpers/db.json'
          ];

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
              nodeWebFrameworkServer: 'koa',
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
        });

        describe('node - koa - typescript - secure and with differentStaticServer', () => {
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
            'server/api/todo/route/todo-route.ts',


            // tests - server

            'tests/server/todo/dao/todo-dao_test.js',
            'tests/server/todo/controller/todo-controller_test.js',
            'tests/server/todo/model/todo-model_test.js',
            'tests/server/todo/route/todo-route_test.js',

            'tests/server/_helpers/db.js',
            'tests/server/_helpers/db.json'
          ];

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
              nodeWebFrameworkServer: 'koa',
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
        });

        describe('node - koa - typescript - secure and with differentStaticServer being false, but stack is server', () => {
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
            'server/api/todo/route/todo-route.ts',


            // tests - server

            'tests/server/todo/dao/todo-dao_test.js',
            'tests/server/todo/controller/todo-controller_test.js',
            'tests/server/todo/model/todo-model_test.js',
            'tests/server/todo/route/todo-route_test.js',

            'tests/server/_helpers/db.js',
            'tests/server/_helpers/db.json'
          ];

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
              stack: "server",
              transpilerServer: 'typescript',
              nodeWebFrameworkServer: 'koa',
              client: 'ng1'
            })
            .on('end', done);
          });

          it('creates default files - node', () =>  {
            assert.file(_tscFiles);
            assert.noFile('.alivrc');
            assert.noFile('server/commons/static/index.ts');
          });
        });
      });
    });
  });

  describe('server', () => {
      let _taskFilesServer = [
        'tasks/index.js',

        'tasks/server/build.js',
        'tasks/server/test.js'
      ]

      let _serverFiles = [
        // server stuff

        'index.js', // babel's entry point

        'server/server.js',

        'server/routes/index.js',

        'server/constants/db.json',

        'server/config/db.conf.js',
        'server/config/routes.conf.js',

        'server/auth/local/index.js',

        'server/api/todo/controller/todo-controller.js',
        'server/api/todo/dao/todo-dao.js',
        'server/api/todo/model/todo-model.js',
        'server/api/todo/route/todo-route.js',


        // tests - server

        'tests/server/todo/dao/todo-dao_test.js',
        'tests/server/todo/controller/todo-controller_test.js',
        'tests/server/todo/model/todo-model_test.js',
        'tests/server/todo/route/todo-route_test.js',

        'tests/server/_helpers/db.js',
        'tests/server/_helpers/db.json'
      ];

      describe('express', () => {
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
            nodeWebFrameworkServer: 'express',
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
          assert.noFile('server/commons/static/index.js');
        });
      });

      describe('express - github', () => {
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
            nodeWebFrameworkServer: 'express',
            repoHost: 'github',
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
          assert.noFile('server/commons/static/index.js');
        });
      });

      describe('express - bitbucket', () => {
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
            nodeWebFrameworkServer: 'express',
            repoHost: 'bitbucket',
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
          assert.noFile('server/commons/static/index.js');
        });
      });

      describe('express - gitlab', () => {
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
            nodeWebFrameworkServer: 'express',
            repoHost: 'bitbucket',
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
          assert.noFile('server/commons/static/index.js');
        });
      });

      describe('koa', () => {
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
            nodeWebFrameworkServer: 'koa',
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
          assert.noFile('server/commons/static/index.js');
        });
    });

    describe('koa - github', () => {
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
            nodeWebFrameworkServer: 'koa',
            repoHost: "github",
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
          assert.noFile('server/commons/static/index.js');
        });
    });

    describe('koa - bitbucket', () => {
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
            nodeWebFrameworkServer: 'koa',
            repoHost: "bitbucket",
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
          assert.noFile('server/commons/static/index.js');
        });
    });

    describe('koa - gitlab', () => {
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
            nodeWebFrameworkServer: 'koa',
            repoHost: "gitlab",
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
          assert.noFile('server/commons/static/index.js');
        });
    });
  });
});
