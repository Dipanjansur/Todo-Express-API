const GetTasks = require("../Controller/GetTasks");
const PostTask = require("../Controller/PostTask");
const express = require("express");
const auth = require("../Middleware/auth");
const TaskRoute = express.Router();
TaskRoute.get("/", auth, GetTasks);
TaskRoute.post("/:TodoId", auth, PostTask);
module.exports = TaskRoute;