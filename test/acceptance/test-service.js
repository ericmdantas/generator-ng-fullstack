import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {createYoRc} from '../_helpers/mocks';

describe('NgFullstack:service', () => {
  describe('ng1', () => {
    before((done) => {
      helpers.run(path.join(__dirname, '../../service'))
      .inTmpDir(function(dir) {
        createYoRc({
          "generator-ng-fullstack": {
            "client": "ng1"
          }
        }, this.async());
      })
      .withArguments('post')
      .withOptions({ 'skip-install': true, feature: 'http'})
      .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/http/services/post.js',
        'tests/client/http/services/post_test.js'
      ]);
    });
  });

  describe('ng2', () => {
    before((done) => {
      helpers.run(path.join(__dirname, '../../service'))
      .inTmpDir(function(dir) {
        createYoRc({
          "generator-ng-fullstack": {
            "client": "ng2"
          }
        }, this.async());
      })
      .withArguments('post')
      .withOptions({ 'skip-install': true, feature: 'http'})
      .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/http/services/post.ts',
        'tests/client/http/services/post_test.ts'
      ]);
    });
  });
});
