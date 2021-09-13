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

router.post("/", checkLogin, createProduct);
router.get("/", readProduct);
router.get("/:type", getTypes);
router.put("/:id", checkLogin, updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
