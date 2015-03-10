"use strict";

var fs = require('fs');

var _sendIndex = function(req, res)
{
  res.setHeader('Content-Type', 'text/html');

  fs
    .createReadStream('/client/dev/index.html')
    .pipe(res);
}

exports.sendIndex = _sendIndex;
