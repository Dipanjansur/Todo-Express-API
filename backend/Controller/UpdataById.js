const Todo = require("../Models/Todo");
const UpdateCOntroller = async (req, res) => {
  const TodoId = req.params.TodoId;
  const email = req.cookies.email;
  const Tittle = req.body;
  if (!Tittle) {
    res.status(400).send("enter Id and Tittle and to continue");
  }
  const value = await Todo.findById({ _id: TodoId, email: email });
  if (!value) {
    res.status(400).send("Sorry this Todo list is not avaailble");
  } else {
    const update = await Todo.findByIdAndUpdate(TodoId, req.body);
    res.json(update);
  }

}
module.exports = UpdateCOntroller;