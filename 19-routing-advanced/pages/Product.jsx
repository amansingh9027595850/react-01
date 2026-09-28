// import React from 'react'
import { NavLink , Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <div>
      <div className='flex gap-10 justify-center py-4'>
        <NavLink className={({isActive})=> isActive ? 'text-xl font-semibold underline bg-amber-500 py-2 px-4 rounded' : 'text-xl font-semibold py-2 px-4'} to='/product/men'>Men</NavLink>
        <NavLink className={({isActive})=> isActive ? 'text-xl font-semibold underline bg-amber-500 py-2 px-4 rounded' : 'text-xl font-semibold py-2 px-4'} to='/product/women'>Women</NavLink>
        <NavLink className={({isActive})=> isActive ? 'text-xl font-semibold underline bg-amber-500 py-2 px-4 rounded' : 'text-xl font-semibold py-2 px-4'} to='/product/kids'>Kids</NavLink>
      </div>
      {/* <h1>Product Pge</h1> */}
      <Outlet />
    </div>
  )
}

export default Product
