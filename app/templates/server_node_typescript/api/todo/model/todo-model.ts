/// <reference path="../../../typings/main.d.ts" />

import * as mongoose from 'mongoose';

const _todoSchema = {
    todoMessage: {type: String, required: true, trim: true},
    createdAt: {type: Date, default: Date.now}
}

export default mongoose.Schema(_todoSchema);
