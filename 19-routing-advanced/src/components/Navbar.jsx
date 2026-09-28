// import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center bg-cyan-900 px-8 py-4 justify-between'>
      <NavLink to='/'>
      <h2 className='text-xl font-bold'>Sheryians</h2>
      </NavLink>
      <div className='flex gap-10'>
        
        <NavLink className='text-xl font-medium  md:hidden' to=''>&#9776;</NavLink>
        <NavLink className={({isActive})=> { return isActive ? ' text-xl font-medium hidden md:inline-flex px-4 py-1 rounded underline bg-amber-500' : 'text-xl px-4 py-1 font-medium hidden md:inline-flex'}} to='/'>Home</NavLink>
        <NavLink className={({isActive})=> { return isActive ? ' text-xl font-medium hidden md:inline-flex px-4 py-1 rounded underline bg-amber-500' : 'text-xl px-4 py-1 font-medium hidden md:inline-flex'}} to='/about'>About</NavLink>
        <NavLink className={({isActive})=> { return isActive ? ' text-xl font-medium hidden md:inline-flex px-4 py-1 rounded underline bg-amber-500' : 'text-xl px-4 py-1 font-medium hidden md:inline-flex'}} to='/product'>Product</NavLink>
        <NavLink className={({isActive})=> { return isActive ? ' text-xl font-medium hidden md:inline-flex px-4 py-1 rounded underline bg-amber-500' : 'text-xl px-4 py-1 font-medium hidden md:inline-flex'}} to='/cources'>Cources</NavLink>
      </div>
    </div>
  )
}

export default Navbar
