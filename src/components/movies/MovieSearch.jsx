import { FaSearch } from "react-icons/fa";

const MovieSearch = () => {
  return (
    <div className="h-[96px] bg-base-200 mb-10 flex items-center">
        <form className="flex mx-auto h-2/4 w-3/4 sm:w-2/4 md:w-1/3">
            <input className="input input-bordered w-full mr-3" placeholder="Search..." />
            <button className="btn btn-neutral" type="submit"><FaSearch/>Search</button>
        </form>
    </div>
  )
}

export default MovieSearch