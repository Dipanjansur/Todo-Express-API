const express = require("express");
const Users = require("../Models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const LoginController = (req, res) => {
  const { email, password } = req.body;
  const existuser = Users.find({ email })
  if (!existuser && bcrypt.compare(password, existuser.password)) {
    res.status(400).send("sorry email or password mismatch");
  } else {
    const token = jwt.sign({ id: existuser._id, password }, JWT_SECRET, { expiresIn: '2h' });
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    res.status(200).cookie("token", token, options).json({
      success: true,
    });
  }
};
module.exports = LoginController;