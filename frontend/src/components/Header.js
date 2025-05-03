import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-700 font-semibold' : 'text-gray-800 hover:text-blue-700 font-medium';
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <Link to="/">
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-bold text-blue-900 uppercase tracking-wider">
                  Instant Catering Services Ltd.
                </h1>
                <p className="text-xs text-gray-600">Premium In-Flight Catering Solutions</p>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation - Right Side */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'border-b-2 border-blue-700' : ''} uppercase font-medium px-2 py-1 text-gray-800 hover:text-blue-700`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`${location.pathname === '/services' ? 'border-b-2 border-blue-700' : ''} uppercase font-medium px-2 py-1 text-gray-800 hover:text-blue-700`}
            >
              Services
            </Link>
            <Link 
              to="/media" 
              className={`${location.pathname === '/media' ? 'border-b-2 border-blue-700' : ''} uppercase font-medium px-2 py-1 text-gray-800 hover:text-blue-700`}
            >
              Media
            </Link>
            <Link 
              to="/about" 
              className={`${location.pathname === '/about' ? 'border-b-2 border-blue-700' : ''} uppercase font-medium px-2 py-1 text-gray-800 hover:text-blue-700`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="uppercase font-medium px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900"
            >
              Contact Us
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-gray-800 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded" 
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        id="mobile-menu" 
        className={`md:hidden bg-white border-t border-gray-200 py-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link to="/" className={`uppercase ${isActive('/')} block py-2 text-center`} onClick={toggleMobileMenu}>Home</Link>
          <Link to="/services" className={`uppercase ${isActive('/services')} block py-2 text-center`} onClick={toggleMobileMenu}>Services</Link>
          <Link to="/media" className={`uppercase ${isActive('/media')} block py-2 text-center`} onClick={toggleMobileMenu}>Media</Link>
          <Link to="/about" className={`uppercase ${isActive('/about')} block py-2 text-center`} onClick={toggleMobileMenu}>About</Link>
          <Link to="/contact" className="uppercase block py-2 bg-blue-800 text-white rounded text-center" onClick={toggleMobileMenu}>Contact Us</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;