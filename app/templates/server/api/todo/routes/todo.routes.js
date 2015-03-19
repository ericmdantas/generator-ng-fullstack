"use strict";

var express = require('express');
var TodoController = require('../controller/todo.controller');

var _init = function()
{
  var router = express.Router();

  router.get('/', TodoController.getAll);
}

exports.init = _init;
