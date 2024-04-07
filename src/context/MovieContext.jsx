import { createContext, useReducer } from "react";
import MovieReducer from "./MovieReducer";
const MovieContext = createContext()

const POPULAR_URL = import.meta.env.VITE_POPULAR_MOVIES_URL
const AUTH_KEY = import.meta.env.VITE_AUTH_KEY

export const MovieProvider = ({children}) => {

     const initialState = {
        popularMovies:[],
     }

     const[state, dispatch] = useReducer(MovieReducer, initialState)

    const fetchPopularMovies = async() => {
        const response = await fetch(POPULAR_URL, {
            method:'GET',
            headers: {
                accept:'application/json',
                Authorization: AUTH_KEY
            }
        })
        const {results} = await response.json()
        dispatch({
            type: 'GET_POPULAR_MOVIES',
            payload: results
        })
    }
    return (<MovieContext.Provider value={{
        popularMovies: state.popularMovies,
        fetchPopularMovies
    }}>
        {children}
    </MovieContext.Provider>)
}



export default MovieContext