import React from 'react'
import { NavLink } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='flex'>
      <div className='w-80 bg-blue-950 text-white p-6 flex flex-col'>
        <p className='text-2xl font-bold'>Admin Dashboard</p>
        <ul className='my-6 flex-1'>
          <li>
            <NavLink to={'admin'} className='block py-2 indent-1'>Cars</NavLink>
          </li>
          <li>
            <NavLink to={'admin'} className='block py-2 indent-1'>Create car</NavLink>
          </li>
        </ul>
        <button className='bg-red-500 rounded py-2'>Log Out</button>
      </div>
      <div className='flex min-h-screen'></div>
    </div>
  )
}

export default Admin