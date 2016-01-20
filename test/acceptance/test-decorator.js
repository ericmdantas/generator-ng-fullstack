import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';

describe('NgFullstack:decorator', () => {
  before(function (done) {
    helpers.run(path.join(__dirname, '../../decorator'))
      .withArguments('newHttp')
      .withOptions({ 'skip-install': true, feature: 'dec' })
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
      'client/dev/dec/decorator/newHttp.decorator.js'
    ]);
  });
});
