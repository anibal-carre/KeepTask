import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    max: 100,
  },
  description: {
    type: String,
    required: true,
  },
  bg_color: {
    type: String,
  },
  text_color: {
    type: String,
  },
  text_font: {
    type: String,
  },
  fixed: {
    type: Boolean,
    required: true,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;
