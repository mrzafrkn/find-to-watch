import { useContext } from "react"
import MovieContext from "../context/MovieContext"
const Detail = () => {
    const{movieDetails} = useContext(MovieContext)
    const date = new Date(movieDetails.release_date)
    

    const posterURL = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className="mx-auto">
        <div className="flex">
            <div className="poster mr-10">
                <img className="border-2 border-black rounded" width={270} src={`${posterURL}/${movieDetails.poster_path}`}/>
            </div>
            <div className="movie-info flex-col">
                <h1 className="text-3xl">{movieDetails.title}</h1>
                <small>{date.getFullYear()}</small>
                {movieDetails.tagline && <p>{movieDetails.tagline.toUpperCase()}</p>}
                <p>{movieDetails.overview}</p>
            </div>
        </div>
    </div>
  )
}

export default Detail