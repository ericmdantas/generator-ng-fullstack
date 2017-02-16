import mongoose from "mongoose";
import Promise from "bluebird";
import dbConst from "../constants/db.json";

export default class DBConfig {
    static init() {
      const URL = (process.env.NODE_ENV === "production") ? process.env.MONGOHQ_URL
                                                          : dbConst.localhost;

      mongoose.Promise = Promise;                                                    
      mongoose.connect(URL);
      mongoose.connection.on("error", console.error.bind(console, "An error ocurred with the DB connection: "));
    }
};
