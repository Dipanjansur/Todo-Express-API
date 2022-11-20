require('dotenv').config()
const { PORT } = process.env;
const App = require("./App");
App.listen(PORT, () => {
  console.log("welcome to the server http://localhost:8000");
});


