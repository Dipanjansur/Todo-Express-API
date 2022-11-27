const RegisterController = require("../Controller/RegisterController");
const express = require("express");
const RegisterRoute = express.Router();
RegisterRoute.get("/", (req, res) => {
  res.render('register');
})
RegisterRoute.post("/", RegisterController)
module.exports = RegisterRoute;