//Requires for Modules
//Express
const express = require("express");
const app = express();

app.get("/", function(request, response){
  response.send("Portfolio Server");
});

app.listen(2000, function(){
  console.log("Server on 2000");
});
