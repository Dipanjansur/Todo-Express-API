const express = require("express");
const TodoRoute = express.Router();

const Todo = require("../Models/Todo");

const { GetAllTodos, GetTodoByID } = require("../Controller/GetTodo");
const NewTodoController = require("../Controller/NewTodo");
const { DeleteAllTodos, DeleteTodoByID } = require("../Controller/DeleteTodo");
const UpdataTodoCon = require("../Controller/UpdataById");
TodoRoute.get("/", GetAllTodos);
TodoRoute.get("/:TodoId", GetTodoByID);
TodoRoute.post("/", NewTodoController);
TodoRoute.put("/:TodoId", UpdataTodoCon);
TodoRoute.delete("/", DeleteAllTodos)
TodoRoute.delete("/:TodoId", DeleteTodoByID)
module.exports = TodoRoute;