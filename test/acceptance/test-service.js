import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {MockConfigFile} from '../../_test_helpers/mocks';

describe('NgFullstack:service', () => {
  describe('ng1', () => {
    before((done) => {
      helpers.run(path.join(__dirname, '../../service'))
      .inTmpDir(function(dir) {
        MockConfigFile.create({
          "generator-ng-fullstack": {
            "ngVersion": "ng1"
          }
        }, this.async());
      })
      .withArguments('post')
      .withOptions({ 'skip-install': true, feature: 'http'})
      .on('end', done);
    });

    after((done) => {
      MockConfigFile.delete(done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/js/http/services/post.service.js',
        'tests/client/http/services/post.service_test.js'
      ]);
    });
  });

  describe('ng2', () => {
    before((done) => {
      helpers.run(path.join(__dirname, '../../service'))
      .inTmpDir(function(dir) {
        MockConfigFile.create({
          "generator-ng-fullstack": {
            "ngVersion": "ng2"
          }
        }, this.async());
      })
      .withArguments('post')
      .withOptions({ 'skip-install': true, feature: 'http'})
      .on('end', done);
    });

    after((done) => {
      MockConfigFile.delete(done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/js/http/post_service.ts',
        'tests/client/http/post_service_test.ts'
      ]);
    });
  });
});
