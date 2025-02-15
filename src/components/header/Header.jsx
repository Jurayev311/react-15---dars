import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="bg-gradient-to-r from-gray-900 to-gray-950 text-white p-5 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-3xl font-extrabold tracking-wide">
            CARS
          </Link>
        </div>

        <ul className="flex items-center gap-6 text-lg font-medium">
          <NavLink to="/" className="hover:text-blue-400 transition-all">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-400 transition-all">
            About
          </NavLink>
          <NavLink to="/admin" className="hover:text-blue-400 transition-all">
            Admin
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
