const express = require("express");
const TodoRoute = express.Router();
const auth = require("../Middleware/auth");
const Todo = require("../Models/Todo");

const { GetAllTodos, GetTodoByID } = require("../Controller/GetTodo");
const NewTodoController = require("../Controller/NewTodo");
const { DeleteAllTodos, DeleteTodoByID } = require("../Controller/DeleteTodo");
const UpdataTodoCon = require("../Controller/UpdataById");
TodoRoute.get("/", auth, GetAllTodos);
TodoRoute.get("/:TodoId", auth, GetTodoByID);
TodoRoute.post("/", auth, NewTodoController);
TodoRoute.put("/:TodoId", auth, UpdataTodoCon);
TodoRoute.delete("/", auth, DeleteAllTodos)
TodoRoute.delete("/:TodoId", auth, DeleteTodoByID)
module.exports = TodoRoute;