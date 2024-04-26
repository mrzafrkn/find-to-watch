import { useContext } from "react"
import MovieContext from "../context/MovieContext"
import MovieCast from "../components/movies/MovieCast"
const Detail = () => {
    const{movieDetails} = useContext(MovieContext)
    const date = new Date(movieDetails.release_date)
    

    const posterURL = 'https://image.tmdb.org/t/p/w500'
    const backdropURL = 'https://image.tmdb.org/t/p/original'
  return (
    <div className="mx-auto mt-5">
        <div className="flex w-full px-16">
            <div className="poster mr-5">
                <img className="border-2 border-black rounded max-h-[400px] min-h-[400px] min-w-[270px] max-w-[270px]"  src={`${posterURL}/${movieDetails.poster_path}`}/>
            </div>
            <div className="movie-info flex-col w-[800px] max-w-[70%] min-w[70%]">
                <h1 className="text-3xl">{movieDetails.title}</h1>
                <small>{date.getFullYear()}</small>
                {movieDetails.tagline && <p className="mt-5">{movieDetails.tagline.toUpperCase()}</p>}
                <p className="font-bold mt-5">{movieDetails.overview}</p>
            </div>
            <div className="backdrop absolute -z-10 top-10 left-0 hidden md:flex opacity-30">
              <img src={`${backdropURL}/${movieDetails.backdrop_path}`} width={1600} />
            </div>
        </div>
        <MovieCast/>
    </div>
  )
}

export default Detail