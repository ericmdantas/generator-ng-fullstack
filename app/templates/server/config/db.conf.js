"use strict";

var mongoose = require('mongoose');
var dbConst = require('../constants/db.json');

var _init = function()
{
  const URL = (process.env.NODE_ENV === 'production') ? process.env.MONGOHQ_URL
                                                      : dbConst.localhost;

  mongoose.connect(URL);
  mongoose.connection.on('error', console.error.bind(console, 'An error ocurred with the DB connection: '));
};

exports.init = _init;
