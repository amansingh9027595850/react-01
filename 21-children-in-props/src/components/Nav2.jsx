import React from 'react'

const Nav2 = (props) => {
    
  return (
    <div className='nav2'>
      <h3>Home</h3>
      <h3>About</h3>
      <h3>Contact</h3>
      <h3>Services</h3>
      <h3>{props.theme}</h3>
    </div>
  )
}

export default Nav2
