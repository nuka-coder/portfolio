//Requirements for Modules
//Express
const express = require("express");
const app = express();
//Establishing route for when browser requests to root
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

//Establishing actions for sending form infomation
app.post("/index.html", function(req, res){
  var usersName = req.body.name;
  var usersEmail = req.body.email;
});

app.listen(3000, function(){
  console.log("Server started on 3000");
});
