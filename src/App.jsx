import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/layout/Footer'
import { MovieProvider } from './context/MovieContext'
const App = () => {
  return (
    <MovieProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/:id' element={<h1>Movie Detail</h1>}/>
        </Routes>
        <Footer/>
        </div> 
      </Router>
    </MovieProvider>
  )
}

export default App