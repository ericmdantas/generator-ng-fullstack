import mongoose from "mongoose";

const _todoSchema = {
  todoMessage: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now}
}

export default mongoose.Schema(_todoSchema);
