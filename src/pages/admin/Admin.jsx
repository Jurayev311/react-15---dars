import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import {SIDEBARLINKS} from '../../static'

const Admin = () => {
  return (
    <div id='admin-sidebar' className="flex">
      <div className="w-80 h-screen sticky top-0 left-0 bg-sky-950 text-white p-6 flex flex-col">
        <p className="text-2xl font-bold">Admin Dashboard</p>
        <ul className="my-6 flex-1">
          {
            SIDEBARLINKS?.map((link, inx) => (
              <li key={inx}>
                <NavLink to={link.path} className={`block py-2.5 my-1 indent-1 hover:bg-[#1c5691] rounded`}>{link.name}</NavLink>
              </li>
            ))
          }
        </ul>
        <Link to={'/'}>
        <div className='block w-full bg-red-500 text-center rounded cursor-pointer'>
          <button className="py-2">Log Out</button>
        </div>
        </Link>
      </div>
      <div className="flex min-h-screen flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
