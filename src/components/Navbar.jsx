import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/reviews', label: 'Reviews' }
  ];
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-row justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-white tracking-wide mr-4">
          <svg className="w-7 h-7 text-yellow-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a1 1 0 0 1 .894.553l2.382 4.83 5.334.775a1 1 0 0 1 .554 1.707l-3.858 3.762.911 5.312a1 1 0 0 1-1.451 1.054L12 17.347l-4.768 2.506a1 1 0 0 1-1.451-1.054l.911-5.312-3.858-3.762a1 1 0 0 1 .554-1.707l5.334-.775L11.106 2.553A1 1 0 0 1 12 2z"/></svg>
          InspireMe
        </Link>
        {/* for mobile */}
        <button
          className="md:hidden flex items-center px-2 py-1 text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        {/* Desktop nav */}
        <div className="hidden md:flex space-x-2 md:space-x-6 text-sm md:text-base flex-1 justify-end">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1 rounded transition font-semibold ${location.pathname === link.to ? 'bg-white text-indigo-600 shadow' : 'text-white hover:bg-white/20 hover:text-yellow-300'}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile nav links */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 pb-4 pt-2 flex flex-col space-y-2 shadow z-30">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-3 py-2 rounded transition font-semibold ${location.pathname === link.to ? 'bg-white text-indigo-600 shadow' : 'text-white hover:bg-white/20 hover:text-yellow-300'}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
