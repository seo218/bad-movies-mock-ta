const movieModel = require('../models/movieModel.js');
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