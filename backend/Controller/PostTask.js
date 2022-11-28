const Todo = require("../Models/Todo");
const PostTask = async (req, res) => {
  const { TodoId } = req.params;

  const Tasks = req.body;
  if (!Tasks) {
    res.status(400).send("enter Id and Tittle and to continue");
  }
  const value = await Todo.findById(TodoId);
  if (!value) {
    res.status(400).send("Sorry this Todo list is not availble");
  } else {
    const update = await Todo.findByIdAndUpdate(TodoId, req.body);
    res.json(update);
  }

}
module.exports = PostTask;