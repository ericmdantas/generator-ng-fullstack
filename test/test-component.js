import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';

describe('NgFullstack:component', () => {
  before(function (done) {
    helpers.run(path.join(__dirname, '../component'))
      .withArguments('user')
      .withOptions({ 'skip-install': true})
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
        'client/dev/components/user/user.ts',
        'client/dev/components/user/user.html',
        'tests/client/components/user/user_test.ts'
      ]);
  });
});
