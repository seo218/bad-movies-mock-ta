//SELECT one db to work with
//For SQL
const sqlDb = require('../../db/sql/index');
//For Mongo
const mongoDb = require('../../db/mongodb/index')

module.exports = {
  SQLSaveToFavs: (movie, cb) => {
    let queryStr = `INSERT INTO FAVS
                    (movieId, overview, popularity, picture, genre)
                    WHERE (?, ?, ?, ?, ?)`
    sqlDb.query(queryStr, movie, (err, res) => {
      cb(err, res)
    })
  },
  SQLDeleteFromFavs: (movieId, cb) => {
    let queryStr = `DELETE FROM favs
                    WHERE movieId = ${movieId}`
    sqlDb.query(queryStr, movie, (err, res) => {
      cb(err, res)
    })
  }

}