import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props)

  }

  // Make an onClick for each list item. If the movies shown is the search results, 
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  render() {
    return (
      <ul className="movies">
      {/* {console.log('expect arr of objs =>', this.props.movies)} */}
       {this.props.movies.map((movie, index )=> {
         return([
          <li className="movie_item" 
              key='{index}'
              onClick={(e)=>{this.props.saveOrDeleteMovie(this.props.movies[index])}}
              
          >
             <img src= {`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} />
             <div className="movie_description">
               <h5>{movie.title}</h5>
               <section className="movie_details">
                 <div className="movie_year">
                   <span className="title">Release Date</span>
                   <span>{movie.release_date}</span>
                 </div>
                 <div className="movie_rating">
                   <span className="title">Rating</span>
                   <span>{movie.vote_count}</span>
                 </div>
               </section>
             </div>
           </li>
         ])
       })}
      </ul>
    );
  }
}

export default Movies;