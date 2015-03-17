"use strict";

var express = require('express');
var ThingController = require('../controller/thing.controller');

var _init = function()
{
  var router = express.Router();

  router.get('/', ThingController.getAll);
}

exports.init = _init;
