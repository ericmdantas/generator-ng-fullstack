import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {MockConfigFile} from '../helpers/mocks';

describe('NgFullstack:model', () => {
  describe('ng1', () => {
    before((done) => {
      helpers
        .run(path.join(__dirname, '../../model'))
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
        'client/dev/myModel/models/cars.js',
        'tests/client/myModel/models/cars.spec.js'
      ]);
    });
  })

  describe('ng2', () => {
    before((done) => {
      helpers
        .run(path.join(__dirname, '../../model'))
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
        'client/dev/myModel/models/cars.ts',
        'tests/client/myModel/models/cars.spec.ts'
      ]);
    });
  })

});
