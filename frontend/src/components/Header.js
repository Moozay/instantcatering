import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-800">Instant Catering Services Ltd.</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-800 hover:text-blue-700 font-medium">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-700 font-medium">About Us</Link>
          <Link to="/services" className="text-gray-800 hover:text-blue-700 font-medium">Services</Link>
          <Link to="/media" className="text-gray-800 hover:text-blue-700 font-medium">Media</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-700 font-medium">Contact Us</Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button will go here */}
          <button className="text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;