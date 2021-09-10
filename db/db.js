const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mongoose-test")
  .then((result) => {
    console.log("Result");
  })
  .catch((err) => {
    console.log(`Error : ${err}`);
  });
