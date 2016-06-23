import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {MockConfigFile} from '../helpers/mocks';

describe('NgFullstack:factory', () => {
  describe('ng1', () => {
    before((done) => {
      helpers
        .run(path.join(__dirname, '../../factory'))
        .inTmpDir(function(dir) {
          MockConfigFile.create({
            "generator-ng-fullstack": {
              "client": "ng1"
            }
          }, this.async());
        })
        .withArguments('cars')
        .withOptions({ 'skip-install': true, feature: 'myModel'})
        .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/myModel/factory/cars.js',
        'tests/client/myModel/factory/cars.spec.js'
      ]);
    });
  })

  describe('ng2', () => {
    before((done) => {
      helpers
        .run(path.join(__dirname, '../../factory'))
        .inTmpDir(function(dir) {
          MockConfigFile.create({
            "generator-ng-fullstack": {
              "client": "ng2"
            }
          }, this.async());
        })
        .withArguments('cars')
        .withOptions({ 'skip-install': true, feature: 'myModel'})
        .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/myModel/factory/cars.ts',
        'tests/client/myModel/factory/cars.spec.ts'
      ]);
    });
  })
});
