import { ThemeDataContext } from "../context/ThemeContext"
import { useContext } from 'react'


const Nav2 = () => {
  const [theme, setTheme] = useContext(ThemeDataContext)
    
  return (
    <div className='nav2'>
      <h3 className='text-white font-semibold text-lg'>Home</h3>
      <h3 className='text-white font-semibold text-lg'>About</h3>
      <h3 className='text-white font-semibold text-lg'>Contact</h3>
      <h3 className='text-white font-semibold text-lg'>Services</h3>
      <span onClick={()=> {
        setTheme(theme === 'light' ? 'dark' : 'light' )
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light' )
      }
      } className="bg-red-500 text-white w-14 flex items-center justify-center rounded-xl cursor-pointer active:scale-95 border-2 border-white" >
        <h3  className="text-white font-semibold text-lg">{theme}</h3>
      </span>
    </div>
  )
}

export default Nav2
