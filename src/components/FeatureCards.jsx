import React from 'react';
import { Sparkles, Rocket, Brain } from 'lucide-react';

const features = [
  {
    
    icon: Sparkles,
    title: 'Smart Careers',
    description: 'AI is unlocking new job roles every day—be future-ready with our intelligent career matching system.',
    gradient: 'from-blue-500 to-cyan-500',
    hoverColor: 'hover:shadow-blue-500/25'
  },
  {
    icon: Rocket,
    title: 'Skill Upgrade',
    description: 'Learn AI-powered tools to stay ahead in the competitive job market with our curated learning paths.',
    gradient: 'from-purple-500 to-pink-500',
    hoverColor: 'hover:shadow-purple-500/25'
  },
  {
    icon: Brain,
    title: 'Resume Boost',
    description: 'Optimize your resume with AI-driven insights and get noticed by top employers in the tech industry.',
    gradient: 'from-green-500 to-emerald-500',
    hoverColor: 'hover:shadow-green-500/25'
  }
];

const FeatureCards = () => {
  return (
    <section data-tour="cards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose AI Jobs?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools and insights to accelerate your AI career journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group bg-white p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-2xl ${feature.hoverColor} hover:-translate-y-2 cursor-pointer`}
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="pt-4">
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm uppercase tracking-wide transition-colors group-hover:underline">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;