const React = require("react");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cons = require('consolidate');

const app = express();


// view engine setup
app.engine('html', cons.swig)
app.set('view engine', 'html');

app.use("/",function(req,res,next)
{
console.log(req.url);
next();
})


app.use(bodyParser.urlencoded({
  extended: true
}));
//app.use(express.static(__dirname, '\views'));
//app.use("/static", express.static("public"))
app.use(express.static(__dirname + '/public'));
//app.use(express.static('/public'))

app.get("/", function(req, res) {
  res.render("form.html");
});

app.get("/crossword", function(req, res) {
  res.render("crossword.ejs");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
