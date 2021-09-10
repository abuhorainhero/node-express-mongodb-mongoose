const express = require("express");
const route = express.Router();
const { signUp, login } = require("../Controllers/userController");

route.post("/sign-up", signUp).post("/login", login);

module.exports = route;
