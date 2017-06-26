
const express = require("express");
const mustacheExpress = require("mustache-express");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

const app = express()

const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

let letters = [];

app.get('/', function (req, res) {
  res.render('index', letters)
});

app.listen(3000, function () {
  console.log('Successfully started node application!')
})
