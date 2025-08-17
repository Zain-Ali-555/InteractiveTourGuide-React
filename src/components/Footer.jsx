import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">AI</span>
            </div>
            <span className="text-lg font-bold text-gray-900">AI JOBS</span>
          </div>
          
          <p className="text-gray-600 text-sm">
            Built with Vite + React + Tailwind + react-joyride
          </p>
          
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <button className="hover:text-gray-700 transition-colors">Privacy</button>
            <button className="hover:text-gray-700 transition-colors">Terms</button>
            <button className="hover:text-gray-700 transition-colors">Contact</button>
          </div>
          
          <p className="text-xs text-gray-400">
            © 2025 AI JOBS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;