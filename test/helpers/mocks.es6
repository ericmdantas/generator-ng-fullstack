import fs from 'fs';

export class MockConfigFile {
  static NAME = '.yo-rc.json';

  static create(json, done) {
    fs.writeFile(MockConfigFile.NAME, JSON.stringify(json), done);
  }

  static delete(done) {
    fs.unlink(MockConfigFile.NAME, done);
  }
}
