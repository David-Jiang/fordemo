var express = require("express");

var app = express();

var server = app.listen(80, () => {
  console.log(`server is running`);
});

app.use(express.static(__dirname + "/dist"));

app.all("/*", (req, res, next) => {
  res.sendFile(__dirname + "/dist/index.html");
});
