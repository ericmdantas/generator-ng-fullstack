"use strict";

import fs from 'fs';

export default class StaticDispatcher
{
    static sendIndex(req, res)
    {
      var _root = process.cwd();

      res.setHeader('Content-Type', 'text/html');

      fs.createReadStream(_root + '/client/__tmp/index.html')
        .pipe(res);
    }
}
