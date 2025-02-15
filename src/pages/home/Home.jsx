import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      {/* Header sahifaning tepasida turishi uchun */}

      {/* Sahifa mazmuni */}
      <div className="flex items-center justify-center h-[90vh] relative z-10">
        <div className="text-center animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slideIn">
            Xush kelibsiz!
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fadeIn delay-300">
            Admin panelga kirish uchun pastdagi tugmani bosing.
          </p>
          <Link
            to="/admin"
            className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-700"
          >
            Admin Sahifaga O‘tish 🚀
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;
