// External imports
const express = require("express");
const http = require("http");

// internal imports
// require("./Models/testModel");
require("dotenv").config();
require("./db/db");
const productRouter = require("./Routers/productRoute");
const userRouter = require("./Routers/userRouter");
const {
  notFoundHandler,
  errorHandler,
} = require("./Middlewares/common/errorHandler");

const app = express();
app.use(express.json());
const PORT = 5000;

// http.createServer(app);

app.get("/", (req, res) => {
  res.send("Hello Mongoose");
});
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

// 404 errors Handlers
app.use(notFoundHandler);
// common errors Handlers
app.use(errorHandler);

// application Listener
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || PORT}`);
});
