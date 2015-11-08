import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {MockConfigFile} from '../../_test_helpers/mocks';

describe('NgFullstack:factory', () => {
  describe('ng1', () => {
    before((done) => {
      helpers
        .run(path.join(__dirname, '../../factory'))
        .inTmpDir(function(dir) {
          MockConfigFile.create({
            "generator-ng-fullstack": {
              "ngVersion": "ng1"
            }
          }, this.async());
        })
        .withArguments('cars')
        .withOptions({ 'skip-install': true, feature: 'myModel'})
        .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/js/myModel/factory/cars.factory.js',
        'tests/client/myModel/factory/cars.factory_test.js'
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
              "ngVersion": "ng2"
            }
          }, this.async());
        })
        .withArguments('cars')
        .withOptions({ 'skip-install': true, feature: 'myModel'})
        .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/js/myModel/factory/cars.factory.ts',
        'tests/client/myModel/factory/cars.factory_test.ts'
      ]);
    });
  })

});
