const mongoose = require("mongoose");
const { MONGO_URL } = process.env;
module.exports = mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("connection is sucessfull");
  })
  .catch((err) => {
    console.log(err.message);
  })