//server.js file for final project

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var MongoClient = require('mongodb').MongoClient;
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

app.post("/addRecipe",function(req,res,next){
  if(req.body && req.body.title && req.body.url && req.body.peopleServed && req.body.cookTime && req.body.author && req.body.difficulty && req.body.spice && req.body.meal && req.body.ingredients && req.body.directions){
    var recipeCollection = mongoDB.collection('recipeBox');
    recipeCollection.insertOne({
      title: req.body.title,
      url: req.body.url,
      peopleServed: req.body.peopleServed,
      cookTime: req.body.cookTime,
      author: req.body.author,
      difficulty: req.body.difficulty,
      spice: req.body.spice,
      meal: req.body.meal,
      ingredients: req.body.ingredients,
      directions: req.body.directions
    },function(err){
      if(err){
        res.status(500).send("Error saving recipe to database");
      }
      else{
        res.status(200).send("Successfully added recipe");
        //next();
      }
    })
  }
  else{
    res.status(400).send("Add Recipe request needs all the information");
  }
});

app.post("/:recipeName/editRecipe",function(req,res,next){
  if(req.body && req.body.title && req.body.url && req.body.peopleServed && req.body.cookTime && req.body.author && req.body.difficulty && req.body.spice && req.body.meal && req.body.ingredients && req.body.directions){
  var recipeName = req.params.recipeName;
  var recipeCollection = mongoDB.collection('recipeBox');
  recipeCollection.updateOne({title: recipeName},
    {
      $set: {
      title: req.body.title,
      url: req.body.url,
      peopleServed: req.body.peopleServed,
      cookTime: req.body.cookTime,
      author: req.body.author,
      difficulty: req.body.difficulty,
      spice: req.body.spice,
      meal: req.body.meal,
      ingredients: req.body.ingredients,
      directions: req.body.directions
      }
    }, function(err){
      if(err){
        res.status(500).send("Error editing recipe in database");
      }
      else{
        res.status(200).send("Successfully edited recipe");
      }
    })
  }else{
    res.status(400).send("Edit Recipe request needs all the information");
  }
});
app.post("/:recipeName/deleteRecipe",function(req,res,next){
  var recipeName = req.params.recipeName;
  var recipeCollection = mongoDB.collection('recipeBox');
  recipeCollection.deleteOne({title:recipeName},function(err){
    if(err){
      res.status(500).send("Error deleting recipe from database");
    }
    else{
      res.status(200).send("Successfully deleted recipe");
    }
  })
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