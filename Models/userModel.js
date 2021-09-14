const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    rules: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      trim: true,
      enum: ["Active", "inactive"],
      default: "Active",
    },
    products: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
