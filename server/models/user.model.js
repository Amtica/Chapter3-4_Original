import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    },
    password: {
      type: String,
      required: true
    }

  },
  { versionKey: false }
);

export default mongoose.model("User", UserSchema);
