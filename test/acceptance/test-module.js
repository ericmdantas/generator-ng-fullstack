
import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {createYoRc} from '../_helpers/mocks';

describe('NgFullstack:factory', () => {
  describe('ng1', () => {
    before((done) => {
      helpers
        .run(path.join(__dirname, '../../module'))
        .inTmpDir(function(dir) {
          createYoRc({
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
        'client/dev/myModel/controllers/cars.js',
        'client/dev/myModel/models/cars.js',
        'client/dev/myModel/services/cars.js',
        'client/dev/myModel/factory/cars.js',
        'client/dev/myModel/services/cars.js',
        'client/dev/myModel/templates/cars.html',
        'client/dev/myModel/styles/cars.css',

        'tests/client/myModel/controllers/cars_test.js',
        'tests/client/myModel/models/cars_test.js',
        'tests/client/myModel/services/cars_test.js',
        'tests/client/myModel/factory/cars_test.js'
      ]);
    });
  })

  describe('ng2', () => {
    before((done) => {
      helpers
        .run(path.join(__dirname, '../../module'))
        .inTmpDir(function(dir) {
          createYoRc({
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
        'client/dev/myModel/components/cars.ts',
        'client/dev/myModel/models/cars.ts',
        'client/dev/myModel/services/cars.ts',
        'client/dev/myModel/factory/cars.ts',
        'client/dev/myModel/services/cars.ts',
        'client/dev/myModel/templates/cars.html',
        'client/dev/myModel/styles/cars.css',

        'tests/client/myModel/components/cars_test.ts',
        'tests/client/myModel/models/cars_test.ts',
        'tests/client/myModel/services/cars_test.ts',
        'tests/client/myModel/factory/cars_test.ts'
      ]);
    });
  })
});
