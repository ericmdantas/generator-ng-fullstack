import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';

describe('NgFullstack:service', () => {
  before(function (done) {
    helpers.run(path.join(__dirname, '../service'))
      .withArguments('post')
      .withOptions({ 'skip-install': true, feature: 'http'})
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
      'client/dev/js/http/services/post.service.js',
      'tests/client/http/services/post.service_test.js'
    ]);
  });
});
