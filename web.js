var express = require('express');
var fs = require("fs");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = fs.readFileSync('./index.html');
  var hello = buffer.toString("utf8", 0, buffer.length);
  response.send(hello);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});