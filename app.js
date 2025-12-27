var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/will', function (req, res) {
  res.send('Hello Will!');
});

app.get ('/ready', function (req, res) {
  res.send('I am ready!');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

module.exports = app;   
