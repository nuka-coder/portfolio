//Requirements for Modules
//Express
const express = require("express");
const app = express();

//Correcting 404 image not found
app.use(express.static(__dirname + "/public"));

//Establishing route for when browser requests to root
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});
//Establishing route for when browser requests to styles.css
app.get("/styles.css", function(req, res){
  res.sendFile(__dirname + "/styles.css");
});
//Establishing route for when browser requests to scripts.js
app.get("/scripts.js", function(req, res){
  res.sendFile(__dirname + "/scripts.js");
});
//Establishing route for when browser requests to images
app.get("/images", function(req, res){
  res.sendFile(__dirname + "/images/" );
});
// C:\Users\Sunspear\Desktop\Developer\Personal Projects\Portfolio\images
// C:\Users\Sunspear\Desktop\Developer\Personal Projects\Portfolio\images\2-screen-mockup.jpg

// C:\Users\Sunspear\Desktop\Developer\Personal Projects\Portfolio\index.html
//Establishing actions for sending form information
app.post("/index.html", function(req, res){
  var clientName = req.body.name;
  var clientEmail = req.body.email;
});

app.listen(7000, function(){
  console.log("Server started on 7000");
});
