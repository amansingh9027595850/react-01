// import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from "./RightCard"

const RightContent = (props) => {
  return (
    <div id='right' className="h-full w-2/3 overflow-x-auto p-5 gap-8 flex flex-nowrap  rounded-4xl">
       {props.users.map((elem,idx)=>{

        return <RightCard key={idx} id={idx+1} img={elem.img} tag={elem.tag} color={elem.color} />
       })}
      
    </div>
  )
}

export default RightContent
