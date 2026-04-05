import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4' >
        <img  className='w-[50px]'src="/logo.jpg"/>
        <Link to='/' className='text-blue-500 text-4xl font-bold'>movies</Link>
        <Link to='/WatchList' className='text-blue-500 text-4xl font-bold'>WatchList</Link>
    </div>
  )
}

export default Navbar
