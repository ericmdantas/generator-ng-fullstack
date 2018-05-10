import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import os from 'os';
import {createYoRc} from '../_helpers/mocks';

describe('ng-fullstack -> golang', () => {
  describe('echo', () => {
    describe('fullstack', () => {
    let _taskFilesClient = [
      'tasks/index.js',

      'tasks/client/build_html.js',
      'tasks/client/build_image.js',
      'tasks/client/build_ts.js',
      'tasks/client/build_js.js',
      'tasks/client/index.js',
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
      
      'procfile.txt',

      'tsconfig.json',
      'typings.json',

      // client stuff

      'client/dev/index.html',
      'client/dev/app.ts',
      'client/dev/app.module.ts',
      'client/dev/config.js',

      'client/dev/index.ts',

      'client/dev/todo/styles/todo.css',
      'client/dev/todo/components/todo-cmp.ts',
      'client/dev/todo/components/todo-route.ts',
      'client/dev/todo/templates/todo.html',
      'client/dev/todo/services/todo-service.ts',

      // tests - client

      'tests/client/todo/services/todo-service_test.ts',
      'tests/client/todo/components/todo-cmp_test.ts',

      // tests - e2e

      'tests/e2e/todo.e2e_test.js'];


    let _clientFilesWithoutTodo = [
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
      
      'procfile.txt',

      'tsconfig.json',
      'typings.json',

      // client stuff

      'client/dev/index.html',
      'client/dev/app.ts',
      'client/dev/app.module.ts',
      'client/dev/config.js',

      'client/dev/index.ts',

      'tests/e2e/todo.e2e_test.js'];

    let _goFiles = [
    // server stuff

    'server/main.go',

    'server/routes/routes.go',

    'server/config/dbconfig.go',

    'server/common/static/static.go',

    'server/api/todo/controller/todocontroller.go',
    'server/api/todo/dao/tododao.go',
    'server/api/todo/model/todomodel.go',
    'server/api/todo/route/todoroute.go',


    // tests - server

    'server/routes/routes_test.go',

    'server/config/dbconfig_test.go',

    'server/common/static/static_test.go',

    'server/api/todo/controller/todocontroller_test.go',
    'server/api/todo/dao/tododao_test.go',
    'server/api/todo/model/todomodel_test.go',
    'server/api/todo/route/todoroute_test.go',

    // tests - e2e

    'tests/e2e/todo.e2e_test.js'];

    before((done) => {
      helpers
      .run(path.join(__dirname, '../../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withPrompts({
        appName: "a",
        githubUsername: "b",
        goWebFrameworkServer: "echo",
        server: "go",
        boilerplate: true,
        stack: 'fullstack',
        client: 'ng2'
      })
      .withOptions({ 'skip-install': true })
      .on('end', done);
    });

    it('creates default files - Go', () =>  {
      assert.file(_goFiles);
      assert.file(_clientFiles);
      assert.file(_taskFilesClient);
    });
  });

  describe('server', () => {
    let _goFiles = [
    // server stuff

    'server/main.go',

    'server/routes/routes.go',

    'server/config/dbconfig.go',

    'server/common/static/static.go',

    'server/api/todo/controller/todocontroller.go',
    'server/api/todo/dao/tododao.go',
    'server/api/todo/model/todomodel.go',
    'server/api/todo/route/todoroute.go',


    // tests - server

    'server/routes/routes_test.go',

    'server/config/dbconfig_test.go',

    'server/common/static/static_test.go',

    'server/api/todo/controller/todocontroller_test.go',
    'server/api/todo/dao/tododao_test.go',
    'server/api/todo/model/todomodel_test.go',
    'server/api/todo/route/todoroute_test.go',

    // tests - e2e

    'tests/e2e/todo.e2e_test.js'];

    before((done) => {
      helpers
      .run(path.join(__dirname, '../../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withPrompts({
        appName: "a",
        githubUsername: "b",
        goWebFrameworkServer: "echo",
        server: "go",
        boilerplate: true,
        stack: 'fullstack',
        client: 'ng1'
      })
      .withOptions({ 'skip-install': true })
      .on('end', done);
    });

    it('creates default files - Go', () =>  {
      assert.file(_goFiles);
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
      'server/api/todo/route/todoroute.go',


      // tests - server

      'server/routes/routes_test.go',

      'server/config/dbconfig_test.go',

      'server/common/static/static_test.go',

      'server/api/todo/controller/todocontroller_test.go',
      'server/api/todo/dao/tododao_test.go',
      'server/api/todo/model/todomodel_test.go',
      'server/api/todo/route/todoroute_test.go',

      // tests - e2e

      'tests/e2e/todo.e2e_test.js'];

      before((done) => {
        helpers
        .run(path.join(__dirname, '../../app'))
        .inDir(path.join(os.tmpdir(), './temp-test'))
        .withPrompts({
          appName: "a",
          secure: false,
          githubUsername: "b",
          boilerplate: true,
          goWebFrameworkServer: "echo",
          server: "go",
          stack: 'fullstack',
          client: 'ng1'
        })
        .withOptions({ 'skip-install': true })
        .on('end', done);
      });

      it('creates default files - Go', () =>  {
        assert.file(_goFiles);
        assert.noFile('server/cert/ca.crt');
        assert.noFile('server/cert/ca.csr');
        assert.noFile('server/cert/ca.key');
        assert.noFile('server/cert/server.crt');
        assert.noFile('server/cert/server.csr');
        assert.noFile('server/cert/server.key');
      });
    });

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
        'server/api/todo/route/todoroute.go',


        // tests - server

        'server/routes/routes_test.go',

        'server/config/dbconfig_test.go',

        'server/common/static/static_test.go',

        'server/api/todo/controller/todocontroller_test.go',
        'server/api/todo/dao/tododao_test.go',
        'server/api/todo/model/todomodel_test.go',
        'server/api/todo/route/todoroute_test.go',

        // tests - e2e

        'tests/e2e/todo.e2e_test.js'];

        before((done) => {
          helpers
          .run(path.join(__dirname, '../../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withPrompts({
            appName: "a",
            githubUsername: "b",
            goWebFrameworkServer: "echo",
            boilerplate: true,
            server: "go",
            stack: 'fullstack',
            client: 'ng1'
          })
          .withOptions({ 'skip-install': true })
          .on('end', done);
        });

        it('creates default files - Go', () =>  {
          assert.file(_goFiles);
        });
      });

    describe('golang - no boilerplate', () => {
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

        // tests - server

        'server/routes/routes_test.go',

        'server/config/dbconfig_test.go',

        'server/common/static/static_test.go',

        'tests/e2e/todo.e2e_test.js'];

        before((done) => {
          helpers
          .run(path.join(__dirname, '../../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withPrompts({
            appName: "a",
            githubUsername: "b",
            goWebFrameworkServer: "echo",
            boilerplate: false,
            server: "go",
            stack: 'fullstack',
            client: 'ng1'
          })
          .withOptions({ 'skip-install': true })
          .on('end', done);
        });

        it('creates default files - Go', () =>  {
          assert.file(_goFiles);
        });
      });

    describe('golang - not secure - and with different static server', () => {
      let _goFiles = [
        // server stuff

        'server/main.go',

        'server/routes/routes.go',

        'server/config/dbconfig.go',

        'server/api/todo/controller/todocontroller.go',
        'server/api/todo/dao/tododao.go',
        'server/api/todo/model/todomodel.go',
        'server/api/todo/route/todoroute.go',


        // tests - server

        'server/routes/routes_test.go',

        'server/config/dbconfig_test.go',

        'server/api/todo/controller/todocontroller_test.go',
        'server/api/todo/dao/tododao_test.go',
        'server/api/todo/model/todomodel_test.go',
        'server/api/todo/route/todoroute_test.go',

        // tests - e2e

        'tests/e2e/todo.e2e_test.js'];

        before((done) => {
          helpers
          .run(path.join(__dirname, '../../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withPrompts({
            appName: "a",
            secure: false,
            differentStaticServer: true,
            goWebFrameworkServer: "echo",
            githubUsername: "b",
            boilerplate: true,
            server: "go",
            stack: 'fullstack',
            client: 'ng1'
          })
          .withOptions({ 'skip-install': true })
          .on('end', done);
        });

        it('creates default files - Go - without the files responsible for the static stuff', () =>  {
          assert.file(_goFiles);

          assert.noFile('server/common/static/static.go');
          assert.noFile('server/common/static/static_test.go');
        });
      });

    describe('golang - not secure - and with differentStaticServer is false, but stack is set to server', () => {
      let _goFiles = [
        // server stuff

        'server/main.go',

        'server/routes/routes.go',

        'server/config/dbconfig.go',

        'server/api/todo/controller/todocontroller.go',
        'server/api/todo/dao/tododao.go',
        'server/api/todo/model/todomodel.go',
        'server/api/todo/route/todoroute.go',


        // tests - server

        'server/routes/routes_test.go',

        'server/config/dbconfig_test.go',

        'server/api/todo/controller/todocontroller_test.go',
        'server/api/todo/dao/tododao_test.go',
        'server/api/todo/model/todomodel_test.go',
        'server/api/todo/route/todoroute_test.go',

        // tests - e2e

        'tests/e2e/todo.e2e_test.js'];

        before((done) => {
          helpers
          .run(path.join(__dirname, '../../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withPrompts({
            appName: "a",
            secure: false,
            differentStaticServer: true,
            boilerplate: true,
            goWebFrameworkServer: "echo",
            githubUsername: "b",
            server: "go",
            stack: 'server',
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
        'server/api/todo/route/todoroute.go',


        // tests - server

        'server/routes/routes_test.go',

        'server/config/dbconfig_test.go',

        'server/api/todo/controller/todocontroller_test.go',
        'server/api/todo/dao/tododao_test.go',
        'server/api/todo/model/todomodel_test.go',
        'server/api/todo/route/todoroute_test.go',

        // tests - e2e

        'tests/e2e/todo.e2e_test.js'];

        before((done) => {
          helpers
          .run(path.join(__dirname, '../../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withPrompts({
            appName: "a",
            secure: true,
            goWebFrameworkServer: "echo",
            differentStaticServer: true,
            githubUsername: "b",
            boilerplate: true,
            server: "go",
            stack: 'fullstack',
            client: 'ng1'
          })
          .withOptions({ 'skip-install': true })
          .on('end', done);
        });

        it('creates default files - Go - without the files responsible for the static stuff', () =>  {
          assert.file(_goFiles);

          assert.noFile('server/common/static/static.go');
          assert.noFile('server/common/static/static_test.go');
        });
  });

  describe('golang - secure - and with different static server - github.com', () => {
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
        'server/api/todo/route/todoroute.go',


        // tests - server

        'server/routes/routes_test.go',

        'server/config/dbconfig_test.go',

        'server/api/todo/controller/todocontroller_test.go',
        'server/api/todo/dao/tododao_test.go',
        'server/api/todo/model/todomodel_test.go',
        'server/api/todo/route/todoroute_test.go',

        // tests - e2e

        'tests/e2e/todo.e2e_test.js'];

        before((done) => {
          helpers
          .run(path.join(__dirname, '../../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withPrompts({
            appName: "a",
            secure: true,
            differentStaticServer: true,
            goWebFrameworkServer: "echo",
            githubUsername: "b",
            server: "go",
            boilerplate: true,
            stack: 'fullstack',
            repoHost: "github",
            client: 'ng1'
          })
          .withOptions({ 'skip-install': true })
          .on('end', done);
        });

        it('creates default files - Go - without the files responsible for the static stuff', () =>  {
          assert.file(_goFiles);

          assert.noFile('server/common/static/static.go');
          assert.noFile('server/common/static/static_test.go');
        });
  });

  describe('golang - secure - and with different static server - bitbucket.org', () => {
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
        'server/api/todo/route/todoroute.go',


        // tests - server

        'server/routes/routes_test.go',

        'server/config/dbconfig_test.go',

        'server/api/todo/controller/todocontroller_test.go',
        'server/api/todo/dao/tododao_test.go',
        'server/api/todo/model/todomodel_test.go',
        'server/api/todo/route/todoroute_test.go',

        // tests - e2e

        'tests/e2e/todo.e2e_test.js'];

        before((done) => {
          helpers
          .run(path.join(__dirname, '../../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withPrompts({
            appName: "a",
            secure: true,
            differentStaticServer: true,
            goWebFrameworkServer: "echo",
            githubUsername: "b",
            boilerplate: true,
            server: "go",
            stack: 'fullstack',
            repoHost: "bitbucket",
            client: 'ng1'
          })
          .withOptions({ 'skip-install': true })
          .on('end', done);
        });

        it('creates default files - Go - without the files responsible for the static stuff', () =>  {
          assert.file(_goFiles);

          assert.noFile('server/common/static/static.go');
          assert.noFile('server/common/static/static_test.go');
        });
  });

  describe('golang - secure - and with different static server - gitlab', () => {
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
        'server/api/todo/route/todoroute.go',


        // tests - server

        'server/routes/routes_test.go',

        'server/config/dbconfig_test.go',

        'server/api/todo/controller/todocontroller_test.go',
        'server/api/todo/dao/tododao_test.go',
        'server/api/todo/model/todomodel_test.go',
        'server/api/todo/route/todoroute_test.go',

        // tests - e2e

        'tests/e2e/todo.e2e_test.js'];

        before((done) => {
          helpers
          .run(path.join(__dirname, '../../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withPrompts({
            appName: "a",
            secure: true,
            differentStaticServer: true,
            goWebFrameworkServer: "echo",
            boilerplate: true,
            githubUsername: "b",
            server: "go",
            stack: 'fullstack',
            repoHost: "gitlab",
            client: 'ng1'
          })
          .withOptions({ 'skip-install': true })
          .on('end', done);
        });

        it('creates default files - Go - without the files responsible for the static stuff', () =>  {
          assert.file(_goFiles);

          assert.noFile('server/common/static/static.go');
          assert.noFile('server/common/static/static_test.go');
        });
    });
  });
});