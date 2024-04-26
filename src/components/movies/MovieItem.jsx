import { Link } from "react-router-dom"
import { useContext } from "react"
import MovieContext from "../../context/MovieContext"

const MovieItem = ({title, poster, movieID}) => {
  const {getMovieDetail, getMovieCast} = useContext(MovieContext)


  const posterURL = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className="flex flex-col justify-center items-center">
      <Link onClick={() => {getMovieDetail(movieID); getMovieCast(movieID)}} to={`/movie/${movieID}`}>
        <img className="border-2 border-black rounded max-h-[300px] min-h-[300px]" height={200} width={200} src={`${posterURL}/${poster}`} alt="poster"/>
      </Link>
      <Link to={`/${movieID}`} className="text-sm">{title}</Link>
    </div>
  )
}

export default MovieItem