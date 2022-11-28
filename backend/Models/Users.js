const mongoose = require("mongoose");
const UsersSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  age: Number,
});
module.exports = mongoose.model('user', UsersSchema);
