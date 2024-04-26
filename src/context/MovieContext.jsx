import { createContext, useReducer } from "react";
import MovieReducer from "./MovieReducer";
const MovieContext = createContext()

const POPULAR_URL = import.meta.env.VITE_POPULAR_MOVIES_URL
const AUTH_KEY = import.meta.env.VITE_AUTH_KEY
const SEARCH_URL = import.meta.env.VITE_SEARCH_URL
const MOVIE_DETAIL_URL = import.meta.env.VITE_MOVIE_DETAIL_URL 

export const MovieProvider = ({children}) => {

    const options = {
            method:'GET',
            headers: {
                accept:'application/json',
                Authorization: AUTH_KEY
            }
        }

     const initialState = {
        popularMovies:[],
        searchResults:[],
        movieDetails:{}
     }

     const[state, dispatch] = useReducer(MovieReducer, initialState)

    const searchMovies = async(searchTxt) => {
        const params = new URLSearchParams({
            query: searchTxt,
        })
        const response = await fetch(`${SEARCH_URL}?${params}`, options)
        const {results} = await response.json()
        dispatch({
            type: 'GET_SEARCH_RESULTS',
            payload: results
        })
    } 

    const getMovieDetail = async(id) => {
        const response = await fetch(`${MOVIE_DETAIL_URL}/${id}`, options)
        const data = await response.json()
        dispatch({
            type: 'GET_MOVIE_DETAILS',
            payload: data
        })
    }

    const fetchPopularMovies = async() => {
        const response = await fetch(POPULAR_URL, options)
        const {results} = await response.json()
        dispatch({
            type: 'GET_POPULAR_MOVIES',
            payload: results
        })
    }
    return (<MovieContext.Provider value={{
        popularMovies: state.popularMovies,
        searchResults: state.searchResults,
        movieDetails: state.movieDetails,
        fetchPopularMovies,
        searchMovies,
        getMovieDetail
    }}>
        {children}
    </MovieContext.Provider>)
}



export default MovieContext