import { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MovieContext from "../../context/MovieContext";
const MovieSearch = () => {
  const {searchMovies} = useContext(MovieContext)
  const [searchTxt, setSearchTxt] = useState('')

  const navigate = useNavigate()

  const handleChange = (e) => setSearchTxt(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    searchMovies(searchTxt)
    navigate(`/search/${searchTxt}`)
    setSearchTxt('')
   
  }

  return (
    <div className="h-[96px] bg-base-200 mb-10 flex items-center">
        <form onSubmit={handleSubmit} className="flex mx-auto h-2/4 w-3/4 sm:w-2/4 md:w-1/3">
            <input type="text" onChange={handleChange} className="input input-bordered w-full mr-3" placeholder="Search..."  value={searchTxt}/>
            <button className="btn btn-neutral" type="submit"><FaSearch/>Search</button>
        </form>
    </div>
  )
}

export default MovieSearch