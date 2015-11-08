import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';

describe('NgFullstack:service', () => {
  before(function (done) {
    helpers.run(path.join(__dirname, '../../filter'))
      .withArguments('something')
      .withOptions({ 'skip-install': true, feature: 'beautifiers'})
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
      'client/dev/js/beautifiers/filters/something.filter.js',
      'tests/client/beautifiers/filters/something.filter_test.js'
    ]);
  });
});
