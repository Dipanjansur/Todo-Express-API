const GetTasks = async (req, res) => {
  const email = req.cookies.email;
  const value = await Todo.find({ email });
  if (!value) {
    res.status(404).send("no Tasks to be found");
  }

}
module.exports = GetTasks;