import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header id='header' className="bg-white text-black p-5 text-center text-2xl font-bold shadow-md">
      <nav className="container mx-auto flex justify-between space-x-6">
        <div>
            <h2>CARS</h2>
        </div>
        <ul>
            <li className='flex gap-3.5 text-[19px] font-medium'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/admin'}>Admin</NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;