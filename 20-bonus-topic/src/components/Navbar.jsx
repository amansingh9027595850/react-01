import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <button className='bg-amber-400 py-2 rounded px-4 m-2 ' onClick={()=> props.theam === 'light'? props.setTheam('datk'): props.setTheam('light')}>Change Theme</button>
    </div>
  )
}

export default Navbar
