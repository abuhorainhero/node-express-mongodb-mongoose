const express = require("express");
const router = express.Router();

const {
  createProduct,
  readProduct,
  updateProduct,
  deleteProduct,
} = require("../Controllers/productController");
const checkLogin = require("../Middlewares/common/checkLogin");

router.post("/", createProduct);
router.get("/", checkLogin, readProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
