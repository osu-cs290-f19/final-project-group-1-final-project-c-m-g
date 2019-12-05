//server.js file for final project

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var MongoClient = require('mongodb').MongoClient;
//var mongoURL = "mongodb+srv://weinerc:bigcheese4@recipebox-me7ar.mongodb.net/recipes";
var mongoURL = "mongodb+srv://weinerc:bigcheese4@recipebox-me7ar.mongodb.net/test?retryWrites=true&w=majority";
var mongoDB = null;

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/",function (req,res,next){
  var recipeCollection = mongoDB.collection('recipeBox');
  recipeCollection.find({}).toArray(function(err, recipeDocs){
    if(err){
      res.status(500).send("Error connecting to database");
    }
    res.status(200).render('mainPage',{recipe:recipeDocs});
  });
});

app.post("/addRecipe",function(re,res,next){
  var recipeCollection = mongoDB.collection('recipeBox');
  
});

app.post("/editRecipe",function(res,res,next){
  var recipeCollection = mongoDB.collection('recipeBox');
});
app.get("*", function(req,res){
  res.status(404).render('404');
})


MongoClient.connect(mongoURL, function (err, client) {
  if (err) {
    throw err;
  }
  mongoDB = client.db("recipes");
  app.listen(port, function () {
    console.log("== Server listening on port", port);
  });
});