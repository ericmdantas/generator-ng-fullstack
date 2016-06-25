import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {MockConfigFile} from '../helpers/mocks';

describe('NgFullstack:service - testsSeparated is true', () => {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../../filter'))
      .inTmpDir(function(dir) {
        MockConfigFile.create({
          "generator-ng-fullstack": {
            "client": "ng1",
            "testsSeparated": true
          }
        }, this.async());
      })
      .withArguments('something')
      .withOptions({ 'skip-install': true, feature: 'beautifiers'})
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
      'client/dev/beautifiers/filters/something.js',
      'tests/client/beautifiers/filters/something.spec.js'
    ]);
  });
});

describe('NgFullstack:service - testsSeparated is false', () => {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../../filter'))
      .inTmpDir(function(dir) {
        MockConfigFile.create({
          "generator-ng-fullstack": {
            "client": "ng1",
            "testsSeparated": false
          }
        }, this.async());
      })
      .withArguments('something')
      .withOptions({ 'skip-install': true, feature: 'beautifiers'})
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
      'client/dev/beautifiers/filters/something.js',
      'client/dev/beautifiers/filters/something.spec.js'
    ]);
  });
});
