//server.js file for final project

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));


app.listen(port, function(){
    console.log("== Server is listening on port", port);
})