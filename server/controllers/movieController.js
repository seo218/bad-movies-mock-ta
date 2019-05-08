const movieModel = require('../models/movieModel.js');
const {getGenres, searchMovies} = require('../helpers/apiHelpers.js');
const express = require ('express')


//Return requests to the client
module.exports = {
  getSearch: (req, res) => {   
    let genre = req.body.genre
    searchMovies(genre)
    .then( (data) => {
      res.status(200)
      res.send(data.data)
    })
    .catch((err) => {
      res.status(400)
      res.send(err)
    })
  },

  getGenres: (req, res) => {
    getGenres()
    .then((data) =>{
      // console.log('logging data in movie controller', data.data)
      res.status(200)
      res.end(JSON.stringify(data.data))

    })
    .catch((err) => {
      res.status(400)
      console.log('getGenres controller err', err)
      res.end(err)
    })
  },

  saveMovie: (request, response) => {
    let movie = request.body
    movieModel.SQLSaveToFavs(movie, (error, result) => {
      if (error) {
        console.log('failed to save to db')
        response.status(500)
        response.send(error)
      }
      console.log('movie saved to db')
      response.status(200)
      response.send(result)
    })
  },

  deleteMovie: (request, response) => {
    let movieId = req.body
    movieModel.SQLDeleteFromFavs(movieId, (error, result) => {
      if (error) {
        console.log('failed to delete from db')
        response.status(500)
        response.send(error)
      }
      console.log('movie deleted form db')
      response.status(200)
      response.send(result)
    })
  }
}