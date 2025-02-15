import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-white">🚗 CarZone</h2>
          <p className="text-sm mt-1">© {new Date().getFullYear()} Barcha huquqlar himoyalangan.</p>
        </div>

        <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
          <li>
            <Link to="/" className="hover:text-white transition-all">Asosiy</Link>
          </li>
          <li>
            <Link to="/admin/cars" className="hover:text-white transition-all">Avtomobillar</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white transition-all">Biz haqimizda</Link>
          </li>
          <li>
            <Link to="/" className="hover:text-white transition-all">Bog‘lanish</Link>
          </li>
        </ul>

        <div className="flex gap-4 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
