import { Link } from "react-router-dom"
const MovieItem = ({title, poster, movieID}) => {
  const posterURL = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className="flex flex-col justify-center items-center">
      <Link to={`/${movieID}`}>
        <img className="border-2 border-black rounded" width={200} src={`${posterURL}/${poster}`} alt="poster"/>
      </Link>
      <Link to={`/${movieID}`} className="text-sm">{title}</Link>
    </div>
  )
}

export default MovieItem