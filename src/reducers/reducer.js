import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_FAVORITES, REMOVE_FAVORITES, SET_SHOW_FAVORITES, ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULT, REMOVE_MOVIE } from "../actions/action";

const initialMoviesState = {
    list: [],
    favorites: [],
    showFavorites: false
}

export function movies(state = initialMoviesState, action) {
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVORITES:
            return {
                ...state,
                favorites: [action.movie, ...state.favorites]
            }
        case REMOVE_FAVORITES:
            const filteredMovie = state.favorites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favorites: filteredMovie
            }
        case SET_SHOW_FAVORITES:
            return {
                ...state,
                showFavorites: action.val
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list],
                showSearchResults: false
            }
        case REMOVE_MOVIE:
            const filteredM = state.list.filter(
                movie => movie.Title !== action.movie.Title
            )
            const filteredF = state.favorites.filter(
                movie => movie.Title !== action.movie.Title
            )
            return {
                ...state,
                list: filteredM,
                favorites: filteredF
            }

        default:
            return state;
    }
}

const initialSearchState = {
    result: {},
    showSearchResults: false
}

export function search(state = initialSearchState, action) {
    switch (action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResults: true
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResults: false
            }
        default:
            return state
    }
}

export default combineReducers({
    movies: movies,
    search: search
})