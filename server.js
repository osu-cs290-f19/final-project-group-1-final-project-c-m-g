//server.js file for final project

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;
//const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert');
//const url = 'recipebox-shard-00-00-me7ar.mongodb.net:27017/RecipeBox';
//const dbName = 'recipebox';

app.engine('handlebars',exphbs({defaultLayout:'index'}));
app.set('view engine','handlebars');

app.use(express.static('public'));

app.get("/",function (req,res,next){
  res.status(200).render('postPage', recipes);
})
app.get("*", function(req,res){
  res.status(404).render('404');
})

var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://weinerc:bigcheese4@recipebox-me7ar.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
//  client.connect(err => {
//    var collection = client.db("recipes").collection("recipeBox");
//    // perform actions on the collection object
//    console.log("connected successfully")
//    client.close();
//  });
// MongoClient.connect(uri, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });
 MongoClient.connect(uri, function(err, db) {
   if (err) throw err;
   var dbo = db.db("recipes");
   var myobj = { title: "Spaghetti", time: "10" };
   dbo.collection("recipeBox").insertOne(myobj, function(err, res) {
     if (err) throw err;
     console.log("1 document inserted");
     db.close();
   });
 });

app.listen(port, function(){
   console.log("== Server is listening on port", port);
})