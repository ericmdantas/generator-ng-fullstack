import mongoose from 'mongoose';

const _<%= nameLowerCase %>Schema = {
  somethingSomething: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now}
}

export default mongoose.Schema(_<%= nameLowerCase %>Schema);
