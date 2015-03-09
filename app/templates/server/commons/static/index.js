"use strict";

var fs = require('fs');

var _index = function(req, res)
{
  res.setHeader('Content-Type', 'text/html');

  fs
    .createReadStream('dist/index.html')
    .pipe(res);
}

exports.index = _index;
