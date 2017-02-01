"use strict";

const mongoose = require("mongoose");
const Promise = require("bluebird");
const dbConst = require("../constants/db.json");

module.exports = class DBConfig {
    static init() {
      const URL = (process.env.NODE_ENV === "production") ? process.env.MONGOHQ_URL
                                                          : dbConst.localhost;
                                                          
      mongoose.Promise = Promise;
      mongoose.connect(URL);
      mongoose.connection.on("error", console.error.bind(console, "An error ocurred with the DB connection: "));
    }
};
