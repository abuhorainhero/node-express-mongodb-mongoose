const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: `This is one Product`,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    image: {
      type: String,
    },
    type: {
      type: String,
      trim: true,
      enum: ["boys", "girls", "Everyone"],
      default: "Everyone",
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
