import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  last_name: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 2,
  },
  tasks: [
    {
      title: String,
      description: String,
      bg_color: String,
      text_color: String,
      text_font: String,
      fixed: Boolean,
      created_at: Date,
      updated_at: Date,
    },
  ],
  trash: [{}],
});

const User = mongoose.model("User", UserSchema);
export default User;
