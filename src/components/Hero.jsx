import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      data-tour="hero"
      className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Career Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Unlock Your
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Career</span> 
                Potential
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Join thousands of professionals who are future-proofing their careers with AI. 
                Discover opportunities, build skills, and land your dream job in the AI revolution.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="AI Technology and Career Growth"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">AI Jobs Available</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-1">24,847</p>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-float-delayed">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Success Rate</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-1">94%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;