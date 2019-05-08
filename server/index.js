var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
const cors = require('cors')
const { getSearch, getGenres, saveMovie, deleteMovie } = require('./controllers/movieController.js')

//Helpers
var apiHelpers = require('./helpers/apiHelpers.js');

//Middleware
app.use(bodyParser.json());
app.use(cors())

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));

//OPTION 1: Use regular routes

app.get('/genres', getGenres)
  // make an axios request to get the official list of genres from themoviedb
  // use this endpoint. you will need your API key from signup: https://api.themoviedb.org/3/genre/movie/list
  // send back

app.get('/search', getSearch)
  // use this endpoint to search for movies by genres (using API key): https://api.themoviedb.org/3/discover/movie
  // and sort them by votes (worst first) using the search parameters in themoviedb API

app.post('/save', saveMovie)
  //save movie as favorite

app.post('/delete', deleteMovie)
  //remove movie from favorites



//OPTION 2: Use Express Router

//IF you decide to go with this option, delete OPTION 1 to continue

//Routes

// const movieRoutes = require('./routes/movieRoutes.js');

//Use routes
// app.use('/movies', movieRoutes);


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
