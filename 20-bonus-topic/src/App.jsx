import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { useEffect } from 'react'
const App = () => {
  const [theam, setTheam] = useState('light')

  return (
    <div className={`w-screen h-screen flex flex-col items-center justify-center ${theam === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <h1 className='text-4xl font-bold'>Theam is : {theam}</h1>
      <Navbar theam={theam} setTheam={setTheam} />
    </div>
  )
}

export default App
