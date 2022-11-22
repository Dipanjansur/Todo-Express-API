const Todo = require("../Models/Todo");
const NewTodoController = async (req, res) => {
  const { tittle } = req.body;
  if (!tittle) {
    res.status(400).send("please fill all the fields to continue");
  }
  const data = new Todo({
    tittle,
    todo: []
  });
  const hello = await data.save();
  res.send(hello);
}
module.exports = NewTodoController;