import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
            <div className="h-40 w-44  rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={props.elem.download_url}
                alt=""
              />
            </div>
            <div className="text-center font-bold text-lg">{props.elem.author}</div>
          </a>
    </div>
  )
}

export default Card
