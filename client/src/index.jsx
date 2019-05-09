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
      movies: [{deway: "movies"}],
      favorites: [{deway: "favorites"}],
      showFaves: false,
      genres: [],
    };
  this.getMovies = this.getMovies.bind(this)
  }

  componentDidMount(){
    this.getMovies(18)
  }

  getMovies(genreId) {
    axios.get('/search', {
      params: {
        genre: genreId
      }
    })
    .then( (movies) => {
      this.setState({
        movies: movies.data.results
      })
    })
    .catch((err) => {
      console.log('err ing getMovies client side =>', err)
    })
  }

  saveMovie() {
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
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
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));