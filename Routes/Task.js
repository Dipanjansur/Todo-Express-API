const GetTasks = require("../Controller/GetTasks");
const PostTask = require("../Controller/PostTask");
const express = require("express");
const TaskRoute = express.Router();
TaskRoute.get("/", GetTasks);
TaskRoute.post("/:TodoId", PostTask);
module.exports = TaskRoute;