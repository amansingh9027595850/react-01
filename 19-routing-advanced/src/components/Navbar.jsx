// import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center bg-cyan-900 px-8 py-4 justify-between'>
      <Link to='/'>
      <h2 className='text-xl font-bold'>Sheryians</h2>
      </Link>
      <div className='flex gap-10'>
        
        <Link className='text-xl font-medium  md:hidden' to=''>&#9776;</Link>
        <Link className='text-xl font-medium hidden md:inline-flex' to='/'>Home</Link>
        <Link className='text-xl font-medium hidden md:inline-flex' to='/about'>About</Link>
        <Link className='text-xl font-medium hidden md:inline-flex' to='/product'>Product</Link>
        <Link className='text-xl font-medium hidden md:inline-flex' to='/cources'>Cources</Link>
      </div>
    </div>
  )
}

export default Navbar
