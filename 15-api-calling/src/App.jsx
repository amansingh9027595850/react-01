import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const[data, setData] = useState([])
  const getDate =async()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data)
    setData(response.data)
    console.log(data)
  }
  return (
    <div>
      <button onClick={getDate} style={{width : '100px', height : '50px'}}>Get Date</button>
      <div>
         {data.map((item ,idx)=>{
          return <div key={idx}>{item}</div>
        })}
      </div>
    </div>
  )
}

export default App
