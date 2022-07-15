const express = require("express");
var app = express();

//
app.listen("3000", function(){
  console.log("Starting server on port 3000");
});

//using a callback function to view request that was made to our server. Sending a response that
//is rendered by our browser
//responding to the home route
app.get("/", function(request, response){
  response.send("<h1>Hello, world!</h1>");
});

//responding to the contact route
app.get("/contact", function(req, res){
  res.send("Contact me at: carolina.bolnykh@gmail.com");
});

//responding to the about route
app.get("/about", function(req, res){
  res.send("Welcome to my page. I'm Carolina, a computer science student at North Carolina State University.");
})

//responding to the hobbies route
app.get("/hobbies", function(req, res){
  res.send("I am passionate about full stack development, DevOps, UX design, tennis, and coffee!");
})
