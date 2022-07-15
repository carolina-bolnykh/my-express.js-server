const express = require("express");
var app = express();

app.listen("3000", function(){
  console.log("Starting server on port 3000");
});

app.get("/", function(request, response){
  response.send("<h1>Hello, world!</h1>")
});
