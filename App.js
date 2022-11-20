require('dotenv').config();
const express = require("express");
const App = express();
const Introrouter = require("./Routes/Intro");
const TaskRoute = require('./Routes/Task');
const TodoRoute = require('./Routes/Todo');
App.use(express.json());
App.use("/", Introrouter);
App.use("/todo", TodoRoute);
App.use("/task", TaskRoute);
module.exports = App;

