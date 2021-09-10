const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    product: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      trim: true,
      enum: ["boys", "girls"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
