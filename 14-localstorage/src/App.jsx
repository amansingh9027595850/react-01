import React from 'react'

const App = () => {
  // localStorage.clear()
  // sessionStorage.clear()
  // localStorage.setItem('age','20')
  // localStorage.setItem('user','Aman')

  const user = {
    name: 'Aman',
    age: 20,
    city: 'Haridwar'
  }
  localStorage.setItem('user',JSON.stringify(user))
  const data = JSON.parse(localStorage.getItem('user'))
  console.log(data)


  return (
    <div>
      App
    </div>
  )
}

export default App
