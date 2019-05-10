DROP DATABASE IF EXISTS badmovies;

CREATE DATABASE badMovies;

USE badMovies;

DROP TABLE IF EXISTS favs;

CREATE TABLE favs
(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR (150) NOT NULL,
  overview VARCHAR(1000),
  vote_average INT NOT NULL,
  poster_path VARCHAR (500),
  genreIds INT  NOT NULL,
  release_date VARCHAR(50),
  PRIMARY KEY (id)
);

