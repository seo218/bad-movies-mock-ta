//SELECT one db to work with
//For SQL
const sqlDb = require('../../db/sql/index');
//For Mongo
const mongoDb = require('../../db/mongodb/index')

module.exports = {
  SQLSaveToFavs: (movie, cb) => {
    // console.log('expect arr =>', movie)
    let queryStr = `INSERT INTO favs \
                    (id, title, overview, vote_average, poster_path, genreIds, release_date) \
                    VALUE (?, ?, ?, ?, ?, ?, ?)`
    // console.log('expect function => ', sqlDb.query)
  sqlDb.query(queryStr, movie, (err, res) => {
      cb(err, res)
    })
  },
  SQLDeleteFromFavs: (movieObj, cb) => {
    let movieId = movieObj.movie.id
    console.log('expect movid obj in model =>', movieObj.movie.id)
    let queryStr = `DELETE FROM favs\
                    WHERE id = ${movieId}`
    sqlDb.query(queryStr, movieId, (err, res) => {
      cb(err, res)
    })
  },
  SQLGetFavorites: (cb) => {
    let queryStr = 'SELECT * FROM favs'
    sqlDb.query(queryStr, (err, res) => {
      cb(err, res)
    })
  }

}