import React from 'react';
import { Play } from 'lucide-react';

const Navbar = ({ onStartTour }) => {
  return (
    <nav 
      data-tour="navbar"
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">AI JOBS</span>
          </div>

          {/* Start Tour Button */}
          <button
            onClick={onStartTour}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Play className="w-4 h-4" />
            <span>Start Tour</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;