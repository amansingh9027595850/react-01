import React from 'react'

const App = () => {
  const pageScrolling =(elem)=>{
    if(elem>0){
      console.log('scrolling down')
    }else{
      console.log('scrolling up')
    }
  }
  
  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY)
    }}>
     <div className='page1'></div>
     <div className='page2'></div>
     <div className='page3'></div>
    </div>
  )
}

export default App
