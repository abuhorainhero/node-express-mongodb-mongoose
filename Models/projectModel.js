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
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// instance Methods
// productSchema.methods = {
//   findTypes: function (type) {
//     return this.find({ type: type });
//   },
// };

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
