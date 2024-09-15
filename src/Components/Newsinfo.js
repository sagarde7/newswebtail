import React from 'react'

function Newsinfo(props) {
  return (
    <>
      <div className="cards border-4 border-sky-900 m-6 inline-block px-7 py-7">
        <div className="img">

        <img src={props.ims??"logo.png"} alt="" srcset=""  className='w-96 h-44' />
        </div>
        <div className="title font-bold"> {props.title?props.title.slice(0,50):"."}</div>
        <div className="description">{props.des?props.des.slice(0,50):"."}</div>
        <button><a href={props.url} target='_blank' rel='noreferrer' className="readmore underline text-blue-500">Read more</a></button>
      </div>
    </>
  )
}

export default Newsinfo
