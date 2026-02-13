import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-4 py-2 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-xl sm:text-2xl shadow-md group-hover:scale-105 transition-transform duration-200 border border-white/20">
            ☁️
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl sm:text-2xl tracking-tight leading-none bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              WhetherApp
            </span>
            <span className="text-xs text-blue-100/80 font-medium tracking-wide mt-0.5 hidden sm:block">
              Your Comfort Index
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-2">
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-lg text-white/90 font-medium hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            Dashboard
          </Link>
          
          <Link
            to="/auth"
            className="px-5 py-2 rounded-lg bg-white text-blue-700 font-semibold hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 transform"
          >
            Sign In
          </Link>
          
          <Link
            to="/auth?mode=signup"
            className="px-5 py-2 rounded-lg bg-transparent text-white font-semibold hover:bg-white/15 transition-all duration-200 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* Close icon */}
            <svg
              className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/10 mt-2">
          <Link
            to="/dashboard"
            className="block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          
          <Link
            to="/auth"
            className="block px-3 py-2 rounded-md text-base font-medium bg-white text-blue-700 hover:bg-blue-50 transition-all duration-200 shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </Link>
          
          <Link
            to="/auth?mode=signup"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/15 transition-all duration-200 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;