const express = require("express");
const mongoose = require("mongoose");
const user = require("../Models/Users");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const RegisterController = async (req, res) => {
  const { firstname, lastname, password, email, age } = req.body;
  if (!(firstname && lastname, email, age)) {
    res.status(400).send("enter the details to continue");
  } else {
    const userexis = user.find({ email });
    if (!userexis) {
      res.status(400).send("user exists cannot be regiseted again");

    } else {
      const hashedpass = await bcryptjs.hash(password, 10);
      const newuser = await user.create({
        firstname,
        lastname,
        email,
        password: hashedpass,
        age,
      });
      if (!newuser) {
        res.status(404).send("user was not able to create");
      }
      const usertok = { id: newuser._id, email };
      const token = jwt.sign(usertok, JWT_SECRET, { expiresIn: '2h' });
      res.status(200).send({
        token,
        "message": "user created sucessfully"
      })


    }
  }
}
module.exports = RegisterController;