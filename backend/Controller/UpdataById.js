const Todo = require("../Models/Todo");
const UpdateCOntroller = async (req, res) => {
  const TodoId = req.params.TodoId;
  const Tittle = req.body;
  if (!Tittle) {
    res.status(400).send("enter Id and Tittle and to continue");
  }
  const value = await Todo.findById(TodoId);
  if (!value) {
    res.status(400).send("Sorry this Todo list is not avaailble");
  } else {
    const update = await Todo.findByIdAndUpdate(TodoId, req.body);
    res.json(update);
  }

}
module.exports = UpdateCOntroller;