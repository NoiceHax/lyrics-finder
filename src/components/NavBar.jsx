import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white shadow px-4 py-3 mb-6">
      <div className="container mx-auto flex items-center">
        <Link to="/" className="mr-6 text-lg font-semibold text-blue-600 hover:text-blue-800">
          Home
        </Link>
        <Link to="/favorites" className="text-lg font-semibold text-blue-600 hover:text-blue-800">
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;