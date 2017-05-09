var express = require('express');//#1
var app = express();   //#1app has the all the methods of express able to be access
// console.log("Hello world") //#1for testing var app

app.set('view engine', 'ejs');



//#sepecify routes
// //home route //#2
// app.get('/', function(req, res){  //#get method #paratemers request(get request) reqonse(callback function) are init
//  res.send("<h2>This is a server response on the home page</h2>")
// });

//#6 home routes #after creating views folder and home.ejs
app.get('/', function(req, res){
 res.render('../views/home', {
   title: "Star Wars Movies",
   movies : ["The First Movie", "The second Movie", "The third Movie"] //#getting the arrays form the later json file 
 });
});

//movie_single //#4
app.get('/star_wars_episode/:episode_number?', function(req, res){
 var episode_number = req.params.episode_number;      //#store own var called epidsode_number #to get the epidose number
     res.send("This is the page for episode " + episode_number);
});

//not found //#5
app.get('*', function(req, res){   //# "*" represents any route
 res.send("This is not the page that you are looking for")
});
//


//server calling //#3
app.listen(3000, function(){
  console.log("The application is running on the localhost:3000")
});
