import React from 'react'

function Navbar() {
  return (
    <>
      <div className="navbar flex justify-between align-middle bg-red-700 text-white">
        <div className="logo text-2xl">
            Logo
        </div>
        <ul className='flex align-middle gap-2'>
            <li>Home</li>
            <li>About</li>
            <li>More</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
