const Todo = require("../Models/Todo")
const DeleteAllTodos = async (req, res) => {

}
const DeleteTodoByID = async (req, res) => {
  const TodoId = req.params.TodoId;
  const idDeleted = await Todo.findByIdAndRemove(TodoId);
  res.json(idDeleted);
}
module.exports = {
  DeleteAllTodos,
  DeleteTodoByID
};