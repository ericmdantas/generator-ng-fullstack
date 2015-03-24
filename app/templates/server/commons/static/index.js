"use strict";

import fs from 'fs';

export default class StaticDispatcher
{
    static sendIndex(req, res)
    {
      res.setHeader('Content-Type', 'text/html');

      fs.createReadStream(__dirname + '../../../../client/dev/index.html')// TODO: make the path more readable. Use https://github.com/warmsea/node-rfr?
        .pipe(res);
    }
}
