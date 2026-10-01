// import React from 'react'
import { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = ({children, theme}) => {
  const data = useContext(ThemeDataContext)
  console.log(data)
        // console.log(props)
  return (
    <div>
      <div className='nav'>
        <h1>{data}</h1>
        {/* {children} */}
        <Nav2  theme={theme} />
      </div>
    </div>
  )
}

export default Navbar
