/// <reference path="../../../typings/tsd.d.ts" />

"use strict";

import * as mongoose from 'mongoose';

const _<%= nameLowerCase %>Schema = {
  somethingSomething: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now}
}

export mongoose.Schema(<%= nameLowerCase %>Schema);
