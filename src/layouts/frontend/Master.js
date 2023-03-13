import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Master = () => {
  return (
    <>
       <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Master
