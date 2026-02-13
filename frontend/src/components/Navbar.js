import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-transform duration-200 border border-white/20">
            ☁️
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl tracking-tight leading-none bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              WhetherApp
            </span>
            <span className="text-xs text-blue-100/80 font-medium tracking-wide mt-0.5">
              Your Comfort Index
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-2">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg text-white/90 font-medium hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            Home
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
      </div>
    </nav>
  );
}

export default Navbar;