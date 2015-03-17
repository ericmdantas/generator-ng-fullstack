"use strict";

var fs = require('fs');

var _sendIndex = function(req, res)
{
  res.setHeader('Content-Type', 'text/html');

  fs
    .createReadStream(__dirname + '../../../../client/dev/index.html')// TODO: make the path more readable. Use https://github.com/warmsea/node-rfr?
    .pipe(res);
}

exports.sendIndex = _sendIndex;
