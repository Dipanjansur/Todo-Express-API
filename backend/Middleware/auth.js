const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env
const auth = (req, res, next) => {
  console.log(req.cookies.token);
  const token = req.cookies.token;
  try {
    if (!token) {
      res.status(402).send("you are not authenticated");
    }
    else {
      const ver = jwt.verify(token, JWT_SECRET);
    }
  } catch (err) {
    console.log(err);
  }
  next();
}
module.exports = auth;
