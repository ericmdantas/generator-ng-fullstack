import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';

describe('NgFullstack:component', () => {
  before(function (done) {
    helpers.run(path.join(__dirname, '../../component'))
      .withArguments('user')
      .withOptions({ 'skip-install': true, feature: 'yo'})
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
        'client/dev/yo/components/user.ts',
        'client/dev/yo/components/user.html',
        'client/dev/yo/components/user.css',
        'tests/client/yo/components/user_test.ts'
      ]);
  });
});
