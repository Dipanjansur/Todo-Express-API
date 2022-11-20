const express = require("express");
const TodoRoute = express.Router();
TodoRoute.get("/", (req, res) => {
  res.send("get all the Todo here");
})
TodoRoute.get("/:TodoId", (req, res) => {
  res.send(`get the Todo based on Id from database ${req.params.TodoId}`);
})
TodoRoute.post("/", (req, res) => {
  const { tittle } = req.body;
  if (!tittle) {
    res.status(400).send("please fill all the fields to continue");
  }
  res.send(`post the Todo here which is ${tittle}`);
})
TodoRoute.put("/:TodoId", (req, res) => {
  res.send(`Update the Todo tittle based on the Id ${req.params.TodoId}`);
})
TodoRoute.delete("/", (req, res) => {
  res.send("delete all the Todo here");
})

TodoRoute.delete("/:TodoId", (req, res) => {
  res.send(`delete the todo based on the TodoId from ${req.params.TodoId}`);
})
module.exports = TodoRoute;