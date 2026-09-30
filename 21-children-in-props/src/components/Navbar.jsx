import React from 'react'
import Nav2 from './Nav2'

const Navbar = ({children, theme}) => {
        // console.log(props)
  return (
    <div>
      <div className='nav'>
        <h1>Sheryians</h1>
        {children}
        <Nav2  theme={theme} />
      </div>
    </div>
  )
}

export default Navbar
