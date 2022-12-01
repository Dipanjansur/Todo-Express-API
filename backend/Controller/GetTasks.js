const Todo = require("../Models/Todo");
const GetTasks = async (req, res) => {
  const email = req.cookies.email;
  const value = await Todo.find({ email });
  if (!value) {
    res.status(404).send("no Tasks to be found");
  }
  else {
    res.status(200).send(value);
  }

}
module.exports = GetTasks;