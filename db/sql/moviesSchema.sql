-- SET UP SCHEMA HERE



-- genere : [{id: number, name: string},{},{}]
-- uniqueID: Imdb id
-- title: original_title
-- overview: overview
-- popularity: popularity
-- pic: poster_path (relavive path)


CREATE DATABASE
IF NOT EXISTS badMovies;


USE badMovies;

DROP TABLE IF EXISTS favs;

CREATE TABLE favs
(
  id INT NOT NULL
  AUTO_INCREMENT,
  movieId INT NOT NULL,
  title VARCHAR
  (150) NOT NULL,
  overview VARCHAR
  (1000),
  popularity INT NOT NULL,
  picture VARCHAR
  (500),
  genre INT
  (2) NOT NULL,
  PRIMARY KEY (id)
);

