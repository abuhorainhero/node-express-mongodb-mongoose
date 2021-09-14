const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Result");
  })
  .catch((err) => {
    console.log(`Error : ${err}`);
  });
