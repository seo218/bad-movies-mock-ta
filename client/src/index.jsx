import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'
import axios from 'axios';
import { get } from 'mongoose';

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [],
      favorites: [{deway: "favorites"}],
      showFaves: false,
      genres: [],
    };
  this.getMovies = this.getMovies.bind(this)
  this.saveMovie = this.saveMovie.bind(this)
  this.updateFavorites = this.updateFavorites.bind(this)
  }

  componentDidMount(){
    this.getMovies(18)
  }

  getMovies(genreId) {
    axios.get('/search', {params: {genre: genreId}})
    .then( (movies) => {
      this.setState({
        movies: movies.data.results
      })
    })
    .catch((err) => {
      console.log('err ing getMovies client side =>', err)
    })
  }

  saveMovie(movie) {
    // console.log('expect movie obj =>', movie )
    axios.post('/save', {movie: movie})
    .then( 
      this.updateFavorites()
    )
    .catch((err) => console.log('err in saving moving on client side', err))

  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  updateFavorites() {
    axios.get('/favs')
    .then((favs) => {
      this.setState({
        favorites: favs
      })
    })
    .catch((err) => {
      console.log('failed to get favorites from server', err)
    })
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        
        <div className="main">
          <Search 
          swapFavorites={this.swapFavorites} 
          showFaves={this.state.showFaves} 
          getMovies={this.getMovies}
          />
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} 
                  showFaves={this.state.showFaves}
                  saveMovie={this.saveMovie}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));