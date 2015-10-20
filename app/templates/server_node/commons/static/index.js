"use strict";

const fs = require('fs');

module.exports = class StaticDispatcher {
    static sendIndex(req, res) {
      var _root = process.cwd();

      res.setHeader('Content-Type', 'text/html');

      fs.createReadStream(_root + '/client/__tmp/index.html')
        .pipe(res);
    }
}
