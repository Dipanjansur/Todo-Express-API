const Todo = require("../Models/Todo");
const GetAllTodos = async (req, res) => {
  const email = req.cookies.email;
  const value = await Todo.find({ email: email });

  if (!value) {
    res.status(404).send("no collection is found");
  }
  res.json(value);
}
const GetTodoByID = async (req, res) => {
  const { TodoId } = req.params;
  console.log(TodoId);
  const value = await Todo.find({ _id: TodoId, email: email });
  if (!value) {
    res.status(404).send("no collection is found");
  }
  res.json(value);

}
module.exports = {
  GetAllTodos,
  GetTodoByID
};