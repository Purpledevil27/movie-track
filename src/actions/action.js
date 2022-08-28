// Action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVORITES = 'ADD_FAVORTIES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES'
export const SET_SHOW_FAVORITES = 'SET_SHOW_FAVORITES'
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST'
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT'
export const REMOVE_MOVIE = 'REMOVE_MOVIE'

// Action Creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function removeMovie(movie) {
    return {
        type: REMOVE_MOVIE,
        movie
    }
}
export function addFavorites(movie) {
    return {
        type: ADD_FAVORITES,
        movie
    }
}

export function removeFavorites(movie) {
    return {
        type: REMOVE_FAVORITES,
        movie
    }
}

export function showFavorites(val) {
    return {
        type: SET_SHOW_FAVORITES,
        val
    }
}

export function addMovieTolist(movie) {
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMovieSearch(movie) {
    const url = `https://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    return function (dispatch) {
        fetch(url)
            .then(response => response.json())
            .then(movie => {
                console.log(movie);
                dispatch(addMovieSearchResult(movie))
            })
    }
}

export function addMovieSearchResult(movie) {
    return {
        type: 'ADD_SEARCH_RESULT',
        movie
    }
}