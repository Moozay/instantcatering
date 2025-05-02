import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

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
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About Us</Link>
          <Link to="/services" className={isActive('/services')}>Services</Link>
          <Link to="/media" className={isActive('/media')}>Media</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact Us</Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-800" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/" className={`${isActive('/')} block`} onClick={toggleMobileMenu}>Home</Link>
            <Link to="/about" className={`${isActive('/about')} block`} onClick={toggleMobileMenu}>About Us</Link>
            <Link to="/services" className={`${isActive('/services')} block`} onClick={toggleMobileMenu}>Services</Link>
            <Link to="/media" className={`${isActive('/media')} block`} onClick={toggleMobileMenu}>Media</Link>
            <Link to="/contact" className={`${isActive('/contact')} block`} onClick={toggleMobileMenu}>Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;