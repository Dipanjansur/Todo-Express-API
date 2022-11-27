const auth = (req, res, next) => {
  console.log(req.cookies);
  next();
}
module.exports = auth;
