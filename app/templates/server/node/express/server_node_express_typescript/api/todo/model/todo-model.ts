import * as mongoose from "mongoose";

let schema = new mongoose.Schema({
    todoMessage: {type: String, required: true, trim: true},
    createdAt: {type: Date, default: Date.now}
});

export default schema;
