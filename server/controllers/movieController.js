const {SQLDeleteFromFavs, SQLGetFavorites, SQLSaveToFavs} = require('../models/movieModel.js');
const {getGenres, searchMovies} = require('../helpers/apiHelpers.js');
const express = require ('express')


//Return requests to the client
module.exports = {
  getSearch: (req, res) => {   
    // console.log('expect genre id num => ', req.query)
    let genre = req.query.genre
    searchMovies(genre)
    .then( (data) => {
      res.status(200)
      res.send(data.data)
    })
    .catch((err) => {
      res.status(400)
      console.log('error in get getSeach controller', err)
      res.send()
    })
  },

  getGenres: (req, res) => {
    getGenres()
    .then((data) =>{
      // console.log('logging data in movie controller', data.data)
      res.status(200)
      res.send(data.data)

    })
    .catch((err) => {
      res.status(400)
      console.log('getGenres controller err', err)
      ress.send()
    })
  },

  saveMovie: (request, response) => {
    let movie = request.body.movie
    // console.log('!!!!!!!!!!!!expect MOVIE =>', request.body.movie)
    movie = [movie.id, movie.title, movie.overview, movie.vote_average, movie.poster_path, movie.genre_ids[0], movie.release_date]
    // console.log('expect query formatted arr =>', movie)
    // let movie = [1,'asdf','asdf',1,'asdf',18]
    SQLSaveToFavs(movie, (error, result) => {
      if (error) {
        console.log('failed to save to db', error)
        response.status(500)
        response.send()
      } else {
        console.log('movie saved to db')
        response.status(200)
        response.send(result)
      }
    })
  },

  deleteMovie: (request, response) => {
    let movieId = req.body
    SQLDeleteFromFavs(movieId, (error, result) => {
      if (error) {
        console.log('failed to delete from db')
        response.status(500)
        response.send()
      } else {
        console.log('movie deleted form db')
        response.status(200)
        response.send(result)
      }
    })
  },

  getFavorites: (request, response) => {
    SQLGetFavorites( (error, result) => {
      if(error) {
        console.log('failed to get favs from db')
        response.status(500)
        response.send()
      } else {
        // console.log('expecte movies obj =>', result)
        console.log('favories retrieved from db')
        response.status(200)
        response.send(result)

      }
    })
  }
}