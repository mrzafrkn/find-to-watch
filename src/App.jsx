import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/layout/Footer'
import SearchPage from './pages/SearchPage'
import Detail from './pages/Detail'
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
          <Route path='/movie/:id' element={<Detail/>}/>
          <Route path='/search/:query' element={<SearchPage/>}/>
        </Routes>
        <Footer/>
        </div> 
      </Router>
    </MovieProvider>
  )
}

export default App