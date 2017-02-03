"use strict";

import * as mongoose from "mongoose";
import * as Promise from "bluebird";
import * as dbConst from "../constants/db.json";

export default class DBConfig {
    static init() {
      const URL = (process.env.NODE_ENV === "production") ? process.env.MONGOHQ_URL
                                                          : dbConst.localhost;

      (<any>mongoose).Promise = Promise;                                                    
      mongoose.connect(URL);
      mongoose.connection.on("error", console.error.bind(console, "An error ocurred with the DB connection: "));
    }
};
