import React, { useState } from 'react'
import Navbar from "./Components/Navbar"
import Newsbox from './Components/Newsbox'

function App() {
  const [category,setCategory]=useState("general");
  return (
    <>

      <Navbar setCategory={setCategory}></Navbar>
      <Newsbox category={category}></Newsbox>
      
    </>
  )
}

export default App
