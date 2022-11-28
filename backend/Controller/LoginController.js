const express = require("express");
const User = require("../Models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const LoginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    res.status(404).send("fill up all the details to continue");
  }
  const existuser = await User.findOne({ email });
  if (existuser && (await bcrypt.compare(password, existuser.password))) {
    const token = await jwt.sign({ id: existuser._id, email }, JWT_SECRET, { expiresIn: '2h' });
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(200).cookie("token", token, options).cookie("email", email).json({
      success: true,
    });
  } else {
    res.status(400).send("sorry email or password mismatch");

  }
};
module.exports = LoginController;