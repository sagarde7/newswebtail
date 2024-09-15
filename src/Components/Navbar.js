import React from 'react'

function Navbar(props) {
  return (
    <>
      <div className="navbar flex justify-between align-middle bg-red-700 text-white fixed top-0 left-0 w-full z-10">
        <div className="logo text-2xl">
            NewsUS
        </div>
        <ul className='flex align-middle gap-2'>
            <li onClick={()=>{props.setCategory("general")}} className='hover:underline hover:cursor-pointer'>Home</li>
            <li onClick={()=>{props.setCategory("business")}} className='hover:underline hover:cursor-pointer'>Business</li>
            <li onClick={()=>{props.setCategory("technology")}} className='hover:underline hover:cursor-pointer'>Technology</li>
            <li onClick={()=>{props.setCategory("sports")}} className='hover:underline hover:cursor-pointer'>Sports</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
