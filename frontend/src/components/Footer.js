import React from 'react';
import { Link } from 'react-router-dom';

const QUICK_LINKS = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/media',    label: 'Media' },
  { to: '/contact',  label: 'Contact' },
];

const SERVICE_LINKS = [
  'In-Flight Catering',
  'Restaurant Management',
  'Laundry Services',
  'Warehousing & Logistics',
];

const SOCIAL_LINKS = [
  {
    href: 'https://wa.me/8163407112',
    label: 'WhatsApp',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6.01L0 24l6.15-1.58A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22.05c-1.89 0-3.74-.5-5.37-1.45l-.38-.22-3.65.94.98-3.56-.25-.37A9.94 9.94 0 012.05 12c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.14 1.03 7.02 2.9a9.87 9.87 0 012.88 7c0 5.46-4.44 9.9-9.9 9.9zm5.27-7.47c-.29-.15-1.71-.84-1.98-.93-.27-.1-.47-.15-.67.15-.2.29-.77.93-.95 1.12-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.33-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.23-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.2-.57-.35z" />
      </svg>
    ),
  },
  {
    href: 'https://x.com/instantcaterng',
    label: 'X / Twitter',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548z" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/instantcateringservices/',
    label: 'Instagram',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const FooterLink = ({ to, label }) => (
  <li>
    <Link
      to={to}
      className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors duration-300 group"
    >
      <span className="w-1.5 h-1.5 bg-[#3B8454] rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      {label}
    </Link>
  </li>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    {/* ── Main grid ── */}
    <div className="container mx-auto px-4 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/logoHeader.png"
              alt="Instant Catering Services Logo"
              className="w-10 h-10 object-contain"
              loading="lazy"
            />
            <span className="font-bold text-white text-sm uppercase tracking-wider leading-tight">
              Instant Catering<br />Services Ltd.
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Providing premium in-flight catering solutions and hospitality services since 2014.
            Elevating the dining experience for airlines and passengers across Nigeria and beyond.
          </p>
          <div className="flex gap-2">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#3B8454] hover:text-white transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {QUICK_LINKS.map(({ to, label }) => (
              <FooterLink key={to} to={to} label={label} />
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Our Services</h4>
          <ul className="space-y-3">
            {SERVICE_LINKS.map((label) => (
              <FooterLink key={label} to="/services" label={label} />
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[#3B8454] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-400 text-sm">F277G+93H Gwaska, Abuja,<br />Federal Capital Territory</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[#3B8454] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@instantcatering.com.ng" className="text-gray-400 hover:text-white text-sm transition-colors">
                info@instantcatering.com.ng
              </a>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[#3B8454] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <a href="tel:+2347039794467" className="text-gray-400 hover:text-white text-sm block transition-colors">+234 7039794467</a>
                <a href="tel:+2348163407123" className="text-gray-400 hover:text-white text-sm block transition-colors">+234 8163407123</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* ── Bottom bar ── */}
    <div className="border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Instant Catering Services Ltd. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs">Premium In-Flight Catering · Abuja, Nigeria</p>
      </div>
    </div>
  </footer>
);

export default Footer;
