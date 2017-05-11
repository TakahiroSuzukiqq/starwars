//#after creating movies.json and store data, do following
//#creating routes folder after creating public and copy&paste #4-6 in app.js to setup routes
//#and change from app.get to exports

//#after copy images from github, create var moviesJSON so that access to the images
var moviesJSON = require('../movies.json');

//#6
exports.home = function(req, res){
  var Movies = moviesJSON.movies;  //#to get movies array, "movies" is coming from an array name in movies.JSON
  res.render('../views/home', {
   title : "Star Wars Movies",
   movies : Movies}); //#pass Movies movies variable, pass movies' data(array)(stored in moviesJSON) through this. and call movies var in home.ejs
};

//#4
exports.movie_single = function(req, res){
 var episode_number = req.params.episode_number;
     res.send("This is the page for episode " + episode_number);
};

//#5
exports.notFound = function(req, res){
 res.send("This is not the page that you are looking for")
};
