var express = require('express')

var app = express()

app.get('/app-info', function(req, res) {
  res.json({
      apptitle: "Get Started with Android Annotations",
      greeting: "Welcome, ",
      message: "Go catch them all!!!",
      imageUrl: "http://www.pokemongo.com/static/assets/images/pokemon_go_logo.png"
  });
});

app.listen(3000)
