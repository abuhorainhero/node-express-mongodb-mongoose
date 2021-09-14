const express = require("express");
const router = express.Router();

const {
  createProduct,
  readProduct,
  getTypes,
  updateProduct,
  deleteProduct,
} = require("../Controllers/productController");
const checkLogin = require("../Middlewares/common/checkLogin");
const imageUpload = require("../Middlewares/product/imageUpload");

router
  .post("/", checkLogin, imageUpload, createProduct)
  .get("/", readProduct)
  .get("/:type", getTypes)
  .put("/:id", checkLogin, updateProduct)
  .delete("/:id", checkLogin, deleteProduct);

module.exports = router;
