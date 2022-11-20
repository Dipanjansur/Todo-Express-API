const express = require("express");
const TaskRoute = express.Router();
TaskRoute.get("/", (req, res) => {
  res.send("send all the Task and probably their parent Todos");
})
module.exports = TaskRoute;