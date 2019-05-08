import React from 'react';
import axios from 'axios'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      currentGenre: ''
    };
    this.getGenres = this.getGenres.bind(this)
    this.changeGenre = this.changeGenre.bind(this)
  }

  componentDidMount() {
    this.getGenres()
  }

  getGenres() {
    axios.get('/genres')
    .then( (genres) => {
      // console.log('printing genres in search =>', genres.data.genres)
      this.setState({
        genres: genres.data.genres
      })
      // console.log('logging state =>', this.state.genres)
    })
    .catch( (err) => {
      console.log('getGenres client side error =>', err)
    })
  }

  changeGenre(e) {
    console.log('e.target in changeGenre =>', e.target)
    this.setState({
      currentGenre: e.target.value
    })
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select onChange={e => this.changeGenre(e)}>
         {this.state.genres.map(genreObj => {
            return (<option key={genreObj.id} value={genreObj.id}>{genreObj.name}</option>)
          }) }
        
        </select>
        <br/><br/>

        <button>Search</button>

      </div>
    );
  }
}

export default Search;