import { useContext } from "react"
import MovieContext from "../../context/MovieContext"
import MovieItem from "./MovieItem"
const SearchResults = () => {
    const {searchResults} = useContext(MovieContext)
    const renderedSearchResults = searchResults.map(movie => (<MovieItem key={movie.id} movieID={movie.id} title={movie.title} poster={movie.poster_path}/>))

  return (
    <div>
        <div className="movie-container flex flex-col items-center mt-10 ">
            <h1 className="text-4xl font-bold mb-10">Search Results</h1>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5">
                {renderedSearchResults}
             </div>
         </div>
    </div>
  )
}

export default SearchResults