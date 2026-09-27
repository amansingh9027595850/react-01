// import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from '../pages/Home'
import { Routes, Route } from 'react-router-dom'
import Product from '../pages/Product'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import Men from '../pages/Men'
import Women from '../pages/Women'
import Kids from '../pages/Kids'
import Cources from '../pages/Cources'
import CourseDetail from '../pages/CourseDetail'

const App = () => {
  return (
    <div className='bg-black h-screen text-white'>
      <Navbar  />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} >
          <Route index element={<h1>Product Page</h1>} />
                <Route path='men' element={<Men />} />
                <Route path='women' element={<Women />} />
                <Route path='kids' element={<Kids />} />
        </Route>
        <Route path='/cources' element={<Cources />} />
        <Route path='/cources/:id' element={<CourseDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
