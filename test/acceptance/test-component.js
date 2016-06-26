import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {MockConfigFile} from '../helpers/mocks';

describe('NgFullstack:component - testsSeparated is true', () => {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../../component'))
      .inTmpDir(function(dir) {
        MockConfigFile.create({
          "generator-ng-fullstack": {
            "client": "ng2",
            "testsSeparated": true
          }
        }, this.async());
      })
      .withArguments('user')
      .withOptions({ 'skip-install': true, feature: 'yo'})
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
        'client/dev/yo/components/user.ts',
        'client/dev/yo/templates/user.html',
        'client/dev/yo/styles/user.css',
        'tests/client/yo/components/user.spec.ts'
      ]);
  });
});

describe('NgFullstack:component - testsSeparated is false', () => {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../../component'))
      .inTmpDir(function(dir) {
        MockConfigFile.create({
          "generator-ng-fullstack": {
            "client": "ng2",
            "testsSeparated": false
          }
        }, this.async());
      })
      .withArguments('user')
      .withOptions({ 'skip-install': true, feature: 'yo'})
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
        'client/dev/yo/components/user.ts',
        'client/dev/yo/templates/user.html',
        'client/dev/yo/styles/user.css',
        'client/dev/yo/components/user.spec.ts'
      ]);
  });
});
