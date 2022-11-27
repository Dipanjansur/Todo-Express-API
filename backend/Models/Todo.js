const mongoose = require("mongoose");
const todo = mongoose.Schema({
	email: String,
	tittle: { type: String, require: true },
	todo: { type: [String] }
});
module.exports = mongoose.model('todo', todo);



