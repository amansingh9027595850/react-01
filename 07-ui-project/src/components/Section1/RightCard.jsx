// import React from 'react'
import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
  return (
    <div className='h-full w-70 shrink-0  overflow-hidden relative rounded-4xl'>
      <img className='w-full h-full object-cover' src={props.img} alt="" />
      <RightCardContent tag={props.tag} id={props.id} color={props.color} />
    </div>
  )
}

export default RightCard
