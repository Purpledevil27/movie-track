import React from "react";
import { addFavorites, removeFavorites, removeMovie } from "../actions/action";

class MovieCard extends React.Component {

    handleFavoriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(addFavorites(movie))
    }

    handleUnFavoriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(removeFavorites(movie));
    }

    handleRemove = () => {
        const { movie } = this.props;
        this.props.dispatch(removeMovie(movie));
    }
    render() {
        const { movie, isFavorite } = this.props;
        return (
            <div className="movie-card">
                <div className="left" >
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title" >{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">IMDb:{movie.imdbRating}</div>
                        {
                            isFavorite
                                ? <button className="unfavourite-btn" onClick={this.handleUnFavoriteClick}>Unfavorite</button>
                                : <button className="favourite-btn" onClick={this.handleFavoriteClick} >Favorite</button>
                        }
                        <button className="remove" onClick={this.handleRemove}>Remove</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;