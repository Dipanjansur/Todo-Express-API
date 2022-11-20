const express = require("express");
const Introrouter = express.Router();
Introrouter.get("/", (req, res) => {
  res.send("welcome to the get Intro method");
});
Introrouter.post("/", (req, res) => {
  res.send("welcome to the post Intro method");
})
Introrouter.put("/", (req, res) => {
  res.send("welcom to the update Intro method");
});
Introrouter.delete("/", (req, res) => {
  res.send("welcome to the delete Into method");
})
module.exports = Introrouter;