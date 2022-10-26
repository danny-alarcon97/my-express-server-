const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("contact me at: daniel.alarcon1997@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("I am Daniel, a Junior software engineer");
});

app.get("/hobbies", function (req, res) {
  res.send("coding, gym, and videogames");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

// sudo npm install -g nodemon
