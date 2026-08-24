// import React from 'react'

import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page1Content = (props) => {
  return (
    <div className="pb-15 pt-4 gap-10 flex justify-between items-center h-[90vh]  px-18">
        <LeftContent />
        <RightContent users={props.users}/>  
    </div>
  )
}

export default Page1Content
