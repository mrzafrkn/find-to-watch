import MovieItem from "./MovieItem"
import {useContext, useEffect } from "react"
import MovieContext from "../../context/MovieContext"
const PopularMovies = () => {
  const {popularMovies, fetchPopularMovies} = useContext(MovieContext)

  useEffect(() => {fetchPopularMovies()}, [])
  const renderedPopularMovies = popularMovies.map(movie => (<MovieItem key={movie.id} movieID={movie.id} title={movie.title} poster={movie.poster_path}/>)) 
  
  return (
    <div className="movie-container flex flex-col items-center ">
      <h1 className="text-4xl font-bold mb-10">Popular Movies</h1>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5">
           {renderedPopularMovies}
        </div>
    </div>
  )
}

export default PopularMovies