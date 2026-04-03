import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/',         label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/media',    label: 'Media' },
  { to: '/about',    label: 'About' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled]             = useState(false);
  const location = useLocation();
  const isHome   = location.pathname === '/';

  // Update scroll state on route change (handles back-navigation)
  useEffect(() => {
    setIsScrolled(window.scrollY > 50);
  }, [location.pathname]);

  // Listen for scroll events
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Transparent only on the hero (home page, not scrolled)
  const transparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? 'bg-transparent' : 'bg-white shadow-md'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/logoHeader.png"
              alt="Instant Catering Services Logo"
              className="w-11 h-11 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className={`text-sm md:text-base font-bold uppercase tracking-wider transition-colors duration-300 ${
                transparent ? 'text-white' : 'text-green-900'
              }`}>
                Instant Catering Services
              </span>
              <span className={`text-xs transition-colors duration-300 ${
                transparent ? 'text-green-100' : 'text-gray-500'
              }`}>
                Premium In-Flight Catering Solutions
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-300 group ${
                    transparent
                      ? 'text-white hover:text-green-200'
                      : active
                        ? 'text-[#3B8454]'
                        : 'text-gray-700 hover:text-[#3B8454]'
                  }`}
                >
                  {label}
                  {/* Underline indicator */}
                  <span className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300 origin-left ${
                    active
                      ? 'bg-[#3B8454] scale-x-100'
                      : 'bg-[#3B8454] scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2.5 bg-[#3B8454] text-white text-sm font-semibold uppercase tracking-wider rounded-md hover:bg-[#2D6B41] transition-colors duration-300"
            >
              Get a Quote
            </Link>
          </nav>

          {/* ── Mobile Hamburger ── */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              transparent ? 'text-white' : 'text-gray-700'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 py-3' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`py-3 px-4 text-sm font-medium uppercase tracking-wider rounded-lg transition-colors ${
                location.pathname === to
                  ? 'bg-[#E8F5EB] text-[#3B8454] font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 py-3 px-4 bg-[#3B8454] text-white text-center text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-[#2D6B41] transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
