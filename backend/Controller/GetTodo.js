const Todo = require("../Models/Todo");
const GetAllTodos = async (req, res) => {
  const value = await Todo.find();
  const email = req.cookies.email;
  console.log(email);
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