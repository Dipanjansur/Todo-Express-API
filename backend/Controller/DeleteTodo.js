const Todo = require("../Models/Todo")
const DeleteAllTodos = async (req, res) => {

}
const DeleteTodoByID = async (req, res) => {
  const TodoId = req.params.TodoId;
  const { email } = req.cookies;
  const idDeleted = await Todo.findByIdAndRemove({ _id: TodoId, email: email });
  res.json(idDeleted);
}
module.exports = {
  DeleteAllTodos,
  DeleteTodoByID
};