import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <div id='admin-sidebar' className="flex">
      <div className="w-80 bg-blue-950 text-white p-6 flex flex-col">
        <p className="text-2xl font-bold">Admin Dashboard</p>
        <ul className="my-6 flex-1">
          <li>
            <NavLink to="cars" className="block py-3  indent-1">Cars</NavLink>
          </li>
          <li>
            <NavLink to="createcar" className="block py-3  indent-1">Create Car</NavLink>
          </li>
          <li>
            <NavLink to="documents" className="block py-3  indent-1">Documents</NavLink>
          </li>
          <li>
            <NavLink to="employees" className="block py-3  indent-1">Employees</NavLink>
          </li>
          <li>
            <NavLink to="orders" className="block py-3  indent-1">Orders</NavLink>
          </li>
          <li>
            <NavLink to="payments" className="block py-3  indent-1">Payments</NavLink>
          </li>
          <li>
            <NavLink to="reports" className="block py-3  indent-1">Reports</NavLink>
          </li>
          <li>
            <NavLink to="analytics" className="block py-3  indent-1">Analytics</NavLink>
          </li>
          <li>
            <NavLink to="settings" className="block py-3 indent-1">Settings</NavLink>
          </li>
          <li>
            <NavLink to="notification" className="block py-3  indent-1">Notifications</NavLink>
          </li>
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
