import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import os from 'os';
import {createYoRc} from '../_helpers/mocks';

describe('ng-fullstack -> client_only', () => {
  describe('ng1', () => {
    describe('testsSeparated is true', () => {
      let _taskFilesClient = [
      'tasks/index.js',

      'tasks/client/build_html.js',
      'tasks/client/build_image.js',
      'tasks/client/build_css.js',
      'tasks/client/build_js.js',
      'tasks/client/index.js',
      'tasks/client/del.js',
      'tasks/client/test.js',
      'tasks/client/const.js',
      'tasks/client/watch.js'
    ];

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
      
      'procfile.txt',
      '.babelrc',

      // client stuff

      'client/dev/favicon.png',
      'client/dev/index.html',

      'client/dev/todo/styles/todo.css',

      'client/dev/app.js',
      'client/dev/app.route.js',
      'client/dev/app.config.js',
      'client/dev/app.constant.js',

      'client/dev/todo/services/todo-dao.js',
      'client/dev/todo/resources/todo-resource.js',
      'client/dev/todo/models/todo-model.js',
      'client/dev/todo/controllers/todo-controller.js',

      'client/dev/todo/templates/todo.html',

      // tests - client

      'tests/client/todo/services/todo-dao_test.js',
      'tests/client/todo/models/todo-model_test.js',
      'tests/client/todo/controllers/todo-controller_test.js',

      // tests - e2e

      'tests/e2e/todo.e2e_test.js'];

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

    describe('testsSeparated is false', () => {
      let _taskFilesClient = [
        'tasks/index.js',

        'tasks/client/build_html.js',
        'tasks/client/build_image.js',
        'tasks/client/build_css.js',
        'tasks/client/build_js.js',
        'tasks/client/index.js',
        'tasks/client/del.js',
        'tasks/client/test.js',
        'tasks/client/const.js',
        'tasks/client/watch.js'
      ];

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
        
        'procfile.txt',
        '.babelrc',

        // client stuff

        'client/dev/favicon.png',
        'client/dev/index.html',

        'client/dev/todo/styles/todo.css',

        'client/dev/app.js',
        'client/dev/app.route.js',
        'client/dev/app.config.js',
        'client/dev/app.constant.js',

        'client/dev/todo/services/todo-dao.js',
        'client/dev/todo/resources/todo-resource.js',
        'client/dev/todo/models/todo-model.js',
        'client/dev/todo/controllers/todo-controller.js',

        'client/dev/todo/templates/todo.html',

        // tests - client

        'client/dev/todo/services/todo-dao_test.js',
        'client/dev/todo/models/todo-model_test.js',
        'client/dev/todo/controllers/todo-controller_test.js',

        // tests - e2e

        'tests/e2e/todo.e2e_test.js'];

        before((done) => {
          helpers
          .run(path.join(__dirname, '../../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withPrompts({
            appName: "a",
            githubUsername: "b",
            server: "go",
            stack: 'client',
            client: 'ng1',
            testsSeparated: false
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

      describe('boilerplate is false', () => {
        let _taskFilesClient = [
          'tasks/index.js',

          'tasks/client/build_html.js',
          'tasks/client/build_image.js',
          'tasks/client/build_css.js',
          'tasks/client/build_js.js',
          'tasks/client/index.js',
          'tasks/client/del.js',
          'tasks/client/test.js',
          'tasks/client/const.js',
          'tasks/client/watch.js'
        ];

        let _clientFilesWithoutTodo = [
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
          
          'procfile.txt',
          '.babelrc',

          'client/dev/favicon.png',
          'client/dev/index.html',

          'client/dev/app.js',
          'client/dev/app.route.js',
          'client/dev/app.config.js',
          'client/dev/app.constant.js',

          'tests/e2e/todo.e2e_test.js'];

          before((done) => {
            helpers
            .run(path.join(__dirname, '../../app'))
            .inDir(path.join(os.tmpdir(), './temp-test'))
            .withPrompts({
              appName: "a",
              githubUsername: "b",
              server: "go",
              stack: 'client',
              client: 'ng1',
              boilerplate: false
            })
            .on('end', done)
            .withOptions({ 'skip-install': true })
          });

          it('should only copy client side files', () => {
            assert.file(_clientFilesWithoutTodo);
            assert.file(_taskFilesClient);
            assert.noFile('client/dev/todo/controllers/todo-controller.js');
            assert.noFile('client/dev/todo/templates/todo.html');
            assert.noFile('server/server.js');
            assert.noFile('tasks/server/index.js');
            assert.noFile('tests/server');
          });
        });
    });

  describe('ng2', () => {
    describe('testsSeparated is false', () => {
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
      ];

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

        'client/dev/todo/services/todo-service_test.ts',
        'client/dev/todo/components/todo-cmp_test.ts',

        // tests - e2e

        'tests/e2e/todo.e2e_test.js'];

        before((done) => {
          helpers
          .run(path.join(__dirname, '../../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withPrompts({
            appName: "a",
            githubUsername: "b",
            server: "go",
            stack: 'client',
            client: 'ng2',
            boilerplate: true,
            testsSeparated: false
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
    })

    describe('testsSeparated is true', () => {
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

        before((done) => {
          helpers
          .run(path.join(__dirname, '../../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withPrompts({
            appName: "a",
            githubUsername: "b",
            boilerplate: true,
            server: "go",
            stack: 'client',
            client: 'ng2',
            testsSeparated: true
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

    describe('boilerplate is false', () => {
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

        before((done) => {
          helpers
          .run(path.join(__dirname, '../../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withPrompts({
            appName: "a",
            githubUsername: "b",
            boilerplate: false,
            server: "go",
            stack: 'client',
            client: 'ng2',
            testsSeparated: true
          })
          .withOptions({ 'skip-install': true })
          .on('end', done)
        });

        it('should only copy client side files', () => {
          assert.file(_clientFilesWithoutTodo);
          assert.file(_taskFilesClient);
          assert.noFile('client/dev/todo/components/todo-cmp.ts')
          assert.noFile('client/dev/todo/components/todo-route.ts')
          assert.noFile('client/dev/todo/templates/todo.html')
          assert.noFile('server/server.js');
          assert.noFile('tasks/server/index.js');
          assert.noFile('tests/server');
          assert.noFile('.bower.json');
        });
    });

  });

  describe('vue2', () => {
    describe('testsSeparated is false', () => {
      let _taskFilesClient = [
        'tasks/index.js',

        'tasks/client/build_html.js',
        'tasks/client/build_image.js',
        'tasks/client/build_js.js',
        'tasks/client/index.js',
        'tasks/client/del.js',
        'tasks/client/test.js',
        'tasks/client/const.js',
        'tasks/client/watch.js'
      ];

      let _clientFiles = [
        '.editorconfig',
        '.jshintrc',
        '.travis.yml',
        '.gitignore',
        '.editorconfig',
        '.jshintrc',
        '.alivrc',

        'package.json',
        'gulpfile.babel.js',
        'karma.conf.js',
        'protractor.conf.js',
        
        'procfile.txt',

        // client stuff

        'client/dev/index.html',

        'client/dev/index.js',

        'client/dev/todo/styles/todo.css',
        'client/dev/todo/components/todo-cmp.js',
        'client/dev/todo/services/todo-service.js',

        // tests - client

        'client/dev/todo/models/todo-model_test.js',
        'client/dev/todo/services/todo-service_test.js',
        'client/dev/todo/components/todo-cmp_test.js',

        // tests - e2e

        'tests/e2e/todo.e2e_test.js'];

        before((done) => {
          helpers
          .run(path.join(__dirname, '../../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withPrompts({
            appName: "a",
            githubUsername: "b",
            server: "go",
            stack: 'client',
            boilerplate: true,
            client: 'vue2',
            testsSeparated: false
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
    })

    describe('testsSeparated is true', () => {
      let _taskFilesClient = [
        'tasks/index.js',

        'tasks/client/build_html.js',
        'tasks/client/build_image.js',
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
        'gulpfile.babel.js',
        'karma.conf.js',
        'protractor.conf.js',
        
        'procfile.txt',

        // client stuff

        'client/dev/index.html',

        'client/dev/index.js',

        'client/dev/todo/styles/todo.css',
        'client/dev/todo/components/todo-cmp.js',
        'client/dev/todo/services/todo-service.js',

        // tests - client

        'tests/client/todo/services/todo-service_test.js',
        'tests/client/todo/models/todo-model_test.js',
        'tests/client/todo/components/todo-cmp_test.js',

        // tests - e2e

        'tests/e2e/todo.e2e_test.js'];

        before((done) => {
          helpers
          .run(path.join(__dirname, '../../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withPrompts({
            appName: "a",
            githubUsername: "b",
            server: "go",
            stack: 'client',
            client: 'vue2',
            boilerplate: true,
            testsSeparated: true
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

    describe('boilerplate is false', () => {
      let _taskFilesClient = [
        'tasks/index.js',

        'tasks/client/build_html.js',
        'tasks/client/build_image.js',
        'tasks/client/build_js.js',
        'tasks/client/index.js',
        'tasks/client/del.js',
        'tasks/client/test.js',
        'tasks/client/const.js',
        'tasks/client/watch.js'
      ]

      let _clientFilesWithoutTodo = [
        '.editorconfig',
        '.jshintrc',
        '.travis.yml',
        '.gitignore',
        '.editorconfig',
        '.jshintrc',
        '.alivrc',

        'package.json',
        'gulpfile.babel.js',
        'karma.conf.js',
        'protractor.conf.js',
        
        'procfile.txt',

        // client stuff

        'client/dev/index.html',

        'client/dev/index.js',

        'tests/e2e/todo.e2e_test.js'];

        before((done) => {
          helpers
          .run(path.join(__dirname, '../../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withPrompts({
            appName: "a",
            githubUsername: "b",
            server: "go",
            stack: 'client',
            client: 'vue2',
            boilerplate: false,
            testsSeparated: true
          })
          .withOptions({ 'skip-install': true })
          .on('end', done)
        });

        it('should only copy client side files', () => {
          assert.file(_clientFilesWithoutTodo);
          assert.file(_taskFilesClient);
          assert.noFile('client/dev/components/todo-cmp.js');
          assert.noFile('server/server.js');
          assert.noFile('tasks/server/index.js');
          assert.noFile('tests/server');
          assert.noFile('.bower.json');
        });
    });
  });
});
