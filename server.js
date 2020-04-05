const express = require("express");

var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hello Request");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/error", (req, res) => {
  res.send({
    error: "Page Not Found !",
  });
});

app.listen(3000);
