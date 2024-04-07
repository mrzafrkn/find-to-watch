import { Link } from "react-router-dom"
import { RiMovie2Fill } from "react-icons/ri";
const Navbar = () => {
  return (
    <nav className="navbar bg-base-200 text-neutral-content ">
        <div className="container mx-auto flex justify-between">
            <div className="flex-none px-2" >
                <RiMovie2Fill className="inline  text-3xl"/>
                <Link className="text-2xl font-bold align-middle" to='/'>FindToWatch</Link>
            </div>
            <div className="">
                <Link className="btn btn-ghost btn-md rounded-btn" to='/'>Home</Link>
                <Link className="btn btn-ghost btn-md rounded-btn" to='/about'>About</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar