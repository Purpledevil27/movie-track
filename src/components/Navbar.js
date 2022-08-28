import React from "react";
import { addMovieTolist, handleMovieSearch } from '../actions/action.js'
import { connect } from "react-redux"

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }

    handleAddToMovies = (movie) => {
        this.props.dispatch(addMovieTolist(movie));
        this.setState({
            showSearchResults: false
        });
    }

    handleSearch = () => {
        const { searchText } = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    }

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        });
    }

    render() {
        const { result: movie, showSearchResults } = this.props.search;
        return (

            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange} />
                    <button id='search-btn' onClick={this.handleSearch}>Search</button>
                    {showSearchResults &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={movie.Poster} alt="search-pic" />
                                <div className="movie-info">
                                    <span className="info-title">{movie.Title}</span>
                                    <span className="info-plot">{movie.Plot}</span>
                                    <span className="info-plot">{movie.imdbRating}</span>
                                    <button onClick={() => this.handleAddToMovies(movie)}>
                                        Add to Movies
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div >
        )
    }
}

function mapStateToProps({ search }) {
    return {
        search: search
    }
}

export default connect(mapStateToProps)(Navbar);