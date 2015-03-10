"use strict";

var morgan = require('morgan');
var bodyParser = require('body-parser');
var contentLength = require('express-content-length-validator');

var _init = function(application, exp, dir)
{
  application.use(exp.static(dir + '/client/dev/'));
  application.use(bodyParser());
  application.use(morgan('dev'));
  application.use(contentLength.validateMax({max: 999}));
}

exports.init = _init;
