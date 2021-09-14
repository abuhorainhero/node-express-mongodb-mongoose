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
      trim: true,
    },
    number: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    rules: {
      type: Boolean,
      required: true,
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
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const user = mongoose.model("User", userSchema);

module.exports = user;
