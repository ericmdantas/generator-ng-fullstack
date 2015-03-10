"use strict";

var express = require('express');
var ThingController = require('../controller/thing.controller');

var router = express.Router();

router.get('/', ThingController.getAll);

module.exports = router;
