"use strict";

import * as mongoose from "mongoose";
import * as Promise from "bluebird";

const dbConst = require("../constants/db.json");

export class DBConfig {
    static init():void {
      const URL = (process.env.NODE_ENV === "production") ? process.env.MONGOHQ_URL
                                                          : dbConst.localhost;

      (<any>mongoose).Promise = Promise;
      mongoose.connect(URL);
      mongoose.connection.on("error", console.error.bind(console, "An error ocurred with the DB connection: "));
    }
};
