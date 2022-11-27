const mongoose = require("mongoose");
const UsersSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  age: Number,
});
module.exports = mongoose.model('user', UsersSchema);
