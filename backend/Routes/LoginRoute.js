const LoginController = require("../Controller/LoginController");
const express = require("express");
const LoginRoute = express.Router();
LoginRoute.get("/", (req, res) => {
  res.render('login');
})
LoginRoute.post("/", LoginController);
module.exports = LoginRoute;