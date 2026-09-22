import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from '../pages/Home'
import { Routes, Route } from 'react-router-dom'
import Product from '../pages/Product'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

const App = () => {
  return (
    <div className='bg-black h-screen text-white'>
      <Navbar  />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
