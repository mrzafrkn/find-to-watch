const MovieReducer = (state, action) => {
    switch(action.type) {
        case 'GET_POPULAR_MOVIES':
            return {
                ...state,
                popularMovies: action.payload
            }
        case 'GET_SEARCH_RESULTS':
            return {
                ...state,
                searchResults: action.payload
            }
        case 'GET_MOVIE_DETAILS':
            return {
                ...state,
                movieDetails: action.payload
            }
        case 'GET_MOVIE_CAST':
            return {
                ...state,
                movieCast: action.payload
            }                    
        default:
            return state    
    }
}

export default MovieReducer