"use strict";

import * as mongoose from 'mongoose';

const _todoSchema = {
    todoMessage: {type: String, required: true, trim: true},
    createdAt: {type: Date, default: Date.now}
}

module.exports = mongoose.Schema(_todoSchema);
