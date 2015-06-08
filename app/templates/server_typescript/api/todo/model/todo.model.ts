/// <reference path="../../../typings/tsd.d.ts" />

"use strict";

import {mongoose} from 'mongoose';

var _todoSchema =
{
    todoMessage: {type: String, required: true, trim: true},
    createdAt: {type: Date, default: Date.now}
}

export default mongoose.Schema(_todoSchema);
