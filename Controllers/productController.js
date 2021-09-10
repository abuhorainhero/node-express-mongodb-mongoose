const Product = require("../Models/projectModel");

async function createProduct(req, res, next) {
  try {
    console.log(req.body);
    const product = await Product.create(req.body);
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
    const product = await Product.find({}).select({ __v: 0 });
    res.status(200).json({
      data: product,
      message: "Product read successfully",
    });
  } catch (error) {
    next(error);
  }
}

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

module.exports = { createProduct, readProduct, updateProduct, deleteProduct };
