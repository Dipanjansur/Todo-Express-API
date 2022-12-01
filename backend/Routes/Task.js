const GetTasks = require("../Controller/GetTasks");
const express = require("express")
const auth = require("../Middleware/auth");
const TaskRoute = express.Router();
const PostTask = require("../Controller/PostTask");
TaskRoute.get("/", auth, GetTasks);
TaskRoute.post("/:TodoId", auth, PostTask);
module.exports = TaskRoute;