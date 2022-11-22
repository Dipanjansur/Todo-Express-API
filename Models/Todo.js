const mongoose = require("mongoose");
const todo = mongoose.Schema({
	tittle: { type: String, require: true },
	todo: { type: [String] }
});
module.exports = mongoose.model('todo', todo);



