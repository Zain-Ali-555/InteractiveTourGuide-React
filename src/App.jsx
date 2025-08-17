import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import Footer from './components/Footer';
import Tour from './components/Tour';

function App() {
  const [isTourRunning, setIsTourRunning] = useState(false);

  const handleStartTour = () => {
    setIsTourRunning(true);
  };

  const handleTourEnd = () => {
    setIsTourRunning(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onStartTour={handleStartTour} />
      <Hero />
      <FeatureCards />
      <Footer />
      <Tour isRunning={isTourRunning} onTourEnd={handleTourEnd} />
    </div>
  );
}

export default App;