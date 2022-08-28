import React from 'react';
import { data } from './data.js';
import Navbar from './components/Navbar'
import MovieCard from './components/MovieCard';
import { addMovies, showFavorites } from './actions/action.js';
// import { connect } from './index.js';
import Nav from 'react-bootstrap/Nav';
import { connect } from "react-redux"

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(data))
  }

  isMovieFavorite = (movie) => {
    const { movies } = this.props;
    const index = movies.favorites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.dispatch(showFavorites(val))
  }
  render() {
    const { movies, search } = this.props;
    const { list, favorites = [], showFavorites = [] } = movies;
    const displayMovies = showFavorites ? favorites : list
    return (

      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavorites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>
              Movies
            </div>
            <div className={`tab ${showFavorites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>
              Favorites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie) => (
              <MovieCard
                movie={movie}
                key={movie.imdbID}
                dispatch={this.props.dispatch}
                isFavorite={this.isMovieFavorite(movie)} />
            ))}
          </div>
          {displayMovies.length === 0 ? <div className='no-movies'>No Movies to display.</div> : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.movies
  }
}

const connectedComponent = connect(mapStateToProps)(App)
export default connectedComponent;
