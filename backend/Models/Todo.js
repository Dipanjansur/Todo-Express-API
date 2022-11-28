const mongoose = require("mongoose");
const todo = mongoose.Schema({
	email: String,
	tittle: { type: String, require: true },
	todo: { type: [String] }
}, { timestamp: true });
module.exports = mongoose.model('todo', todo);



