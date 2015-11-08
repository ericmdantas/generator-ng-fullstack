import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';

describe('NgFullstack:resource', () => {
  before(function (done) {
    helpers.run(path.join(__dirname, '../../resource'))
      .withArguments('country')
      .withOptions({ 'skip-install': true, feature: 'user-resource' })
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
      'client/dev/js/user-resource/resource/country.resource.js'
    ]);
  });
});
