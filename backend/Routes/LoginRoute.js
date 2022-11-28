const express = require("express");
const LoginController = require("../Controller/LoginController");
const LoginRoute = express.Router();
LoginRoute.get("/", (req, res) => {
  res.render('login');
})
LoginRoute.post("/", LoginController);
module.exports = LoginRoute;