const Product = require("../Models/projectModel");
const User = require("../Models/userModel");

async function createProduct(req, res, next) {
  try {
    console.log(req.body);
    const product = await Product.create({ ...req.body, user: req.userId });
    await User.findByIdAndUpdate(
      { _id: req.userId },
      {
        $push: {
          products: product._id,
        },
      }
    );
    res.status(200).json({
      data: product,
      message: "Product created successfully",
    });
  } catch (error) {
    next(error);
  }
}

async function readProduct(req, res, next) {
  try {
    const product = await Product.find({}).populate(
      "user",
      "userName number -_id"
    );
    res.status(200).json({
      data: product,
      message: "Product read successfully",
    });
  } catch (error) {
    next(error);
  }
}

// get Types - boys/girls Products
const getTypes = async (req, res, next) => {
  try {
    const product = await Product.find({ type: req.params.type }).select({
      __v: 0,
    });
    res.status(200).json({
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      {
        new: true,
        useFindAndModify: false,
      }
    ).select({ __v: 0 });
    res.status(200).json({ data: product, message: `Update Successfully!` });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.deleteOne({ _id: req.params.id });
    res.status(200).json({ data: product, message: `Update Successfully!` });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  readProduct,
  getTypes,
  updateProduct,
  deleteProduct,
};
