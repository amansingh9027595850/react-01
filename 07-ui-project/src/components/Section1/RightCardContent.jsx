// import React from 'react'

const RightCardContent = (props) => {
  return (

        <div className="absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center font-extrabold text-xl">{props.id}</h2>
        <div> 
      <p className="text-shadow-2xs text-lg leading-relaxed text-white mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque? Nisi voluptas dolorum temporibus aliquam enim ratione quod inventore.</p>
      <div className='flex justify-between'>
        <button style={{backgroundColor: props.color}} className='text-white font-medium px-6 py-2 rounded-full'>{props.tag}</button>
        <button style={{backgroundColor: props.color}} className='text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
       </div>
      </div>
      </div>
      

  )
}

export default RightCardContent
