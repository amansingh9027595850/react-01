import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect'
import Navbar from './components/Navbar'
import Products from './components/Products'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/about' element={<About />}  />
        <Route path='/contact' element={<Contect />}  />
        <Route path='/products' element={<Products />}  />
      </Routes>
    </div>
  )
}

export default App
