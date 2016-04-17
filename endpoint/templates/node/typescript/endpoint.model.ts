"use strict";

import * as mongoose from 'mongoose';

var <%= nameLowerCase %>Schema = new mongoose.Schema({
  somethingSomething: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now}
})

export default (<%= nameLowerCase %>Schema);
