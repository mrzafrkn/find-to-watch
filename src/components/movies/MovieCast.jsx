import { useContext } from "react"
import MovieContext from "../../context/MovieContext"
const MovieCast = () => {
    const {movieCast} = useContext(MovieContext)
    
    const renderedCast = movieCast.slice(0,8).map((actor) => ( (actor.profile_path && actor.character) &&
        <div className="flex flex-col justify-center items-center">
           <img className="border-2 border-black rounded w-[150px] h-[170px]" src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt="cast" />
           <p className="text-center">{actor.name}</p>
           <small className="text-wrap">{actor.character}</small>
        </div>
    ))
  return (
    <div className="flex justify-between mt-10 w-full items-center">
       {renderedCast} 
    </div>
  )
}

export default MovieCast