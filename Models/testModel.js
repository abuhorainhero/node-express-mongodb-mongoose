const mongoose = require("mongoose");
const { Schema } = mongoose;

const numberSchema = new Schema({
  integerOnly: {
    type: Number,
    get: (v) => Math.ceil(v),
    set: (v) => Math.ceil(v),
    alias: "i",
  },
});

const MyNumber = mongoose.model("Number", numberSchema);

const doc = new MyNumber();
doc.integerOnly = 2.901;
console.log(doc.integerOnly); // 2
console.log(doc.i); // 2
doc.i = 3.001;
console.log(doc.integerOnly); // 3
console.log(doc.i); // 3
