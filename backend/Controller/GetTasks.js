const GetTasks = async (req, res) => {
  const value = await Todo.find();
  if (!value) {
    res.status(404).send("no Tasks to be found");
  }

}
module.exports = GetTasks;