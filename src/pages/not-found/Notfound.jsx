import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-extrabold text-blue-900">404</h1>
      <p className="text-xl text-gray-600 mt-4">Oops! Sahifa topilmadi.</p>
      <p className="text-gray-500">Siz noto‘g‘ri manzilga kirdingiz yoki sahifa o‘chirib yuborilgan.</p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-all"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
};

export default Notfound;
