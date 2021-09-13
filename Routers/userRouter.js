const express = require("express");
const route = express.Router();
const { signUp, login, getAll } = require("../Controllers/userController");

route.post("/sign-up", signUp).post("/login", login).get("/all", getAll);

module.exports = route;
