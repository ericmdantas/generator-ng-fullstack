"use strict";

import mongoose from 'mongoose';

var _somethingSchema =
{
  somethingSomething: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now}
}

export default mongoose.Schema(_somethingSchema);
