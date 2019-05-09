const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

module.exports = {
  getGenres: () => {
    return axios.get( `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    // .then((data) => {
    //   console.log('logging data in api helper =>')
    // })
    // .catch((err) => {
    //   console.log('err in movie contoreller => ')
    // })
  },

  searchMovies: (genre) => {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.asc&api_key=${API_KEY}&vote_average.asc&with_genres=${genre}&release_date.lte=2018`)
  }
}