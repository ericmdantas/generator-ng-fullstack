import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import os from 'os';
import {MockConfigFile} from '../helpers/mocks';

describe('ng-fullstack -> client_only', () => {
  describe('ng1', () => {
    let _taskFilesClient = [
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

      'tests/client/todo/services/todo-dao.spec.js',
      'tests/client/todo/models/todo-model.spec.js',
      'tests/client/todo/controllers/todo-controller.spec.js',

      // tests - e2e

      'tests/e2e/todo.e2e..spec.js'];

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
        'client/dev/config.js',

        'client/dev/index.ts',

        'client/dev/todo/styles/todo.css',
        'client/dev/todo/components/todo-cmp.ts',
        'client/dev/todo/templates/todo.html',
        'client/dev/todo/services/todo-service.ts',

        // tests - client

        'tests/client/todo/services/todo-service.spec.ts',
        'tests/client/todo/components/todo-cmp.spec.ts',

        // tests - e2e

        'tests/e2e/todo.e2e..spec.js'];

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
