const express = require("express");
const route = express.Router();
const { signUp, login, getAll } = require("../Controllers/userController");
const checkLogin = require("../Middlewares/common/checkLogin");

route
  .post("/sign-up", signUp)
  .post("/login", login)
  .get("/all", checkLogin, getAll);

module.exports = route;
