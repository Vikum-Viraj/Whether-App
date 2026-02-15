import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br
           from-blue-600 to-indigo-600 rounded-3xl shadow-2xl mb-8 animate-bounce">
            <span className="text-5xl">☁️</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-5">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SkyIndex
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Discover the most comfortable cities to visit based on real-time weather data and our unique comfort index
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              View Weather Rankings
              <FaArrowRight className="text-white" />
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-200">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <span className="text-4xl">🌡️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Data</h3>
            <p className="text-gray-600">
              Get accurate, up-to-date weather information from cities around the world
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-200">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <span className="text-4xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Comfort Index</h3>
            <p className="text-gray-600">
              Cities ranked by our unique comfort score based on temperature, humidity, and more
            </p>
          </div>


          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-200">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <span className="text-4xl">📈</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Temperature Trends</h3>
            <p className="text-gray-600">
              Visualize temperature changes over time with interactive graphs and charts
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-300 mt-20">
        <div className="max-w-8xl mx-auto px-4 py-8 text-center text-gray-600">
          <p className="text-sm">
            © 2025 WhetherApp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;