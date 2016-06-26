import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {MockConfigFile} from '../helpers/mocks';

describe('NgFullstack:directive', () => {
  describe('ng1 - testsSeparated is true', () => {
    before(function (done) {
      helpers
        .run(path.join(__dirname, '../../directive'))
        .inTmpDir(function(dir) {
          MockConfigFile.create({
            "generator-ng-fullstack": {
              "client": "ng1",
              "testsSeparated": true
            }
          }, this.async());
        })
        .withArguments('something')
        .withOptions({ 'skip-install': true, feature: 'common'})
        .on('end', done);
    });

    after((done) => {
      MockConfigFile.delete(done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/common/directives/something.js',
        'tests/client/common/directives/something.spec.js'
      ]);
    });
  });

  describe('ng1 - testsSeparated is false', () => {
    before(function (done) {
      helpers
        .run(path.join(__dirname, '../../directive'))
        .inTmpDir(function(dir) {
          MockConfigFile.create({
            "generator-ng-fullstack": {
              "client": "ng1",
              "testsSeparated": false
            }
          }, this.async());
        })
        .withArguments('something')
        .withOptions({ 'skip-install': true, feature: 'common'})
        .on('end', done);
    });

    after((done) => {
      MockConfigFile.delete(done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/common/directives/something.js',
        'client/dev/common/directives/something.spec.js'
      ]);
    });
  });

  describe('ng2 - testsSeparated is true', () => {
    before(function (done) {
      helpers
        .run(path.join(__dirname, '../../directive'))
        .inTmpDir(function(dir) {
          MockConfigFile.create({
            "generator-ng-fullstack": {
              "client": "ng2",
              "testsSeparated": true
            }
          }, this.async());
        })
        .withArguments('something')
        .withOptions({ 'skip-install': true, feature: 'common'})
        .on('end', done);
    });

    after((done) => {
      MockConfigFile.delete(done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/common/directives/something.ts',
        'tests/client/common/directives/something.spec.ts'
      ]);
    });
  });

  describe('ng2 - testsSeparated is false', () => {
    before(function (done) {
      helpers
        .run(path.join(__dirname, '../../directive'))
        .inTmpDir(function(dir) {
          MockConfigFile.create({
            "generator-ng-fullstack": {
              "client": "ng2",
              "testsSeparated": false
            }
          }, this.async());
        })
        .withArguments('something')
        .withOptions({ 'skip-install': true, feature: 'common'})
        .on('end', done);
    });

    after((done) => {
      MockConfigFile.delete(done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/common/directives/something.ts',
        'client/dev/common/directives/something.spec.ts'
      ]);
    });
  });
});
