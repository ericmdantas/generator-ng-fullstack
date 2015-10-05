"use strict";

const mongoose = require('mongoose');

var _todoSchema = {
    todoMessage: {type: String, required: true, trim: true},
    createdAt: {type: Date, default: Date.now}
}

export mongoose.Schema(_todoSchema);
