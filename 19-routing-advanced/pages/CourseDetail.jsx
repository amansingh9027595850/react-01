// import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    const { id } = useParams()
    console.log(useParams())
  return (
    <div>
      <h1>Course Detail page : {id}</h1>
    </div>
  )
}

export default CourseDetail
